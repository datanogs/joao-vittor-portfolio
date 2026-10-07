import { useEffect, type RefObject } from "react";

/** One observer and one throttled scroll listener per mounted page. */
export function useEditorialMotion(root: RefObject<HTMLElement | null>, route: string) {
  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 767px)");
    const nodes = host.querySelectorAll<HTMLElement>(
      "[data-motion], [data-reveal], .section-heading, .project-card, .featured-project, .case-chapter, .certificate-row, .featured-image, .case-gallery figure, .metric-list > div",
    );
    const chapters = [...host.querySelectorAll<HTMLElement>(".case-chapter[id]")];
    const links = [...host.querySelectorAll<HTMLAnchorElement>(".case-nav a[href^='#case-']")];
    const pipelines = [...host.querySelectorAll<HTMLElement>("[data-scroll-pipeline]")];
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (document.hidden) return;
      if (!reduce.matches && !mobile.matches)
        for (const pipeline of pipelines) {
          const rect = pipeline.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > innerHeight) continue;
          const progress = Math.max(
            0,
            Math.min(1, (innerHeight * 0.78 - rect.top) / (innerHeight * 0.45)),
          );
          pipeline.dataset["stage"] = String(Math.min(4, Math.floor(progress * 5)));
          pipeline.style.setProperty("--progress", String(progress));
        }
      let active = chapters[0]?.id;
      for (const chapter of chapters)
        if (chapter.getBoundingClientRect().top <= innerHeight * 0.38) active = chapter.id;
      for (const link of links) {
        if (link.hash === `#${active}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const setup = () => {
      observer?.disconnect();
      nodes.forEach((node) => node.classList.remove("is-revealed", "motion-ready", "is-in-view"));
      if (!reduce.matches && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              entry.target.classList.toggle("is-in-view", entry.isIntersecting);
              if (entry.isIntersecting) entry.target.classList.add("is-revealed");
            }
          },
          { threshold: 0.08 },
        );
        nodes.forEach((node) => {
          node.classList.add("motion-ready");
          observer?.observe(node);
        });
      }
      schedule();
    };
    const visibility = () => {
      host.classList.toggle("motion-paused", document.hidden);
      schedule();
    };
    setup();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    reduce.addEventListener("change", setup);
    mobile.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", visibility);
      reduce.removeEventListener("change", setup);
      mobile.removeEventListener("change", setup);
    };
  }, [root, route]);
}
