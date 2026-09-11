export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 pb-14 pt-[120px] sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
      <div className="max-w-[760px]">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {eyebrow}
          </div>
        )}

        <h1 className="my-[18px] max-w-[850px] font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[clamp(40px,6vw,64px)]">
          {title}
        </h1>

        <div className="max-w-[640px] text-lg text-grey">{children}</div>
      </div>
    </div>
  );
}
