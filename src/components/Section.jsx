import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-8 sm:px-8 sm:py-10"
    >
      <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">{eyebrow}</p>
      <div className="mt-4 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-8 text-[var(--color-soft)]">{intro}</p>
      </div>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}
