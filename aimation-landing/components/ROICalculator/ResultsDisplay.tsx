"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Euro, Target, Calendar, Percent, ExternalLink, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ROIResults, formatCurrency, formatNumber, getUseCaseLabel, UseCaseType } from "./calculations";

interface ResultsDisplayProps {
  results: ROIResults;
  inputData: {
    useCase: UseCaseType;
    numEmployees: number;
    timeframMonths: number;
  };
  onBookCall: () => void;
}

export default function ResultsDisplay({ results, inputData, onBookCall }: ResultsDisplayProps) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Show loading animation for 5 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showAnimation) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-magenta to-[#ff4ecd] flex items-center justify-center mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TrendingUp className="w-12 h-12 text-white" />
        </motion.div>

        <div className="text-center space-y-4">
          <motion.h3
            className="text-2xl font-bold font-heading text-white"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Wir berechnen Ihr ROI...
          </motion.h3>

          <div className="space-y-2 text-gray-400 font-body">
            {[
              "Use Case analysieren...",
              "Kostenstruktur berechnen...",
              "ROI ermitteln...",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 1.5, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
