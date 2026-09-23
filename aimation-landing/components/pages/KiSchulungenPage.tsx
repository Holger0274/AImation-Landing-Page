'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowUpRight, BookOpen, Check, ChevronRight } from 'lucide-react';
import { useLeadForm } from '@/components/LeadFormProvider';
import EuAiActNotice from '@/components/sections/EuAiActNotice';
import SharedFaqAccordion from '@/components/ui/FaqAccordion';
import { getTrainingFaqs } from '@/lib/data/faqs-ki-schulungen';

import { TRAINING_COURSES } from '@/lib/data/training';
import LearningSample from '@/components/visuals/LearningSample';

export default function KiSchulungenPage() {
  const en = useLocale() === 'en';
  const lang = en ? 'en' : 'de';
  const l = (de: string, english: string) => en ? english : de;
  const { openLeadForm } = useLeadForm();
  const roles = en ? [
    ['Engineers and designers', 'AI introduction, then AI tools or Microsoft 365 Copilot.'],
    ['Development and team leads', 'Managing AI-driven business transformation. Add AI tools for hands-on practice.'],
    ['Management', 'Management series, with a focus on strategy, integration and success measurement.'],
    ['Newcomers and sceptics', 'AI introduction for everyone. Start with one of your own tasks.'],
  ] : [
    ['Ingenieure und Konstrukteure', 'KI-Einstieg, danach KI-Tools oder Microsoft 365 Copilot.'],
    ['Entwicklungsleiter und Teamleiter', 'Manager für KI-gestützte Unternehmenstransformation. KI-Tools ergänzen die praktische Anwendung.'],
    ['Geschäftsführung', 'Die Manager-Reihe mit Fokus auf Strategie, Integration und Erfolgsmessung.'],
    ['Einsteiger und Skeptiker', 'KI-Einstieg für alle. Der Anfang ist eine eigene Aufgabe.'],
  ];
  const steps = en ? [
    ['Preliminary talk', 'We ask about your team, prior knowledge and tools in use. And we collect two or three real problems from your day-to-day work that the training should solve.'],
    ['Putting it together', 'From the modules of our learning series, we assemble the content your team needs. Half a day or several days, one topic or several combined. Whatever fits.'],
    ['Training day', 'Your team works on your own cases. We show live how AI solves them, step by step. Where AI reaches its limits, we say so openly.'],
  ] : [
    ['Vorgespräch', 'Wir fragen nach Team, Vorwissen und den Werkzeugen, die Sie schon nutzen. Und wir sammeln zwei oder drei echte Problemstellungen aus Ihrem Alltag, die in der Schulung gelöst werden sollen.'],
    ['Zuschnitt', 'Aus den Modulen unserer Lernreihen stellen wir zusammen, was Ihr Team braucht. Ein halber Tag oder mehrere Tage, ein Thema oder mehrere kombiniert. Was passt, wird gemacht.'],
    ['Schulungstag', 'Ihr Team arbeitet an Ihren eigenen Fällen. Wir zeigen live, wie KI sie löst, Schritt für Schritt. Wo KI an Grenzen stößt, sagen wir das offen.'],
  ];
  return <main id="main-content" className="bg-ground">
    <section className="training-hero engineering-wrap">
      <nav aria-label={l('Brotkrumennavigation', 'Breadcrumb')} className="training-breadcrumb"><Link href="/">{l('Startseite', 'Home')}</Link><ChevronRight size={14} aria-hidden="true"/><span>{l('KI-Schulungen', 'AI training')}</span></nav>
      <div className="section-intro">
        <p className="technical-label">{l('Schulung & Lernmaterial', 'Training & learning materials')}</p>
        <h1>{l('KI verstehen. An der eigenen Arbeit ', 'Understand AI. Put it to ')}<span className="highlight">{l('anwenden.', 'work.')}</span></h1>
        <p>{l('Ihr Team lernt an Aufgaben, die bei Ihnen gerade auf dem Schreibtisch liegen: ein Lastenheft prüfen, einen 8D-Bericht vorbereiten oder Wissen aus alten Projekten wiederfinden. Jede Schulung stellen wir aus Modulen für Ihr Team neu zusammen, passend zu Vorwissen und Tempo.', 'Your team learns through tasks that are on their desks right now: checking a specification, preparing an 8D report or finding knowledge from past projects. We assemble every training from modules for your team, matched to prior knowledge and pace.')}</p>
        <button onClick={openLeadForm} className="engineering-button mt-8">{l('Passende Schulung besprechen', 'Discuss the right training')}<ArrowUpRight size={18} aria-hidden="true"/></button>
        <div className="mt-5"><a href="#lernprobe" className="engineering-text-link">{l('Erst eine Lernprobe ausprobieren', 'Try a learning sample first')} ↓</a></div>
      </div>
    </section>
    <LearningSample />
    <section className="engineering-section" id="lernreihen">
      <div className="engineering-wrap">
        <div className="section-heading-split">
          <div className="section-intro"><p className="technical-label">{l('Aus unserem Lernportal', 'From our learning portal')}</p><h2>{l('Sechs Lernreihen. Ein ', 'Six learning series. Your ')}<span className="highlight">{l('Einstieg für Sie.', 'starting point.')}</span></h2></div>
          <div className="section-heading-body"><p>{l('Für diese sechs Reihen liegen Lernmaterialien im Portal vor. Im Inhouse-Workshop wählen wir daraus die Themen, die Ihr Team braucht. Die Module lassen sich frei kombinieren, auch über mehrere Reihen hinweg. Der Umfang einer Lernreihe ist keine Vorgabe für die Dauer Ihrer Schulung.', 'Learning materials for these six series are available in the portal. For an in-house workshop, we select the topics your team needs. Modules can be combined freely, across several series. The size of a learning series does not determine the length of your training.')}</p></div>
        </div>
        <div className="training-course-list">{TRAINING_COURSES.map((course, index) => <article className="training-course" id={`kurs-${course.id}`} key={course.id}>
          <span className="training-number" aria-hidden="true">0{index + 1}</span>
          <div><p className="technical-label">{course[lang][1]}</p><h3>{course[lang][0]}</h3><p>{course[lang][2]}</p></div>
          <div className="training-course-status"><span><Check size={15} aria-hidden="true"/>{l('Lernmaterial vorhanden', 'Learning materials available')}</span><small>{course.modules} {l('Module im Portal', 'portal modules')}</small></div>
        </article>)}</div>
        <aside className="training-planned"><BookOpen size={24} aria-hidden="true"/><div><h3>{l('Weitere Lernreihen in Vorbereitung', 'More learning series in preparation')}</h3><p>{l('Automatisierung, Leadership und KI, Claude Code, KI in der technischen Produktentwicklung, Agentic OS sowie Datenstrukturen. Diese Portal-Reihen sind noch nicht abrufbar. Individuelle Workshop-Themen stimmen wir im Gespräch ab.', 'Automation, leadership and AI, Claude Code, AI in technical product development, Agentic OS and data structures. These portal series are not yet accessible. We discuss individual workshop topics with you.')}</p></div></aside>
      </div>
    </section>
    <section className="engineering-section">
      <div className="engineering-wrap">
        <div className="training-inhouse">
          <div className="section-intro"><p className="technical-label">{l('Gemeinsam an Ihren Aufgaben', 'Working on your tasks together')}</p><h2>{l('Ihr ', 'Your ')}<span className="highlight">{l('Inhouse-Workshop.', 'in-house workshop.')}</span></h2><p>{l('Eine Schulung von der Stange bringt Ihrem Team wenig. Deshalb arbeiten wir mit Ihren Use Cases und Ihren Problemstellungen. Am Ende weiß jeder, wie er KI bei seiner eigenen Arbeit einsetzt, und wo sie nicht hilft. Zugang und Umfang der begleitenden Lernmaterialien vereinbaren wir für Ihr Format.', 'Off-the-shelf training does little for your team. That is why we work with your use cases and your problems. Afterwards, everyone knows how to use AI in their own work, and where it does not help. Access to supporting learning materials and their scope are agreed for your format.')}</p></div>
          <div className="training-price"><span className="technical-label">{l('Inhouse-Schulung', 'In-house training')}</span><strong>{l('Festpreis', 'Fixed price')}</strong><p>{l('Nach Abstimmung von Inhalt, Dauer und Format.', 'Agreed once content, duration and format are clear.')}</p><p>{l('Unabhängig von der Teilnehmerzahl.', 'Independent of participant count.')}</p><button className="engineering-text-link" onClick={openLeadForm}>{l('Format und Lernziel abstimmen', 'Discuss format and learning goals')}<ArrowUpRight size={17} aria-hidden="true"/></button></div>
        </div>
        <div className="training-steps"><h3>{l('So entsteht Ihre Schulung', 'How your training is put together')}</h3><ol>{steps.map(([title, text], index) => <li key={title}><span className="training-number" aria-hidden="true">0{index + 1}</span><div><h4>{title}</h4><p>{text}</p></div></li>)}</ol></div>
        <div className="training-roles"><h3>{l('Ein sinnvoller Start für Ihre Rolle', 'A useful starting point for your role')}</h3><dl>{roles.map(([role, entry]) => <div key={role}><dt>{role}</dt><dd>{entry}</dd></div>)}</dl></div>
        <div className="section-footnote"><p>{l('Noch unklar, bei welchem Prozess Ihr Team anfangen sollte? Das klären wir im Workshop KI-Landkarte.', 'Not sure which process your team should start with? The KI-Landkarte workshop helps you choose.')}</p><Link href="/#ki-landkarte" className="engineering-text-link">{l('Zur KI-Landkarte', 'Explore KI-Landkarte')}<ArrowUpRight size={17} aria-hidden="true"/></Link></div>
      </div>
    </section>
    <section className="engineering-section"><div className="engineering-wrap"><div className="section-intro section-intro-wide"><h2>{l('Fragen zu Ihrer ', 'Questions about your ')}<span className="highlight">{l('Schulung.', 'training.')}</span></h2></div><SharedFaqAccordion items={getTrainingFaqs(en)}/></div></section>
    <EuAiActNotice />
    <section className="engineering-section"><div className="engineering-wrap"><div className="section-intro section-intro-wide"><h2>{l('Was soll Ihr Team danach ', 'What should your team be able to ')}<span className="highlight">{l('können?', 'do?')}</span></h2><p>{l('Im kostenlosen Erstgespräch besprechen wir Ihre Aufgaben und den passenden Einstieg.', 'In the free initial call, we discuss your tasks and the right starting point.')}</p><button onClick={openLeadForm} className="engineering-button mt-8">{l('Kostenloses Erstgespräch buchen', 'Book a free initial call')}<ArrowUpRight size={18} aria-hidden="true"/></button></div></div></section>
  </main>;
}
