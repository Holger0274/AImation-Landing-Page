/**
 * Utility Functions
 *
 * Helper-Funktionen für das gesamte Projekt.
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn - ClassName Merge Utility
 *
 * Kombiniert mehrere className-Strings intelligent.
 * Nutzt clsx für bedingte Klassen + tailwind-merge für Konfliktlösung.
 *
 * Beispiel:
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4' (px-4 überschreibt px-2)
 * cn('text-red-500', condition && 'text-blue-500') // => bedingte Klasse
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
