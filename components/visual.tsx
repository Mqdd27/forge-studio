export function WorkVisual({ type }: { type: string }) {
  return (
    <div
      className="
        relative h-full w-full
        min-w-0
        overflow-hidden
        rounded-lg
        border border-border
        bg-alt
      "
    >
      {/* =====================================================
          INNER FRAME
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          rounded-md
          border
          border-[rgba(181,80,26,0.16)]

          sm:inset-4
        "
      />

      {/* =====================================================
          BARS
      ====================================================== */}

      {type === "bars" ? (
        <div
          className="
            absolute
            bottom-[16%]
            left-[10%]
            right-[10%]

            flex
            h-[44%]
            items-end
            gap-1.5

            sm:left-[12%]
            sm:right-[12%]
            sm:gap-2
          "
        >
          <i
            className="
              block h-[34%]
              flex-1
              rounded-t-sm
              bg-accent/70
            "
          />

          <i
            className="
              block h-[68%]
              flex-1
              rounded-t-sm
              bg-accent/70
            "
          />

          <i
            className="
              block h-[48%]
              flex-1
              rounded-t-sm
              bg-accent/70
            "
          />

          <i
            className="
              block h-[90%]
              flex-1
              rounded-t-sm
              bg-accent/70
            "
          />

          <i
            className="
              block h-[62%]
              flex-1
              rounded-t-sm
              bg-accent/70
            "
          />
        </div>
      ) : type === "lines" ? (
        /* ===================================================
            LINES
        ==================================================== */

        <div
          className="
            absolute
            left-[10%]
            top-[22%]

            grid
            w-[78%]
            gap-2

            sm:left-[12%]
            sm:top-[24%]
            sm:w-[70%]
            sm:gap-[9px]
          "
        >
          <i className="h-1 rounded-full bg-border sm:h-[5px]" />

          <i
            className="
              h-1
              w-[72%]
              rounded-full
              bg-accent

              sm:h-[5px]
            "
          />

          <i className="h-1 rounded-full bg-border sm:h-[5px]" />

          <i
            className="
              h-1
              w-[52%]
              rounded-full
              bg-border

              sm:h-[5px]
            "
          />

          <i
            className="
              h-1
              w-[84%]
              rounded-full
              bg-border

              sm:h-[5px]
            "
          />
        </div>
      ) : (
        /* ===================================================
            NODES
        ==================================================== */

        <div className="absolute inset-0">
          {/* CONNECTIONS */}

          <div
            className="
              absolute
              left-[22%]
              top-[49%]
              h-px
              w-[54%]
              origin-left
              -rotate-[28deg]
              bg-accent/50
            "
          />

          <div
            className="
              absolute
              left-[24%]
              top-[49%]
              h-px
              w-[52%]
              origin-left
              rotate-[28deg]
              bg-accent/50
            "
          />

          {/* NODES */}

          <b
            className="
              absolute
              left-[17%]
              top-[41%]

              h-3 w-3

              rounded-full
              border-2
              border-accent
              bg-white

              sm:h-3.5
              sm:w-3.5
            "
          />

          <b
            className="
              absolute
              left-[44%]
              top-[22%]

              h-3 w-3

              rounded-full
              border-2
              border-accent
              bg-white

              sm:h-3.5
              sm:w-3.5
            "
          />

          <b
            className="
              absolute
              left-[44%]
              top-[67%]

              h-3 w-3

              rounded-full
              border-2
              border-accent
              bg-white

              sm:h-3.5
              sm:w-3.5
            "
          />

          <b
            className="
              absolute
              right-[16%]
              top-[41%]

              h-3 w-3

              rounded-full
              border-2
              border-accent
              bg-white

              sm:h-3.5
              sm:w-3.5
            "
          />
        </div>
      )}

      {/* =====================================================
          SUBTLE GRID DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]
          [background-size:24px_24px]

          sm:[background-size:28px_28px]
        "
      />
    </div>
  );
}
