"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(false);
    let timeout: ReturnType<typeof setTimeout>;
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
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
    if (reducedMotion || !container.current) return;
    const elements = container.current.querySelectorAll<HTMLElement>("main > section, main > div > section");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate without changing React-owned attributes: streamed sections
            // may still be hydrating when this parent effect starts observing.
            animations.push(
              entry.target.animate(
                [
                  { opacity: 0, transform: "translateY(22px)" },
                  { opacity: 1, transform: "none" },
                ],
                { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
              ),
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname, reducedMotion]);

  return (
    <>
      {pending && (
        <div className="route-progress" role="status" aria-label="Loading page">
          <span />
        </div>
      )}
      <motion.div
        ref={container}
        key={pathname}
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
