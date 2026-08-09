"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CalculatorSteps from "./CalculatorSteps";
import ResultsDisplay from "./ResultsDisplay";
import { calculateROI, CalculatorInput, ROIResults } from "./calculations";

interface ROICalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

interface EmailOptInData {
  email: string;
  name?: string;
  company?: string;
  position?: string;
}

export default function ROICalculator({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com" // Fallback URL
}: ROICalculatorProps) {
  const [results, setResults] = useState<ROIResults | null>(null);
  const [inputData, setInputData] = useState<(CalculatorInput & { industry?: string }) | null>(null);

  // Das Ergebnis wird sofort nach Abschluss der Eingaben berechnet und angezeigt.
  // Kein E-Mail-Pflichtfeld davor.
  const handleCalculatorComplete = (data: CalculatorInput & { industry?: string }) => {
    const { industry, ...calculatorInput } = data;
    const calculatedResults = calculateROI(calculatorInput);

    setResults(calculatedResults);
    setInputData({ ...calculatorInput, industry });
  };

  // Optionale Zusatzfunktion auf der Ergebnisseite: Nutzer kann das Ergebnis
  // freiwillig per E-Mail zugeschickt bekommen. Speichern und Versenden
  // passieren ausschließlich bei diesem expliziten Opt-in.
  const handleEmailOptIn = async (leadData: EmailOptInData) => {
    if (!results || !inputData) return;

    const { industry, ...calculatorInput } = inputData;
    const payload = {
      email: leadData.email,
      name: leadData.name,
      company: leadData.company,
      position: leadData.position,
      industry,
      input: calculatorInput,
      results,
    };

    // Speichern in der Datenbank ist ein Nebeneffekt für den Lead-Datensatz.
    // Ein Fehler hier soll den Versand der E-Mail an den Nutzer nicht verhindern.
    try {
      await fetch('/api/save-roi-calculation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Error saving to database:', error);
    }

    const response = await fetch('/api/send-roi-results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  };

  const handleBookCall = () => {
    // Open Calendly in new tab
    window.open(calendlyUrl, '_blank');
  };

  const handleClose = () => {
    // Reset state when closing
    setResults(null);
    setInputData(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Hide default header when showing results */}
        {!results && (
          <DialogHeader className="sr-only">
            <DialogTitle>KI-ROI-Rechner</DialogTitle>
            <DialogDescription>
              Berechnen Sie Ihr KI-Einsparpotenzial in 2 Minuten
            </DialogDescription>
          </DialogHeader>
        )}

        {!results ? (
          <CalculatorSteps onComplete={handleCalculatorComplete} />
        ) : (
          <ResultsDisplay
            results={results}
            inputData={{
              useCase: inputData!.useCase,
              numEmployees: inputData!.numEmployees,
              timeframMonths: inputData!.timeframMonths,
            }}
            onBookCall={handleBookCall}
            onSendEmail={handleEmailOptIn}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
