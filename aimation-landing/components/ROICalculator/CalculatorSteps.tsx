"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Calculator, Mail, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalculatorInput } from "./calculations";

interface CalculatorStepsProps {
  onComplete: (data: CalculatorInput & { email: string; name?: string }) => void;
}

export default function CalculatorSteps({ onComplete }: CalculatorStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    numEmployees: "",
    hourlyWage: "",
    weeklyHours: "",
    priority: "",
    email: "",
    name: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Welcome screen - no validation needed
        return true;

      case 1: // Number of employees
        if (!formData.numEmployees || Number(formData.numEmployees) < 1) {
          newErrors.numEmployees = "Bitte geben Sie eine gültige Mitarbeiteranzahl ein";
        }
        break;

      case 2: // Hourly wage
        if (!formData.hourlyWage || Number(formData.hourlyWage) < 10) {
          newErrors.hourlyWage = "Bitte geben Sie einen gültigen Stundenlohn ein (mind. €10)";
        }
        break;

      case 3: // Weekly hours
        if (!formData.weeklyHours || Number(formData.weeklyHours) < 1 || Number(formData.weeklyHours) > 40) {
          newErrors.weeklyHours = "Bitte geben Sie eine gültige Stundenanzahl ein (1-40)";
        }
        break;

      case 4: // Priority area
        if (!formData.priority) {
          newErrors.priority = "Bitte wählen Sie einen Schwerpunkt";
        }
        break;

      case 5: // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
          newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        // Last step - submit
        onComplete({
          numEmployees: Number(formData.numEmployees),
          hourlyWage: Number(formData.hourlyWage),
          weeklyHours: Number(formData.weeklyHours),
          priority: formData.priority as CalculatorInput['priority'],
          email: formData.email,
          name: formData.name,
        });
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Indicator */}
      {currentStep > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400 font-body">
              Schritt {currentStep} von 5
            </span>
            <span className="text-sm text-gray-400 font-body">
              {Math.round((currentStep / 5) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-magenta to-[#ff4ecd]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Welcome */}
          {currentStep === 0 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-magenta/20 flex items-center justify-center">
                <Calculator className="w-10 h-10 text-magenta" />
              </div>
              <h2 className="text-4xl font-bold font-heading text-white mb-4">
                KI-ROI-Rechner für <span className="text-magenta">KMUs</span>
              </h2>
              <p className="text-xl text-gray-300 font-body mb-8">
                Erfahren Sie in 2 Minuten, welches Einsparpotenzial KI in Ihrem Unternehmen hat.
              </p>
              <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-magenta flex-shrink-0" />
                  <span className="font-body">Keine Vorkenntnisse nötig</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-magenta flex-shrink-0" />
                  <span className="font-body">Basierend auf echten Projekten</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-magenta flex-shrink-0" />
                  <span className="font-body">100% kostenlos & unverbindlich</span>
                </div>
              </div>
              <Button
                onClick={handleNext}
                size="lg"
                className="group bg-gradient-to-r from-magenta to-[#ff4ecd] hover:opacity-90 text-white font-heading text-lg px-8 py-6 glow-magenta"
              >
                Jetzt berechnen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Step 1: Number of Employees */}
          {currentStep === 1 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wie viele <span className="text-magenta">Mitarbeiter</span> hat Ihr Unternehmen?
              </h3>
              <p className="text-gray-400 font-body mb-8">
                Geben Sie die ungefähre Anzahl Ihrer Mitarbeiter an.
              </p>
              <Input
                type="number"
                placeholder="z.B. 50"
                value={formData.numEmployees}
                onChange={(e) => setFormData({ ...formData, numEmployees: e.target.value })}
                onKeyPress={handleKeyPress}
                error={!!errors.numEmployees}
                errorMessage={errors.numEmployees}
                autoFocus
                min="1"
                max="10000"
                className="text-lg"
              />
            </div>
          )}

          {/* Step 2: Hourly Wage */}
          {currentStep === 2 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wie hoch ist der durchschnittliche <span className="text-magenta">Stundenlohn</span>?
              </h3>
              <p className="text-gray-400 font-body mb-8">
                Durchschnittlicher Bruttostundenlohn Ihrer Mitarbeiter in Euro.
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">€</span>
                <Input
                  type="number"
                  placeholder="z.B. 45"
                  value={formData.hourlyWage}
                  onChange={(e) => setFormData({ ...formData, hourlyWage: e.target.value })}
                  onKeyPress={handleKeyPress}
                  error={!!errors.hourlyWage}
                  errorMessage={errors.hourlyWage}
                  autoFocus
                  min="10"
                  max="200"
                  className="text-lg pl-10"
                />
              </div>
            </div>
          )}

          {/* Step 3: Weekly Hours */}
          {currentStep === 3 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wie viele <span className="text-magenta">Stunden pro Woche</span> gehen für manuelle Aufgaben drauf?
              </h3>
              <p className="text-gray-400 font-body mb-8">
                Schätzung pro Mitarbeiter: E-Mails, Dokumentation, Recherche, etc.
              </p>
              <Input
                type="number"
                placeholder="z.B. 15"
                value={formData.weeklyHours}
                onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                onKeyPress={handleKeyPress}
                error={!!errors.weeklyHours}
                errorMessage={errors.weeklyHours}
                autoFocus
                min="1"
                max="40"
                className="text-lg"
              />
              <p className="text-sm text-gray-500 font-body mt-2">
                Typisch: 10-20 Stunden/Woche
              </p>
            </div>
          )}

          {/* Step 4: Priority Area */}
          {currentStep === 4 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Was ist Ihr <span className="text-magenta">Hauptschwerpunkt</span>?
              </h3>
              <p className="text-gray-400 font-body mb-8">
                Welchen Bereich möchten Sie priorisiert optimieren?
              </p>
              <div className="grid gap-4">
                {[
                  { value: 'documentation', label: 'Dokumentation', desc: 'Berichte, Protokolle, Dokumentenverwaltung' },
                  { value: 'email', label: 'E-Mail-Kommunikation', desc: 'Postfach-Management, Antworten, Klassifizierung' },
                  { value: 'research', label: 'Recherche', desc: 'Informationsbeschaffung, Marktanalyse' },
                  { value: 'reporting', label: 'Reporting', desc: 'Dashboards, Auswertungen, Analysen' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setFormData({ ...formData, priority: option.value });
                      setErrors({});
                    }}
                    className={`text-left p-6 rounded-lg border-2 transition-all ${
                      formData.priority === option.value
                        ? 'border-magenta bg-magenta/10'
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-heading text-xl text-white mb-1">{option.label}</div>
                        <div className="text-sm text-gray-400 font-body">{option.desc}</div>
                      </div>
                      {formData.priority === option.value && (
                        <Check className="w-6 h-6 text-magenta flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              {errors.priority && (
                <p className="mt-4 text-sm text-red-400">{errors.priority}</p>
              )}
            </div>
          )}

          {/* Step 5: Email Gate */}
          {currentStep === 5 && (
            <div className="py-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-magenta/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-magenta" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-white mb-3 text-center">
                Ihre Berechnung ist fast <span className="text-magenta">fertig</span>!
              </h3>
              <p className="text-xl text-gray-400 font-body mb-8 text-center">
                Wohin sollen wir Ihr persönliches ROI-Ergebnis senden?
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-body">
                    E-Mail-Adresse <span className="text-magenta">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="ihre.email@firma.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onKeyPress={handleKeyPress}
                    error={!!errors.email}
                    errorMessage={errors.email}
                    autoFocus
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-body">
                    Name <span className="text-gray-500">(optional)</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="text-lg"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Sparkles className="w-5 h-5 text-magenta flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 font-body">
                  <strong className="text-white">Ihre Daten sind sicher.</strong> Wir verwenden Ihre E-Mail nur, um Ihnen das Ergebnis zu senden. DSGVO-konform, kein Spam.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {currentStep > 0 && (
        <div className="flex gap-4 mt-8">
          <Button
            onClick={handleBack}
            variant="outline"
            size="lg"
            className="flex-1 border-gray-700 text-white hover:bg-gray-800"
          >
            Zurück
          </Button>
          <Button
            onClick={handleNext}
            size="lg"
            className="flex-1 bg-gradient-to-r from-magenta to-[#ff4ecd] hover:opacity-90 text-white font-heading glow-magenta"
          >
            {currentStep === 5 ? 'Ergebnis anzeigen' : 'Weiter'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
