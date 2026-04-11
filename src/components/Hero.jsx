import { motion } from "framer-motion";
import resumeMarkdown from "../data/resume.md?raw";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function Hero({ profile }) {
  function downloadResume() {
    const blob = new Blob([resumeMarkdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = profile.resumeFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <section
      id="home"
      className="hero-panel relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] px-6 py-10 sm:px-8 sm:py-14 lg:px-12"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.45, scale: 0.96 }}
        animate={{ opacity: 0.92, scale: 1.05 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--hero-glow-1),_transparent_34%),radial-gradient(circle_at_bottom_right,_var(--hero-glow-2),_transparent_30%)]"
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">Portfolio</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-[var(--color-warm)]">{profile.title}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-soft)]">{profile.tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-soft)]">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="button-primary" type="button" onClick={downloadResume}>
              Download Resume MD
            </button>
            <a className="button-secondary" href="#resume-preview">
              Preview Resume
            </a>
            <a className="button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="panel flex flex-col justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Current Focus</p>
            <p className="mt-4 text-2xl font-medium text-[var(--color-text)]">Currently working at SCB</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-soft)]">
              Supporting trade-related static data operations with ownership across rates, account maintenance, testing, and process controls.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profile.heroStats.map((item) => (
              <div key={item.label} className="metric-card">
                <span className="metric-value">{item.value}</span>
                <span className="metric-label">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
