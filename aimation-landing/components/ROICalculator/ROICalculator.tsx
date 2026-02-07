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

export default function ROICalculator({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com" // Fallback URL
}: ROICalculatorProps) {
  const [results, setResults] = useState<ROIResults | null>(null);
  const [inputData, setInputData] = useState<CalculatorInput | null>(null);
  const [emailData, setEmailData] = useState<{ email: string; name?: string } | null>(null);

  const handleComplete = async (data: CalculatorInput & { email: string; name?: string }) => {
    const { email, name, ...calculatorInput } = data;

    // Calculate ROI
    const calculatedResults = calculateROI(calculatorInput);

    // Store data
    setResults(calculatedResults);
    setInputData(calculatorInput);
    setEmailData({ email, name });

    // Send results via API
    try {
      const response = await fetch('/api/send-roi-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          input: calculatorInput,
          results: calculatedResults,
        }),
      });

      if (!response.ok) {
        console.error('Failed to send email');
        // Still show results even if email fails
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Still show results even if email fails
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
    setEmailData(null);
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
          <CalculatorSteps onComplete={handleComplete} />
        ) : (
          <ResultsDisplay
            results={results}
            inputData={{
              numEmployees: inputData!.numEmployees,
              priority: inputData!.priority,
            }}
            onBookCall={handleBookCall}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
