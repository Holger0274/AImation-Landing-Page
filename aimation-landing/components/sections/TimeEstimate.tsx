'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import ROICalculator from '@/components/ROICalculator/ROICalculator';
import { calculateAnnualTimeValue, calculateWeeklyTimeSavings, USE_CASE_PRESETS, WEEKS_PER_YEAR } from '@/components/ROICalculator/calculations';
import styles from './TimeEstimate.module.css';

function EstimateControl({ id, label, value, setValue, min, max, step, valid, hint, en }: {
  id: string; label: string; value: string; setValue: (value: string) => void;
  min: number; max: number; step: number; valid: boolean; hint: string; en: boolean;
}) {
  const numeric = Number(value.replace(',', '.'));
  return <div className={styles.control}>
    <div className={styles.controlHeader}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" inputMode={step === 1 ? 'numeric' : 'decimal'} value={value} onChange={event => setValue(event.target.value)} aria-invalid={!valid} aria-describedby={`${id}-hint`} className={styles.valueInput} />
    </div>
    <input className={styles.slider} type="range" min={min} max={max} step={step} value={Number.isFinite(numeric) ? Math.min(max, Math.max(min, numeric)) : min} onChange={event => setValue(event.target.value)} aria-label={`${label}, ${en ? 'slider' : 'Regler'}`} aria-describedby={`${id}-hint`} />
    <small id={`${id}-hint`}>{hint}</small>
  </div>;
}

export default function TimeEstimate() {
  const en = useLocale() === 'en';
  const [employees, setEmployees] = useState(String(USE_CASE_PRESETS.custom.numEmployees));
  const [hours, setHours] = useState(String(USE_CASE_PRESETS.custom.weeklyHours));
  const [rate, setRate] = useState(String(USE_CASE_PRESETS.custom.hourlyWage));
  const [open, setOpen] = useState(false);
  const people = Number(employees.replace(',', '.'));
  const weeklyHours = Number(hours.replace(',', '.'));
  const hourlyWage = Number(rate.replace(',', '.'));
  const validPeople = employees.trim() !== '' && Number.isInteger(people) && people >= 1 && people <= 1000;
  const validHours = hours.trim() !== '' && Number.isFinite(weeklyHours) && weeklyHours >= 0 && weeklyHours <= 40;
  const validRate = rate.trim() !== '' && Number.isFinite(hourlyWage) && hourlyWage >= 10 && hourlyWage <= 250;
  const valid = validPeople && validHours && validRate;
  const locale = en ? 'en-GB' : 'de-DE';
  const number = (value: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);
  const money = (value: number) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  return (
    <section id="zeitpotenzial" className={styles.section} aria-labelledby="time-estimate-heading">
      <div className={`engineering-wrap ${styles.layout}`}>
        <div>
          <h2 id="time-estimate-heading">{en ? 'What is regained time ' : 'Was ist gewonnene Zeit '}<span className="highlight">{en ? 'worth?' : 'wert?'}</span></h2>
          <p className={styles.intro}>{en ? 'Adjust the sliders or enter your figures. See the estimated annual value immediately, without registering.' : 'Bewegen Sie die Regler oder tragen Sie Ihre Werte ein. Der geschätzte Jahreswert erscheint sofort, ohne Anmeldung.'}</p>
          <div className={styles.inputs}>
            <EstimateControl id="estimate-people" label={en ? 'People doing the task' : 'Beteiligte Personen'} value={employees} setValue={setEmployees} min={1} max={1000} step={1} valid={validPeople} hint={en ? '1 to 1,000 people in this workflow' : '1 bis 1.000 Personen in diesem Ablauf'} en={en} />
            <EstimateControl id="estimate-hours" label={en ? 'Hours regained per person / week' : 'Freie Stunden je Person / Woche'} value={hours} setValue={setHours} min={0} max={40} step={0.5} valid={validHours} hint={en ? '0 to 40 hours, after reviewing AI results' : '0 bis 40 Stunden, nach Prüfung der KI-Ergebnisse'} en={en} />
            <EstimateControl id="estimate-rate" label={en ? 'Internal hourly cost (€)' : 'Interner Stundensatz (€)'} value={rate} setValue={setRate} min={10} max={250} step={1} valid={validRate} hint={en ? '€10 to €250, including employer costs' : '10 bis 250 €, einschließlich Arbeitgeberkosten'} en={en} />
          </div>
        </div>
        <div className={styles.result}>
          <p>{en ? 'Estimated annual value of regained time' : 'Geschätzter Jahreswert der gewonnenen Zeit'}</p>
          <div role="status" aria-live="polite" aria-atomic="true">
            {valid ? <>
              <strong>{money(calculateAnnualTimeValue(people, weeklyHours, hourlyWage))}</strong>
              <span>{en ? 'per year, before project costs' : 'pro Jahr, vor Projektkosten'}</span>
              <p className={styles.timeValue}>{number(calculateWeeklyTimeSavings(people, weeklyHours))} {en ? 'hours available per week' : 'Stunden pro Woche verfügbar'}</p>
            </> : <p className={styles.invalid}>{en ? 'Enter valid values within the ranges shown.' : 'Bitte geben Sie gültige Werte in den angegebenen Bereichen ein.'}</p>}
          </div>
          <div className={styles.assumptions}>
            <p>{en ? 'How the estimate works' : 'So entsteht die Schätzung'}</p>
            <p>{valid ? `${number(people)} × ${number(weeklyHours)} ${en ? 'h' : 'Std.'} × ${money(hourlyWage)} × ${WEEKS_PER_YEAR} ${en ? 'weeks' : 'Wochen'}` : (en ? 'People × hours × hourly cost × weeks' : 'Personen × Stunden × Stundensatz × Wochen')}</p>
            <small>{en ? 'Use a weekly average across the year, allowing for leave and other absences.' : 'Den Wochenwert als Jahresdurchschnitt ansetzen, mit Urlaub und anderen Ausfallzeiten.'}</small>
          </div>
          <p className={styles.note}>{en ? 'Example values, not guaranteed savings. This values available working time. Setup, running costs and ramp-up time are included in the detailed ROI calculation.' : 'Beispielwerte, keine garantierte Ersparnis. Bewertet wird verfügbare Arbeitszeit. Investition, Betriebskosten und Anlaufzeit berücksichtigt die detaillierte ROI-Rechnung.'}</p>
          <button type="button" className="engineering-text-link" disabled={!valid || weeklyHours < 0.5} onClick={() => setOpen(true)}>{en ? 'Include costs and calculate ROI (German)' : 'Kosten einbeziehen und ROI berechnen'}<ArrowUpRight size={17} aria-hidden="true" /></button>
          <small>{en ? 'All three figures are carried over. Detailed calculation from 0.5 hours per week.' : 'Alle drei Werte werden übernommen. Detailrechnung ab 0,5 Stunden pro Woche.'}</small>
        </div>
      </div>
      {open && <ROICalculator isOpen onClose={() => setOpen(false)} initialInput={{ numEmployees: people, weeklyHours, hourlyWage }} calendlyUrl="https://calendly.com/holgerpeschke-hp/erstgespraech" />}
    </section>
  );
}
