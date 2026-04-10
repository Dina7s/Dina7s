import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function Hero({ profile }) {
  return (
    <section
      id="home"
      className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),_transparent_30%)]" />
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
            <a className="button-primary" href={profile.resumeFile} download>
              Download Resume
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="metric-card">
              <span className="metric-value">2021</span>
              <span className="metric-label">Started at SCB</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">16+</span>
              <span className="metric-label">Core operational strengths</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
