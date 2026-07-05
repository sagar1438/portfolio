import skillsTabs from "../data/skillsTabs";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-14 border-b border-line dark:border-dark-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-14">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsTabs.map((group) => (
            <div
              key={group.id}
              className="border border-line dark:border-dark-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy dark:hover:border-dark-navy"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-navy dark:text-dark-navy">
                {group.label.replace(".ts", "")}
              </span>

              <div className="flex flex-wrap gap-2 mt-4">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 border border-line dark:border-dark-line text-ink/80 dark:text-dark-text/80 transition-colors duration-200 hover:border-navy hover:text-navy dark:hover:border-dark-navy dark:hover:text-dark-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}