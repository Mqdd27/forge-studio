"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectCarouselProps = { images: readonly string[]; title: string; locale?: string; className?: string; priority?: boolean };

export function ProjectCarousel({ images, title, locale = "en", className = "", priority = false }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const id = locale === "id";
  const total = images.length;

  const previous = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const next = useCallback(() => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  useEffect(() => {
    if (!fullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreen(false);
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [fullscreen, next, previous]);

  if (!total) return null;

  return (
    <>
      <div className={`relative overflow-hidden bg-[#1C1C18] ${className}`}>
        {/* IMAGE */}

        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={images[activeIndex]}
            alt={`${title} — ${activeIndex + 1}`}
            fill
            priority={priority && activeIndex === 0}
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-cover object-center"
          />
        </div>

        {/* COUNTER */}

        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="bg-[#1C1C18]/85 px-3 py-2 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
            {String(activeIndex + 1).padStart(2, "0")}

            <span className="text-white/35"> / {String(total).padStart(2, "0")}</span>
          </span>

          <button
            type="button"
            onClick={() => setFullscreen(true)}
            aria-label={id ? "Lihat gambar penuh" : "View full image"}
            className="flex h-9 w-9 items-center justify-center bg-[#1C1C18]/85 text-white backdrop-blur-md transition-colors hover:bg-[#FF4F00]"
          >
            <FullscreenIcon />
          </button>
        </div>

        {/* NAVIGATION */}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label={id ? "Gambar sebelumnya" : "Previous image"}
              className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#1C1C18]/75 text-white backdrop-blur-md transition-colors hover:bg-[#FF4F00]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={id ? "Gambar berikutnya" : "Next image"}
              className="absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#1C1C18]/75 text-white backdrop-blur-md transition-colors hover:bg-[#FF4F00]"
            >
              →
            </button>
          </>
        )}

        {/* DOTS */}

        {total > 1 && (
          <div className="absolute right-4 bottom-4 z-10 flex items-center gap-1.5 bg-[#1C1C18]/80 px-3 py-2 backdrop-blur-md">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Image ${index + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  index === activeIndex ? "w-7 bg-[#FF4F00]" : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* FULLSCREEN */}

      {fullscreen && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <div className="relative h-full w-full">
            <Image src={images[activeIndex]} alt={`${title} — ${activeIndex + 1}`} fill sizes="100vw" priority className="object-contain" />
          </div>

          <div className="absolute top-5 right-5 z-20 flex gap-2">
            <span className="flex items-center bg-black/70 px-4 text-xs text-white backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, "0")}

              <span className="text-white/40"> / {String(total).padStart(2, "0")}</span>
            </span>

            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="flex h-11 w-11 items-center justify-center bg-white text-xl text-black transition-colors hover:bg-[#FF4F00]"
              aria-label={id ? "Tutup" : "Close"}
            >
              ×
            </button>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                className="absolute top-1/2 left-5 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white text-black transition-colors hover:bg-[#FF4F00]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute top-1/2 right-5 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white text-black transition-colors hover:bg-[#FF4F00]"
              >
                →
              </button>
            </>
          )}

          {total > 1 && (
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 bg-black/70 px-4 py-3 backdrop-blur-md">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 transition-all ${index === activeIndex ? "w-8 bg-[#FF4F00]" : "w-2 bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function FullscreenIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M8 3H3v5" />
      <path d="M16 3h5v5" />
      <path d="M8 21H3v-5" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}
