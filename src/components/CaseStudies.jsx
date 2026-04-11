import { motion } from "framer-motion";

export function CaseStudies({ projects }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.42, delay: index * 0.06 }}
          className="panel flex h-full flex-col"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">Concept</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-soft)]">{project.description}</p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-soft)]">
            <p><strong className="text-[var(--color-text)]">Problem:</strong> {project.problem}</p>
            <p><strong className="text-[var(--color-text)]">Approach:</strong> {project.approach}</p>
            <p><strong className="text-[var(--color-text)]">Outcome:</strong> {project.outcome}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
