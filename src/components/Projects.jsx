
import projects from "../data/projects";

function ProjectCard({ project }) {
  return (
    <article className="group border border border-line dark:border-dark-line p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy dark:hover:border-dark-navy"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-xl md:text-2xl text-ink dark:text-dark-text">
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="shrink-0 mt-1 text-slate dark:text-dark-sub group-hover:text-navy dark:group-hover:text-dark-navy transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.02-.01-1.85-2.78.61-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
          </svg>
        </a>
      </div>

      {project.period && (
        <p className="font-mono text-xs uppercase tracking-wider text-slate dark:text-dark-sub mb-4">
          {project.period}
        </p>
      )}

      <p className="text-sm leading-relaxed text-ink/80 dark:text-dark-text/80 mb-5">
        {project.description}
      </p>

      <ul className="space-y-2 mb-5">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/75 dark:text-dark-text/75">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-navy dark:bg-dark-navy shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      

      <div className="flex flex-wrap gap-2 pt-5 border-t border-line dark:border-dark-line">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2.5 py-1 border border-line dark:border-dark-line text-slate dark:text-dark-sub"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-line dark:border-dark-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-14">
            Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
