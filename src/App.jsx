import { useEffect, useState } from "react";
import profile from "./data/profile.json";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SkillsGrid } from "./components/SkillsGrid";
import { ContactCard } from "./components/ContactCard";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { RecruiterSnapshot } from "./components/RecruiterSnapshot";
import { ProcessExpertise } from "./components/ProcessExpertise";
import { CaseStudies } from "./components/CaseStudies";
import { ResumePreview } from "./components/ResumePreview";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme-preference") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme-preference", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />

      <Header links={profile.navigation} theme={theme} onToggleTheme={toggleTheme} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <Hero profile={profile} />

        <Section
          id="snapshot"
          eyebrow="Recruiter Snapshot"
          title="A quick view of the profile and fit."
          intro="This section is built for recruiters and hiring managers who need to understand the profile quickly."
        >
          <RecruiterSnapshot items={profile.recruiterSnapshot} />
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="Operations experience with a growing technology mindset."
          intro={profile.about}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {profile.highlights.map((item) => (
              <article key={item.title} className="panel">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-soft)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="strengths"
          eyebrow="Value"
          title="How I contribute in modern operations teams."
          intro="My experience is strongest where process reliability, business responsiveness, and structured execution need to work together."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {profile.valueAreas.map((item) => (
              <article key={item.title} className="panel">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-soft)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Process Expertise"
          title="Banking operations areas I understand in practice."
          intro="The portfolio now highlights real operating knowledge, not just generic skills, so the profile is clearer for banking operations and process analyst roles."
        >
          <ProcessExpertise items={profile.processExpertise} />
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Career path shaped by control, accuracy, and delivery."
          intro="From client-facing coordination to banking operations leadership, each role built stronger process ownership and data discipline."
        >
          <ExperienceTimeline experience={profile.experience} />
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Practical strengths built in day-to-day operations."
          intro="A blend of banking operations expertise, data accuracy, testing support, and workflow-oriented thinking."
        >
          <SkillsGrid skills={profile.skills} />
        </Section>

        <Section
          id="projects"
          eyebrow="Case Studies"
          title="Project concepts aligned with operations and workflow improvement."
          intro="These case-study concepts show how banking operations experience can translate into useful digital tools, reporting, and process visibility."
        >
          <CaseStudies projects={profile.projects} />
        </Section>

        <Section
          id="learning"
          eyebrow="Learning"
          title="Current learning areas for tech-enabled operations."
          intro="These learning areas support a practical transition from banking operations into reporting, workflow improvement, and digital operations support."
        >
          <SkillsGrid skills={profile.learning} />
        </Section>

        <Section
          id="resume-preview"
          eyebrow="Resume"
          title="Resume preview with no public phone number."
          intro="The download button now generates this markdown resume directly from the app, so it does not rely on a public-folder PDF path."
        >
          <ResumePreview />
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to operations, reporting, and tech-enabled workflow opportunities."
          intro="This portfolio presents a practical profile built on execution, control, and steady progression toward modern digital operations work."
        >
          <ContactCard contact={profile.contact} />
        </Section>
      </main>

      <Footer name={profile.name} />
      <Chatbot profile={profile} />
    </div>
  );
}

export default App;
