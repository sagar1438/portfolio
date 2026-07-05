import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.error(
        "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to a .env file — see README.md."
      );
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-line dark:border-dark-line">
      <div className="max-w-content mx-auto px-6 md:px-10">
        	
        <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-dark-text mb-6">
          Let&apos;s build something
        </h2>
        <p className="text-base leading-relaxed text-ink/80 dark:text-dark-text/80 max-w-xl mb-14">
          I&apos;m always open to conversations about backend engineering,
          internships, or full-time roles. If something here resonates, send
          a message — I read every one.
        </p>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate dark:text-dark-sub mb-1">
                Email
              </p>
              <a
                href="mailto:sagarpanwer11@gmail.com"
                className="text-ink dark:text-dark-text hover:text-navy dark:hover:text-dark-navy transition-colors duration-200"
              >
                sagarpanwer11@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate dark:text-dark-sub mb-1">
                Phone
              </p>
              <a
                href="tel:+918394852673"
                className="text-ink dark:text-dark-text hover:text-navy dark:hover:text-dark-navy transition-colors duration-200"
              >
                +91 83948 52673
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate dark:text-dark-sub mb-1">
                Location
              </p>
              <p className="text-ink dark:text-dark-text">Dehradun, Uttarakhand, India</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate dark:text-dark-sub mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-line dark:border-dark-line px-4 py-3 text-sm text-ink dark:text-dark-text focus:border-navy dark:focus:border-dark-navy transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate dark:text-dark-sub mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-line dark:border-dark-line px-4 py-3 text-sm text-ink dark:text-dark-text focus:border-navy dark:focus:border-dark-navy transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate dark:text-dark-sub mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border border-line dark:border-dark-line px-4 py-3 text-sm text-ink dark:text-dark-text focus:border-navy dark:focus:border-dark-navy transition-colors duration-200 resize-none"
                placeholder="What would you like to build or discuss?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 bg-navy dark:bg-dark-navy text-paper dark:text-dark-bg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-navy dark:text-dark-navy">
                Thanks — your message is on its way. I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700 dark:text-red-400">
                Something went wrong. Please email me directly at
                sagarpanwer11@gmail.com, or check the EmailJS setup in README.md.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
