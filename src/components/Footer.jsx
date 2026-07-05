const year = new Date().getFullYear();

const links = [
  { label: "GitHub", href: "https://github.com/sagar1438" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sagar-panwar-255339251/" },
  { label: "LeetCode", href: "https://leetcode.com/u/SAGAR376/" },
  { label: "Email", href: "mailto:sagarpanwer11@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-lg text-ink dark:text-dark-text">Sagar Panwar</p>
          <p className="text-xs text-slate dark:text-dark-sub mt-1">
            &copy; {year} Sagar Panwar. All rights reserved.
          </p>
        </div>

        <p className="font-display italic text-slate dark:text-dark-sub text-sm order-first md:order-none">
          &ldquo;Building software with simplicity and purpose.&rdquo;
        </p>

        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-slate dark:text-dark-sub">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="hover:text-navy dark:hover:text-dark-navy transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
