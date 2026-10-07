import { useEffect, type RefObject } from "react";

/** Progressive enhancement: content stays visible without JS, observer or motion. */
export function useEditorialMotion(root: RefObject<HTMLElement | null>, route: string) {
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const nodes = root.current?.querySelectorAll<HTMLElement>(
      "[data-reveal], .section-heading, .project-card, .featured-project, .case-chapter, .certificate-row",
    );
    const setup = () => {
      observer?.disconnect();
      nodes?.forEach((node) => node.classList.remove("is-revealed"));
      if (media.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
        },
        { threshold: 0.05 },
      );
      nodes?.forEach((node) => observer?.observe(node));
    };
    setup();
    media.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      media.removeEventListener("change", setup);
    };
  }, [root, route]);
}
