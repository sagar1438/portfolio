import { useEffect, useRef } from "react";

/**
 * Adds the .reveal class immediately and toggles .in-view when the
 * element scrolls into the viewport, triggering the fade-up animation
 * defined in index.css. Falls back gracefully if IntersectionObserver
 * is unavailable.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("in-view");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
