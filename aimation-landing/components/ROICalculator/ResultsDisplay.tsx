"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Euro, Calendar, Percent, ExternalLink, TrendingDown, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ROIResults, formatCurrency, getUseCaseLabel, UseCaseType } from "./calculations";

interface ResultsDisplayProps {
  results: ROIResults;
  inputData: {
    useCase: UseCaseType;
    numEmployees: number;
    timeframMonths: number;
  };
  onBookCall: () => void;
  onSendEmail: (data: { email: string }) => Promise<void>;
}

type EmailStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ResultsDisplay({ results, inputData, onBookCall, onSendEmail }: ResultsDisplayProps) {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<EmailStatus>('idle');
  const [emailError, setEmailError] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }
    setEmailError("");
    setEmailStatus('submitting');
    try {
      await onSendEmail({ email });
      setEmailStatus('success');
    } catch (error) {
      console.error('Error sending ROI results by email:', error);
      setEmailStatus('error');
    }
  };

  const isPositiveROI = results.netBenefit > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Main Result */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
          Ihre <span className="text-magenta">ROI-Berechnung</span>
        </h2>

        {/* DISCLAIMER - Sehr prominent platziert */}
        <div className="mb-6 px-6 py-4 bg-yellow-900/20 border-2 border-yellow-700/40 rounded-lg">
          <p className="text-base text-yellow-100 font-body leading-relaxed">
            <strong className="text-yellow-50">⚠️ Wichtiger Hinweis:</strong> Dies ist eine <strong className="text-yellow-50">grobe Überschlagsrechnung</strong>, keine verbindliche ROI-Analyse.
            Eine detaillierte Berechnung erfolgt im persönlichen Gespräch unter Berücksichtigung Ihrer spezifischen Prozesse, Rahmenbedingungen,
            Implementierungskosten, Change-Management-Aufwände und individuellen Use Cases.
          </p>
        </div>

        {/* Primary Metric: Net Benefit */}
        <Card className={`bg-gradient-to-br from-gray-900 to-gray-800 ${isPositiveROI ? 'border-green-500/30' : 'border-red-500/30'} mb-6`}>
          <CardContent className="pt-12 pb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              {isPositiveROI ? (
                <TrendingUp className="w-8 h-8 text-green-400" />
              ) : (
                <TrendingDown className="w-8 h-8 text-red-400" />
              )}
              <span className="text-lg font-heading text-gray-300 uppercase tracking-wide">
                Netto-Nutzen ({inputData.timeframMonths} Monate)
              </span>
            </div>
            <div className={`text-6xl md:text-7xl font-bold font-heading ${isPositiveROI ? 'text-green-400' : 'text-red-400'} mb-2`}>
              <AnimatedCounter
                target={results.netBenefit}
                duration={2}
                prefix={results.netBenefit >= 0 ? "+" : ""}
                suffix=" €"
                separator={false}
              />
            </div>
            <p className="text-gray-400 font-body">
              {isPositiveROI ? 'Gewinn nach Abzug aller Kosten' : 'Verlust im Betrachtungszeitraum'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* ROI Percentage */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Percent className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className={`text-3xl font-bold font-heading mb-1 ${results.roiPercent >= 0 ? 'text-white' : 'text-red-400'}`}>
              {results.roiPercent >= 0 ? '+' : ''}{results.roiPercent}%
            </div>
            <div className="text-sm text-gray-400 font-body">Return on Investment</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              {results.roiPercent >= 100 ? 'Exzellent' : results.roiPercent >= 50 ? 'Sehr gut' : results.roiPercent >= 0 ? 'Positiv' : 'Negativ'}
            </div>
          </CardContent>
        </Card>

        {/* Amortization */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Calendar className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className="text-3xl font-bold font-heading text-white mb-1">
              {results.amortizationMonths < 999 ? results.amortizationMonths : '∞'}
            </div>
            <div className="text-sm text-gray-400 font-body">Monate bis Amortisation</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              {results.amortizationMonths < 6 ? 'Sehr schnell' : results.amortizationMonths < 12 ? 'Schnell' : results.amortizationMonths < 24 ? 'Moderat' : 'Langfristig'}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Savings */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Clock className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className="text-3xl font-bold font-heading text-white mb-1">
              {formatCurrency(results.weeklySavings)}
            </div>
            <div className="text-sm text-gray-400 font-body">Einsparung/Woche</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              = {formatCurrency(results.weeklySavings * 4.333)}/Monat
            </div>
          </CardContent>
        </Card>

        {/* Total Investment */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Euro className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className="text-3xl font-bold font-heading text-white mb-1">
              {formatCurrency(results.totalInvestment)}
            </div>
            <div className="text-sm text-gray-400 font-body">Gesamtinvestition</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              Setup + laufende Kosten
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown Summary */}
      <Card className="bg-gray-900/30 border-gray-800 mb-8">
        <CardContent className="pt-6 pb-6">
          <h4 className="text-xl font-bold font-heading text-white mb-4">Zusammenfassung</h4>
          <div className="space-y-3 text-gray-300 font-body text-sm">
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span>Use Case:</span>
              <span className="text-white font-medium">{getUseCaseLabel(inputData.useCase)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span>Betroffene Mitarbeiter:</span>
              <span className="text-white font-medium">{inputData.numEmployees}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span>Betrachtungszeitraum:</span>
              <span className="text-white font-medium">{inputData.timeframMonths} Monate</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span>Produktive Wochen:</span>
              <span className="text-white font-medium">{results.productiveWeeks}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span className="text-green-400">✓ Gesamteinsparung:</span>
              <span className="text-green-400 font-medium">{formatCurrency(results.totalSavings)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <span className="text-red-400">− Gesamtinvestition:</span>
              <span className="text-red-400 font-medium">{formatCurrency(results.totalInvestment)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold">= Netto-Nutzen:</span>
              <span className={`text-lg font-bold ${isPositiveROI ? 'text-green-400' : 'text-red-400'}`}>
                {results.netBenefit >= 0 ? '+' : ''}{formatCurrency(results.netBenefit)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optionaler Zusatz: Ergebnis per E-Mail. Kein Pflichtfeld, das Ergebnis oben steht bereits fest. */}
      <Card className="bg-gray-900/30 border-gray-800 mb-8">
        <CardContent className="pt-6 pb-6">
          {emailStatus === 'success' ? (
            <div className="flex items-center gap-3 text-green-400">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              <p className="font-body text-sm">
                Gesendet. Die Berechnung liegt gleich in Ihrem Postfach.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-magenta flex-shrink-0" />
                <h4 className="text-lg font-bold font-heading text-white">
                  Ergebnis als PDF erhalten?
                </h4>
              </div>
              <p className="text-sm text-gray-300 font-body mb-4">
                Tragen Sie Ihre E-Mail ein, ich schicke Ihnen die Berechnung mit einer kurzen persönlichen Einordnung.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="ihre.email@firma.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  errorMessage={emailError}
                  disabled={emailStatus === 'submitting'}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  variant="outline"
                  disabled={emailStatus === 'submitting'}
                  className="border-gray-700 text-white hover:bg-gray-800 whitespace-nowrap"
                >
                  {emailStatus === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Wird gesendet
                    </>
                  ) : (
                    'Ergebnis zusenden'
                  )}
                </Button>
              </form>
              {emailStatus === 'error' && (
                <p className="text-sm text-red-400 font-body mt-2">
                  Das hat leider nicht funktioniert. Versuchen Sie es später noch einmal oder buchen Sie direkt ein Erstgespräch.
                </p>
              )}
              <p className="text-xs text-gray-500 font-body mt-3">
                Ihre Daten sind sicher. Wir verwenden Ihre E-Mail nur für diesen Versand. DSGVO-konform, kein Spam.
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="space-y-4">
        <div className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg mb-4">
          <p className="text-sm text-gray-300 font-body text-center">
            <strong className="text-white">Nächster Schritt:</strong> Im Erstgespräch erstellen wir eine <strong className="text-white">detaillierte, use-case-spezifische ROI-Berechnung</strong> basierend auf Ihren tatsächlichen Prozessen und Rahmenbedingungen.
          </p>
        </div>

        <Button
          onClick={onBookCall}
          size="lg"
          className="w-full bg-gradient-to-r from-magenta to-[#ff4ecd] hover:opacity-90 text-white font-heading text-lg py-6 glow-magenta group"
        >
          Kostenloses Erstgespräch buchen
          <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>

        <p className="text-center text-sm text-gray-400 font-body">
          30 Minuten • Unverbindlich • Sofort verfügbare Termine
        </p>

        <div className="pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 font-body italic">
            Diese Überschlagsrechnung dient der ersten Orientierung. Verbindliche ROI-Werte können erst nach einer detaillierten Analyse Ihrer individuellen Situation ermittelt werden.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
