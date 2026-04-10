import { motion } from "framer-motion";

export function SkillsGrid({ skills }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.03 }}
          className="skill-pill"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
