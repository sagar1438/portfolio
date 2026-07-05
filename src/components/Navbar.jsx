import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-dark-bg/90 backdrop-blur border-b border-line dark:border-dark-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg tracking-wide text-ink dark:text-dark-text"
        >
          Sagar Panwar
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wider text-slate dark:text-dark-sub">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-navy dark:hover:text-dark-navy transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line dark:border-dark-line text-ink dark:text-dark-text hover:border-navy dark:hover:border-dark-navy transition-colors duration-200"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="lg:hidden w-9 h-9 flex items-center justify-center border border-line dark:border-dark-line rounded-full text-ink dark:text-dark-text"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper dark:bg-dark-bg border-t border-line dark:border-dark-line">
          <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm uppercase tracking-wider text-slate dark:text-dark-sub">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-navy dark:hover:text-dark-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
