export function Header({ links }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgba(10,17,28,0.85)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.3em] text-[var(--color-text)] uppercase">
          DS
        </a>
        <nav className="hidden gap-6 text-sm text-[var(--color-soft)] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--color-text)]">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
