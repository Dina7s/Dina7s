import { motion } from "framer-motion";

export function ProcessExpertise({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, delay: index * 0.04 }}
          className="panel transition duration-300 hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-[var(--color-text)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-soft)]">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
