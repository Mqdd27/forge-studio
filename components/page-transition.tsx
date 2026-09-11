"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const locale = useLocale();
  const container = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(false);
  const previousPath = useRef(pathname);

  useEffect(() => {
    setPending(false);
    let timeout: ReturnType<typeof setTimeout>;
    const navigate = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      // Observe Next navigation without intercepting links or delaying routing.
      setPending(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setPending(false), 10000);
    };
    document.addEventListener("click", navigate);
    return () => {
      document.removeEventListener("click", navigate);
      clearTimeout(timeout);
    };
  }, [pathname]);

  useEffect(() => {
    const root = container.current;
    if (!root || reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations: Animation[] = [];
    const seen = new WeakSet<Element>();
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
    const animate = (element: Element, delay = 0, distance = mobile ? 10 : 20, duration = mobile ? 440 : 600) => {
      animations.push(
        element.animate(
          [
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: "none" },
          ],
          { duration, delay, easing: ease, fill: "backwards" },
        ),
      );
    };
    if (previousPath.current !== pathname) {
      // Keep the server-rendered page visible before hydration and throughout navigation.
      animations.push(
        root.animate(
          [
            { opacity: 0.72, transform: "translateY(6px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 380, easing: ease },
        ),
      );
    }
    previousPath.current = pathname;
    root.querySelectorAll<HTMLElement>("[data-hero-reveal]").forEach((node, index) => {
      seen.add(node);
      animate(node, mobile ? index * 40 : 80 + index * 80);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            const node = entry.target;
            if (node.hasAttribute("data-stagger")) {
              Array.from(node.children).forEach((child, index) => animate(child, Math.min(index, 3) * 60));
            } else animate(node);
            if (node.classList.contains("process-grid")) node.classList.add("process-revealed");
            observer.unobserve(node);
          }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    const scan = () =>
      root.querySelectorAll<HTMLElement>("main > section h2:first-of-type, [data-stagger], [data-scroll-reveal]").forEach((node) => {
        if (
          seen.has(node) ||
          node.closest(".hero-preview") ||
          (node.closest("[data-stagger]") !== null && !node.hasAttribute("data-stagger"))
        )
          return;
        seen.add(node);
        if (node.getBoundingClientRect().top < innerHeight) {
          if (node.classList.contains("process-grid")) node.classList.add("process-revealed");
          return;
        }
        observer.observe(node);
      });
    scan();
    // Streamed route content can arrive after the layout effect runs.
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname, reducedMotion]);

  return (
    <>
      {pending && (
        <div className="route-progress" role="status" aria-label={locale === "id" ? "Membuka halaman" : "Opening page"}>
          <span />
        </div>
      )}
      <div ref={container} className={`route-content ${pending ? "is-navigating" : ""}`}>
        {children}
      </div>
    </>
  );
}
