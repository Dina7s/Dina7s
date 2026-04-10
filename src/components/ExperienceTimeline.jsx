import { motion } from "framer-motion";

export function ExperienceTimeline({ experience }) {
  return (
    <div className="space-y-5">
      {experience.map((item, index) => (
        <motion.article
          key={`${item.company}-${item.role}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="timeline-card"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">{item.duration}</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">{item.role}</h3>
              <p className="mt-1 text-base text-[var(--color-warm)]">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-soft)]">{item.summary}</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-[var(--color-soft)]">
            {item.highlights.map((point) => (
              <li key={point} className="rounded-2xl border border-white/6 bg-black/10 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
