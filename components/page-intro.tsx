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
    <section
      className="
        mx-auto
        w-full
        max-w-[1200px]

        px-4
        pb-12
        pt-[120px]

        min-[375px]:pt-[128px]

        sm:px-6
        sm:pb-16
        sm:pt-[145px]

        md:pb-20
        md:pt-[155px]

        lg:px-8
        lg:pb-24
        lg:pt-[170px]

        xl:pt-[180px]
      "
    >
      <div className="max-w-[860px]">
        {eyebrow && (
          <div
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-accent

              sm:text-xs
            "
          >
            {eyebrow}
          </div>
        )}

        <h1
          className="
            my-4
            max-w-[860px]

            break-words

            font-heading
            text-[clamp(38px,11vw,50px)]
            font-bold

            leading-[1.07]
            tracking-[-0.04em]

            text-ink

            sm:my-[18px]
            sm:text-[54px]

            md:text-[60px]

            lg:text-[64px]
          "
        >
          {title}
        </h1>

        <div
          className="
            max-w-[680px]

            text-base
            leading-[1.75]

            text-grey

            sm:text-lg
            sm:leading-[1.7]
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}
