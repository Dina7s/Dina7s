import { motion } from "framer-motion";

export function RecruiterSnapshot({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <motion.article
          key={item.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="panel"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">{item.label}</p>
          <p className="mt-3 text-lg font-semibold leading-7 text-[var(--color-text)]">{item.value}</p>
        </motion.article>
      ))}
    </div>
  );
}
