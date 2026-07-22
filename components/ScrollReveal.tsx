"use client";

import { useEffect } from "react";

/**
 * Mounts once at the page root. Observes every [data-reveal] and [data-rule]
 * element in the document and adds `.is-in` when it enters the viewport.
 * Elements inside a [data-stagger] container reveal in sequence (70ms apart)
 * instead of all at once.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("is-in");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal],[data-rule]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          if (el.hasAttribute("data-stagger")) {
            const kids = Array.from(
              el.querySelectorAll(":scope > [data-reveal]")
            );
            kids.forEach((kid, i) => setTimeout(() => reveal(kid), i * 70));
          } else {
            reveal(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (!el.closest("[data-stagger]")) io.observe(el);
    });
    document.querySelectorAll("[data-rule]").forEach((el) => io.observe(el));
    document.querySelectorAll("[data-stagger]").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
