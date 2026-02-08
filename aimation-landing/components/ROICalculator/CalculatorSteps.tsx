"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Calculator, Mail, Sparkles, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CalculatorInput,
  UseCaseType,
  PackageType,
  USE_CASE_PRESETS,
  PACKAGE_PRESETS,
  getUseCaseLabel,
  getUseCaseDescription,
  getPackageLabel,
  getPackageDescription,
  getPackageAudience,
  formatCurrency
} from "./calculations";

interface CalculatorStepsProps {
  onComplete: (data: CalculatorInput & {
    email: string;
    name?: string;
    company?: string;
    position?: string;
    industry?: string;
  }) => void;
}

export default function CalculatorSteps({ onComplete }: CalculatorStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    industry: "",
    useCase: "custom" as UseCaseType,
    package: "professional" as PackageType,
    numEmployees: "",
    hourlyWage: "",
    weeklyHours: "",
    setupCost: "",
    monthlyCost: "",
    timeframMonths: "",
    rampUpMonths: "",
    email: "",
    name: "",
    company: "",
    position: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // When use case changes, prefill values
  useEffect(() => {
    if (formData.useCase) {
      const preset = USE_CASE_PRESETS[formData.useCase];
      setFormData(prev => ({
        ...prev,
        weeklyHours: preset.weeklyHours.toString(),
        hourlyWage: preset.hourlyWage.toString(),
        numEmployees: preset.numEmployees.toString(),
        setupCost: preset.setupCost.toString(),
        monthlyCost: preset.monthlyCost.toString(),
        timeframMonths: preset.timeframMonths.toString(),
        rampUpMonths: preset.rampUpMonths.toString(),
      }));
    }
  }, [formData.useCase]);

  // When package changes, update costs
  useEffect(() => {
    if (formData.package) {
      const packagePreset = PACKAGE_PRESETS[formData.package];
      setFormData(prev => ({
        ...prev,
        setupCost: packagePreset.setupCost.toString(),
        monthlyCost: packagePreset.monthlyCost.toString(),
      }));
    }
  }, [formData.package]);

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Welcome
      case 1: // Industry (optional)
      case 2: // Use Case Selection
      case 6: // Package Selection (has defaults)
        return true;

      case 3: // Weekly hours
        if (!formData.weeklyHours || Number(formData.weeklyHours) < 0.5 || Number(formData.weeklyHours) > 40) {
          newErrors.weeklyHours = "Bitte geben Sie eine gültige Stundenanzahl ein (0.5-40)";
        }
        break;

      case 4: // Hourly wage
        if (!formData.hourlyWage || Number(formData.hourlyWage) < 10) {
          newErrors.hourlyWage = "Bitte geben Sie einen gültigen Stundenlohn ein (mind. €10)";
        }
        break;

      case 5: // Number of employees
        if (!formData.numEmployees || Number(formData.numEmployees) < 1) {
          newErrors.numEmployees = "Bitte geben Sie eine gültige Mitarbeiteranzahl ein";
        }
        break;

      case 7: // Timeframe
        if (!formData.timeframMonths || Number(formData.timeframMonths) < 1) {
          newErrors.timeframMonths = "Bitte geben Sie einen gültigen Zeitraum ein (mind. 1 Monat)";
        }
        if (!formData.rampUpMonths || Number(formData.rampUpMonths) < 0) {
          newErrors.rampUpMonths = "Bitte geben Sie eine gültige Anlaufzeit ein";
        }
        if (Number(formData.rampUpMonths) >= Number(formData.timeframMonths)) {
          newErrors.rampUpMonths = "Anlaufzeit muss kürzer als Gesamtzeitraum sein";
        }
        break;

      case 8: // Email
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
      if (currentStep === 8) {
        // Last step - submit
        onComplete({
          useCase: formData.useCase,
          package: formData.package,
          numEmployees: Number(formData.numEmployees),
          hourlyWage: Number(formData.hourlyWage),
          weeklyHours: Number(formData.weeklyHours),
          setupCost: Number(formData.setupCost),
          monthlyCost: Number(formData.monthlyCost),
          timeframMonths: Number(formData.timeframMonths),
          rampUpMonths: Number(formData.rampUpMonths),
          email: formData.email,
          name: formData.name,
          company: formData.company,
          position: formData.position,
          industry: formData.industry,
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

  const totalSteps = 8;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Indicator */}
      {currentStep > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300 font-body">
              Schritt {currentStep} von {totalSteps}
            </span>
            <span className="text-sm text-gray-300 font-body">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-magenta to-[#ff4ecd]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
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
              <p className="text-xl text-gray-300 font-body mb-6">
                Erfahren Sie in 2 Minuten, welches <strong className="text-white">geschätzte</strong> Einsparpotenzial KI in Ihrem Unternehmen hat.
              </p>
              <div className="mb-6 px-4 py-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg max-w-lg mx-auto">
                <p className="text-sm text-yellow-100 font-body text-left">
                  <strong>Hinweis:</strong> Dies ist eine grobe Überschlagsrechnung zur ersten Orientierung. Eine detaillierte ROI-Analyse erfolgt im persönlichen Gespräch.
                </p>
              </div>
              <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-magenta flex-shrink-0" />
                  <span className="font-body">Keine Vorkenntnisse nötig</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-magenta flex-shrink-0" />
                  <span className="font-body">Basierend auf Erfahrungswerten</span>
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

          {/* Step 1: Industry Selection */}
          {currentStep === 1 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                In welcher <span className="text-magenta">Branche</span> ist Ihr Unternehmen tätig?
              </h3>
              <p className="text-gray-300 font-body mb-8">
                Dies hilft uns, bessere Empfehlungen für Ihre Situation zu geben. <span className="text-gray-500">(Optional)</span>
              </p>
              <div className="grid gap-3">
                {[
                  { value: 'production', label: 'Produktion / Fertigung' },
                  { value: 'service', label: 'Dienstleistung' },
                  { value: 'trade', label: 'Handel' },
                  { value: 'it', label: 'IT / Software' },
                  { value: 'craft', label: 'Handwerk' },
                  { value: 'other', label: 'Sonstige' },
                ].map((industry) => (
                  <button
                    key={industry.value}
                    onClick={() => {
                      setFormData({ ...formData, industry: industry.value });
                      setErrors({});
                    }}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      formData.industry === industry.value
                        ? 'border-magenta bg-magenta/10'
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-lg text-white">{industry.label}</span>
                      {formData.industry === industry.value && (
                        <Check className="w-5 h-5 text-magenta flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setFormData({ ...formData, industry: '' });
                  handleNext();
                }}
                className="mt-4 text-gray-400 hover:text-gray-300 font-body text-sm underline"
              >
                Überspringen
              </button>
            </div>
          )}

          {/* Step 2: Use Case Selection */}
          {currentStep === 2 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wählen Sie einen <span className="text-magenta">Use Case</span> oder eigene Werte
              </h3>
              <p className="text-gray-300 font-body mb-8">
                Für typische Szenarien haben wir Voreinstellungen vorbereitet. Alle Werte können Sie später anpassen.
              </p>
              <div className="grid gap-4">
                {(['research', 'documentation', 'meetings', 'custom'] as UseCaseType[]).map((useCase) => (
                  <button
                    key={useCase}
                    onClick={() => {
                      setFormData({ ...formData, useCase });
                      setErrors({});
                    }}
                    className={`text-left p-6 rounded-lg border-2 transition-all ${
                      formData.useCase === useCase
                        ? 'border-magenta bg-magenta/10'
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-heading text-xl text-white mb-1">
                          {getUseCaseLabel(useCase)}
                        </div>
                        <div className="text-sm text-gray-300 font-body">
                          {getUseCaseDescription(useCase)}
                        </div>
                      </div>
                      {formData.useCase === useCase && (
                        <Check className="w-6 h-6 text-magenta flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Weekly Hours */}
          {currentStep === 3 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wie viele <span className="text-magenta">Stunden pro Woche</span> könnten eingespart werden?
              </h3>
              <p className="text-gray-300 font-body mb-4">
                Schätzung pro Mitarbeiter: Zeit für manuelle Aufgaben, die durch KI-Automatisierung eingespart werden könnte.
              </p>
              <Input
                type="number"
                placeholder="z.B. 3"
                value={formData.weeklyHours}
                onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                onKeyPress={handleKeyPress}
                error={!!errors.weeklyHours}
                errorMessage={errors.weeklyHours}
                autoFocus
                min="0.5"
                max="40"
                step="0.5"
                className="text-lg"
              />
              <p className="text-sm text-gray-400 font-body mt-2">
                Übliche Bandbreite: 1-10 Stunden/Woche pro Person
              </p>
            </div>
          )}

          {/* Step 4: Hourly Wage */}
          {currentStep === 4 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Durchschnittlicher <span className="text-magenta">Stundenlohn</span>?
              </h3>
              <p className="text-gray-300 font-body mb-8">
                Bruttostundenlohn der betroffenen Mitarbeiter in Euro.
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">€</span>
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

          {/* Step 5: Number of Employees */}
          {currentStep === 5 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wie viele <span className="text-magenta">Mitarbeiter</span> sind betroffen?
              </h3>
              <p className="text-gray-300 font-body mb-8">
                Anzahl der Mitarbeiter, die von dieser Automatisierung profitieren würden.
              </p>
              <Input
                type="number"
                placeholder="z.B. 10"
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

          {/* Step 6: Package Selection */}
          {currentStep === 6 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                Wählen Sie ein <span className="text-magenta">Paket</span>
              </h3>
              <p className="text-gray-300 font-body mb-6">
                Basierend auf Ihrer Unternehmensgröße und dem Use Case empfehlen wir diese Pakete. Kosten können Sie anschließend anpassen.
              </p>
              <div className="grid gap-4 mb-6">
                {(['starter', 'professional', 'enterprise'] as PackageType[]).map((pkg) => {
                  const preset = PACKAGE_PRESETS[pkg];
                  return (
                    <button
                      key={pkg}
                      onClick={() => {
                        setFormData({ ...formData, package: pkg });
                        setErrors({});
                      }}
                      className={`text-left p-6 rounded-lg border-2 transition-all ${
                        formData.package === pkg
                          ? 'border-magenta bg-magenta/10'
                          : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag className="w-5 h-5 text-magenta flex-shrink-0" />
                            <div className="font-heading text-xl text-white">
                              {getPackageLabel(pkg)}
                            </div>
                          </div>
                          <div className="text-sm text-gray-300 font-body mb-2">
                            {getPackageDescription(pkg)}
                          </div>
                          <div className="text-xs text-gray-500 font-body mb-3">
                            {getPackageAudience(pkg)}
                          </div>
                          <div className="flex items-baseline gap-4">
                            <div>
                              <span className="text-2xl font-bold text-white font-heading">
                                {formatCurrency(preset.setupCost)}
                              </span>
                              <span className="text-sm text-gray-400 font-body ml-2">Setup</span>
                            </div>
                            <div>
                              <span className="text-lg font-semibold text-white font-heading">
                                {formatCurrency(preset.monthlyCost)}
                              </span>
                              <span className="text-sm text-gray-400 font-body ml-2">/Monat</span>
                            </div>
                          </div>
                        </div>
                        {formData.package === pkg && (
                          <Check className="w-6 h-6 text-magenta flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                <p className="text-sm text-blue-100 font-body">
                  <strong>💡 Hinweis:</strong> Diese Werte sind Richtwerte zur Orientierung. Die genauen Kosten für Ihr Projekt klären wir im kostenlosen Erstgespräch.
                </p>
              </div>
            </div>
          )}

          {/* Step 7: Timeframe */}
          {currentStep === 7 && (
            <div className="py-8">
              <h3 className="text-3xl font-bold font-heading text-white mb-3">
                <span className="text-magenta">Betrachtungszeitraum</span>
              </h3>
              <p className="text-gray-400 font-body mb-6">
                Über welchen Zeitraum möchten Sie den ROI berechnen?
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-body">
                    Gesamtzeitraum (Monate)
                  </label>
                  <Input
                    type="number"
                    placeholder="z.B. 12"
                    value={formData.timeframMonths}
                    onChange={(e) => setFormData({ ...formData, timeframMonths: e.target.value })}
                    error={!!errors.timeframMonths}
                    errorMessage={errors.timeframMonths}
                    min="1"
                    max="60"
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-400 font-body mt-1">
                    Typisch: 12 Monate (1 Jahr)
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-body">
                    Anlaufzeit (Monate)
                  </label>
                  <Input
                    type="number"
                    placeholder="z.B. 2"
                    value={formData.rampUpMonths}
                    onChange={(e) => setFormData({ ...formData, rampUpMonths: e.target.value })}
                    onKeyPress={handleKeyPress}
                    error={!!errors.rampUpMonths}
                    errorMessage={errors.rampUpMonths}
                    min="0"
                    max="12"
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-400 font-body mt-1">
                    Zeit bis die Automatisierung voll produktiv ist
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Email Gate */}
          {currentStep === 8 && (
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
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-body">
                    Firmenname <span className="text-gray-500">(optional)</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="z.B. Mustermann GmbH"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-400 font-body mt-1">
                    Hilft uns, bessere Empfehlungen zu geben
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-body">
                    Position / Rolle <span className="text-gray-500">(optional)</span>
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white font-body text-lg focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="ceo">Geschäftsführer / Inhaber</option>
                    <option value="department_head">Abteilungsleiter</option>
                    <option value="it_head">IT-Leiter</option>
                    <option value="process_owner">Prozessverantwortlicher</option>
                    <option value="other">Sonstige</option>
                  </select>
                  <p className="text-xs text-gray-400 font-body mt-1">
                    Hilft uns, relevante Informationen bereitzustellen
                  </p>
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
            {currentStep === 8 ? 'Ergebnis anzeigen' : 'Weiter'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
