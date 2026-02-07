"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Euro, Target, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ROIResults, formatCurrency, formatNumber, getPriorityLabel } from "./calculations";

interface ResultsDisplayProps {
  results: ROIResults;
  inputData: {
    numEmployees: number;
    priority: string;
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
            Wir berechnen Ihr Potenzial...
          </motion.h3>

          <div className="space-y-2 text-gray-400 font-body">
            {[
              "Branchendaten analysieren...",
              "Automatisierungspotenzial ermitteln...",
              "Einsparpotenzial berechnen...",
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      {/* Main Result */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
          Ihr <span className="text-magenta">Einsparpotenzial</span> mit KI
        </h2>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-magenta/30 mb-6">
          <CardContent className="pt-12 pb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Target className="w-8 h-8 text-magenta" />
              <span className="text-lg font-heading text-gray-300 uppercase tracking-wide">
                Jährliche Ersparnis
              </span>
            </div>
            <div className="text-6xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-magenta to-[#ff4ecd] text-glow-magenta mb-2">
              <AnimatedCounter
                target={results.annualSavings}
                duration={2}
                prefix="€"
                separator={false}
              />
            </div>
            <p className="text-gray-400 font-body">
              pro Jahr durch KI-Automatisierung
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Clock className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className="text-3xl font-bold font-heading text-white mb-1">
              {formatNumber(results.hoursSaved)}
            </div>
            <div className="text-sm text-gray-400 font-body">Stunden/Jahr</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              ≈ {Math.round(results.weeklyHoursSaved)} Std./Woche
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Euro className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className="text-3xl font-bold font-heading text-white mb-1">
              {results.costReduction}%
            </div>
            <div className="text-sm text-gray-400 font-body">Kostenreduktion</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              der Prozesskosten
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="pt-6 pb-6 text-center">
            <Calendar className="w-10 h-10 text-magenta mx-auto mb-3" />
            <div className="text-3xl font-bold font-heading text-white mb-1">
              {results.roiMonths}
            </div>
            <div className="text-sm text-gray-400 font-body">Monate</div>
            <div className="text-xs text-gray-500 font-body mt-1">
              bis ROI erreicht
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Personalization Echo */}
      <Card className="bg-gray-900/30 border-gray-800 mb-8">
        <CardContent className="pt-6 pb-6">
          <p className="text-gray-300 font-body mb-4">
            <strong className="text-white">Basierend auf Ihren Angaben:</strong>
          </p>
          <ul className="space-y-2 text-gray-400 font-body text-sm">
            <li className="flex items-start gap-2">
              <span className="text-magenta">•</span>
              <span>{inputData.numEmployees} Mitarbeiter im Unternehmen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-magenta">•</span>
              <span>Schwerpunkt: {getPriorityLabel(inputData.priority)}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-magenta">•</span>
              <span>Hohes Automatisierungspotenzial in diesem Bereich</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="space-y-4">
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
          <p className="text-xs text-gray-500 font-body">
            💡 <strong className="text-gray-400">Hinweis:</strong> Diese Berechnung basiert auf Durchschnittswerten aus realen KMU-Projekten.
            Im Erstgespräch können wir Ihr individuelles Potenzial noch genauer ermitteln.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
