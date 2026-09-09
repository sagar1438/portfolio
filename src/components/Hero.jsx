import StarField from "./StarField"; 
import GeometricMark from "./GeometricMark";

// Files placed in /public are served as-is at the site root — reference
// them as a plain string path, not an import.
const resume = `${import.meta.env.BASE_URL}Sagar_Panwar_Resume.pdf`;

export default function Hero() {


  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-14 border-b border-line dark:border-dark-line"
    > <StarField />
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-ink dark:text-dark-text mb-6">
            Hello, I&apos;m Sagar Panwar.
          </h1>
          <p className="text-lg md:text-xl text-slate dark:text-dark-sub mb-6">
            Full-Stack Developer building Intelligent Applications.
          </p>
          <p className="text-base leading-relaxed text-ink/80 dark:text-dark-text/80 max-w-xl mb-10">
            Computer Science graduate who enjoys turning ideas into practical software.
            Hands-on experience in Python, FastAPI, React.js, REST APIs, and AI/LLM
            integration, I build full-stack applications that combine clean interfaces
            with intelligent backend systems. From developing AI-powered platforms to 
	    designing scalable APIs and solving complex problems with data structures.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-navy dark:bg-dark-navy text-paper dark:text-dark-bg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              View Projects
            </a>
            <a
              href={resume}
              download
              className="px-6 py-3 border border-ink dark:border-dark-text text-ink dark:text-dark-text text-sm font-medium tracking-wide hover:border-navy hover:text-navy dark:hover:border-dark-navy dark:hover:text-dark-navy transition-colors duration-200"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-ink dark:text-dark-text text-sm font-medium tracking-wide underline underline-offset-4 decoration-line dark:decoration-dark-line hover:decoration-navy dark:hover:decoration-dark-navy transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center text-navy/80 dark:text-dark-navy/80">
          <GeometricMark className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
}
