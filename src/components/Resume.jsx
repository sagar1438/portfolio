

// Files placed in /public are served as-is at the site root — reference
// them as a plain string path, not an import.
const resume = "/Sagar_Panwar_Resume.pdf";

export default function Resume() {

  return (
    <section id="resume" className="py-16 md:py-20 border-b border-line dark:border-dark-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-8">
          Resume
        </h2>

        <div className="border border-line dark:border-dark-line p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-base leading-relaxed text-ink/80 dark:text-dark-text/80 max-w-xl">
            A final-year Computer Science student focused on backend and
            full-stack development with Java and Spring Boot. My resume
            covers my education, experience, projects, and certifications in
            detail — feel free to view it here or take a copy with you.
          </p>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-ink dark:border-dark-text text-ink dark:text-dark-text text-sm font-medium tracking-wide hover:border-navy hover:text-navy dark:hover:border-dark-navy dark:hover:text-dark-navy transition-colors duration-200"
            >
              View Resume
            </a>
            <a
              href={resume}
              download
              className="px-6 py-3 bg-navy dark:bg-dark-navy text-paper dark:text-dark-bg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
