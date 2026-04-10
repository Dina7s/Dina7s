import profile from "./data/profile.json";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SkillsGrid } from "./components/SkillsGrid";
import { ContactCard } from "./components/ContactCard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header links={profile.navigation} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <Hero profile={profile} />
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
          eyebrow="Projects"
          title="Portfolio directions aligned with operations and workflow improvement."
          intro="These project concepts reflect the kind of practical digital work that connects well with my background in banking operations and structured process execution."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {profile.projects.map((project) => (
              <article key={project.name} className="panel">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-soft)]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
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
    </div>
  );
}

export default App;
