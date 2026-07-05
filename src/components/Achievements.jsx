
import achievements from "../data/achievements";

export default function Achievements() {


  return (
    <section
      id="achievements"
      className="py-16 md:py-20 border-b border-line dark:border-dark-line"
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-14">
          Certifications &amp; milestones
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="border border-line dark:border-dark-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy dark:hover:border-dark-navy"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-navy dark:text-dark-navy">
                {item.type}
              </span>
              <h3 className="font-display text-lg text-ink dark:text-dark-text mt-3 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate dark:text-dark-sub leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
