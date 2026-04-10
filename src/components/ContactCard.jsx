import { motion } from "framer-motion";

export function ContactCard({ contact }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 md:grid-cols-3"
    >
      <a className="panel transition hover:-translate-y-1" href={`mailto:${contact.email}`}>
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">Email</p>
        <p className="mt-3 text-base text-[var(--color-text)]">{contact.email}</p>
      </a>
      <div className="panel">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">Phone</p>
        <p className="mt-3 text-base text-[var(--color-text)]">{contact.phone}</p>
      </div>
      <a className="panel transition hover:-translate-y-1" href={contact.github} target="_blank" rel="noreferrer">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-muted)]">GitHub</p>
        <p className="mt-3 text-base text-[var(--color-text)]">github.com/Dina7s</p>
      </a>
    </motion.div>
  );
}
