export function WorkVisual({ type }: { type: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-alt">
      <div className="pointer-events-none absolute inset-4 rounded border border-[rgba(181,80,26,0.16)]" />

      {type === "bars" ? (
        <div className="absolute bottom-[18%] left-[12%] right-[12%] flex h-[42%] items-end gap-2">
          <i className="block h-[34%] flex-1 rounded-t-sm bg-accent opacity-70" />
          <i className="block h-[68%] flex-1 rounded-t-sm bg-accent opacity-70" />
          <i className="block h-[48%] flex-1 rounded-t-sm bg-accent opacity-70" />
          <i className="block h-[90%] flex-1 rounded-t-sm bg-accent opacity-70" />
          <i className="block h-[62%] flex-1 rounded-t-sm bg-accent opacity-70" />
        </div>
      ) : type === "lines" ? (
        <div className="absolute left-[12%] top-[24%] grid w-[70%] gap-[9px]">
          <i className="h-[5px] rounded bg-border" />
          <i className="h-[5px] w-[72%] rounded bg-accent" />
          <i className="h-[5px] rounded bg-border" />
          <i className="h-[5px] w-[52%] rounded bg-border" />
          <i className="h-[5px] w-[84%] rounded bg-border" />
        </div>
      ) : (
        <div className="absolute inset-0">
          <div className="absolute left-[22%] top-[48%] h-px w-[55%] origin-left -rotate-[28deg] bg-accent opacity-55" />
          <div className="absolute left-[25%] top-[49%] h-px w-[50%] origin-left rotate-[28deg] bg-accent opacity-55" />

          <b className="absolute left-[18%] top-[42%] h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
          <b className="absolute left-[45%] top-[23%] h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
          <b className="absolute left-[45%] top-[68%] h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
          <b className="absolute right-[17%] top-[42%] h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
        </div>
      )}
    </div>
  );
}
