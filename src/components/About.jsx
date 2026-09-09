
import profile from "../assets/profile.jpg";

const facts = [
  "AI-Full Stack Developer",
  "Solved 600+ LeetCode problems",
  "Solved 200+ GFG problems",
  "Building AI-powered applications",
];

export default function About() {

  return (
    <section id="about" className="py-16 md:py-20 border-b border-line dark:border-dark-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-14">
          A little about me
        </h2>

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-14">
          <div className="space-y-6 text-base leading-relaxed text-ink/85 dark:text-dark-text/85">
            <p>
              Computer Science graduate who enjoys turning ideas into practical software and intelligent applications.
	      Focused on Python, FastAPI, React.js, REST APIs, and AI/LLM integration, with hands-on experience building
              full-stack applications.
            </p>
            <p>
              My areas of interest sit in{" "}
              <span className="text-navy dark:text-dark-navy font-medium">
                AI/ML, Development, and Solving problems.
              </span>{" "}
              From building LLM-based systems 
              and AI study tools to working with APIs, databases, and data structures, I enjoy creating software that is useful, efficient,
              and built to solve real-world problems
            </p>

            <div className="pt-4 border-t border-line dark:border-dark-line">
              <h3 className="font-display text-xl text-ink dark:text-dark-text mb-3">
                Education
              </h3>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-ink dark:text-dark-text">
                  Bachelor of Technology, Computer Science
                </p>
                <p className="text-slate dark:text-dark-sub text-sm">
                  Uttaranchal University, Dehradun, Uttarakhand
                </p>
                <p className="text-slate dark:text-dark-sub text-sm font-mono">
                  Aug 2022 — June 2026 
                </p>
                <p className="text-slate dark:text-dark-sub text-sm mt-2">{" "}
              <span className="text-navy dark:text-dark-navy font-medium">
                Open to Software Engineering, AI/ML, Backend, and Full-Stack roles.
              </span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8 border border-line dark:border-dark-line p-2 w-40">
              <img
                src={profile}
                alt="Portrait of Sagar Panwar"
                className="w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.02]"
              />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate dark:text-dark-sub mb-4">
              At a Glance
            </h3>
            <ul className="border border-line dark:border-dark-line divide-y divide-line dark:divide-dark-line">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="px-5 py-4 text-sm text-ink/85 dark:text-dark-text/85 flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy dark:bg-dark-navy shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
