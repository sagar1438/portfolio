

const icons = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.02-.01-1.85-2.78.61-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V13c0-1.4.9-2.3 2.1-2.3S16 11.6 16 13v3.5M12 10v6.5" />
    </>
  ),
  leetcode: (
    <path d="M13.4 21.3 8 15.9a3 3 0 0 1 0-4.2l5.4-5.4M20 9l-3-3M8 12h9.5M9.5 16.5l2 2a3 3 0 0 0 4.2 0l1-1" />
  ),
  gfg: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8.5a3.5 3.5 0 1 0 3.4 4.3H12.8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
};

const profiles = [
  {
    key: "github",
    label: "GitHub",
    handle: "sagar1438",
    href: "https://github.com/sagar1438",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "sagar-panwar",
    href: "https://www.linkedin.com/in/sagar-panwar-255339251/",
  },
  {
    key: "leetcode",
    label: "LeetCode",
    handle: "SAGAR376",
    href: "https://leetcode.com/u/SAGAR376/",
  },
  {
    key: "gfg",
    label: "GeeksforGeeks",
    handle: "sagarpadaqh",
    href: "https://www.geeksforgeeks.org/profile/sagarpadaqh",
  },
  {
    key: "mail",
    label: "Email",
    handle: "sagarpanwer11@gmail.com",
    href: "mailto:sagarpanwer11@gmail.com",
  },
];

export default function Profiles() {
  

  return (
    <section id="profiles" className="py-16 md:py-20 border-b border-line dark:border-dark-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-14">
          Find me online
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {profiles.map((p) => (
            <a
              key={p.key}
              href={p.href}
              target={p.key === "mail" ? undefined : "_blank"}
              rel={p.key === "mail" ? undefined : "noopener noreferrer"}
              className="group border border-line dark:border-dark-line p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-navy dark:hover:border-dark-navy"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-ink dark:text-dark-text group-hover:text-navy dark:group-hover:text-dark-navy transition-colors duration-200"
              >
                {icons[p.key]}
              </svg>
              <div>
                <p className="font-medium text-ink dark:text-dark-text text-sm">{p.label}</p>
                <p className="text-xs text-slate dark:text-dark-sub font-mono mt-0.5 break-all">
                  {p.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
