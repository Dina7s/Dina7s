export function Header({ links, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--header-bg)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <a href="#home" className="text-sm font-semibold tracking-[0.3em] text-[var(--color-text)] uppercase">
            DS
          </a>
          <span className="hidden text-xs uppercase tracking-[0.28em] text-[var(--color-muted)] sm:block">
            Portfolio
          </span>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden gap-6 text-sm text-[var(--color-soft)] md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[var(--color-text)]">
                {link.label}
              </a>
            ))}
          </nav>
          <details className="mobile-menu md:hidden">
            <summary>Menu</summary>
            <nav className="mobile-menu-panel">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle color theme">
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
