export function Footer({ name }) {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-[var(--color-muted)] sm:px-8 lg:px-10">
      {name} • Portfolio built with React, Tailwind CSS, and Framer Motion
    </footer>
  );
}
