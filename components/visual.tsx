"use client";
import { useLocale } from "next-intl";
export function WorkVisual({ type, project }: { type: string; project?: string }) {
  const id = useLocale() === "id";
  const market = project === "idxStocks";
  const title =
    type === "lines"
      ? id
        ? "Ringkasan konten"
        : "Content summary"
      : type === "nodes"
        ? id
          ? "Gaji & lembur"
          : "Wages & overtime"
        : market
          ? id
            ? "Pemantauan pasar"
            : "Market overview"
          : id
            ? "Pencatatan inventori"
            : "Inventory records";
  const labels =
    type === "nodes"
      ? [id ? "Gaji" : "Wages", id ? "Lembur" : "Overtime", id ? "Peninjauan" : "Review"]
      : market
        ? [id ? "Pasar" : "Market", id ? "Keuangan" : "Financials", id ? "Riset" : "Research"]
        : [id ? "Barang" : "Items", id ? "Lokasi" : "Location", id ? "Peninjauan" : "Review"];
  return (
    <div className="h-full min-h-[220px] overflow-hidden bg-[#eeece7] text-[#645b54]" aria-hidden="true">
      <div className="flex h-[34px] items-center gap-2 border-b border-[#e8e2db] bg-white px-3 text-[9px]">
        <span className="font-bold text-[#b5501a]">F</span>
        <span>RisenDev</span>
        <span className="ml-auto size-1.5 rounded-full bg-[#cdbdaf]" />
      </div>
      <div className="flex h-[calc(100%-34px)] [&_aside]:w-[76px] [&_aside]:shrink-0 [&_aside]:border-r [&_aside]:border-[#e7e2dc] [&_aside]:bg-[#f8f7f4] [&_aside]:pt-3.5 [&_aside]:text-[8px] max-[359px]:[&_aside]:w-14 [&_aside>span]:block [&_aside>span]:p-2">
        <aside>
          <span className="border-r-2 border-[#b5501a] bg-[#eee5dc] text-[#953900]">{id ? "Ringkasan" : "Overview"}</span>
          {labels.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </aside>
        <div className="min-w-0 flex-1 px-3 py-3.5">
          <div className="mb-[18px] text-[8px] text-[#a46a43]">
            {id ? "Beranda" : "Home"} / {title}
          </div>
          <div className="mb-3 flex items-center justify-between gap-2 text-[11px] text-[#3d3630] [&>span]:rounded-sm [&>span]:bg-[#b5501a] [&>span]:px-2 [&>span]:py-px [&>span]:text-white">
            {title}
            <span>+</span>
          </div>
          {type === "lines" ? (
            <div className="grid gap-3 [&_i]:my-2 [&_i]:block [&_i]:h-1 [&_i]:bg-[#dcd5cd] [&_strong]:text-[9px] [&_strong]:text-[#953900] [&>div]:rounded [&>div]:border [&>div]:border-[#e7dfd5] [&>div]:bg-white [&>div]:p-3.5">
              <div>
                {["w-[90%]", "w-3/4", "w-[86%]", "w-[65%]", "w-4/5"].map((width, i) => (
                  <i className={width} key={i} />
                ))}
              </div>
              <div>
                <strong>{id ? "Poin utama" : "Key points"}</strong>
                {["w-[70%]", "w-[85%]", "w-[55%]"].map((width, i) => (
                  <i className={width} key={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded border border-[#dcd7d0] bg-white">
              <div className="grid grid-cols-3 items-center gap-3 bg-[#f6f4f0] p-2 text-[7px]">
                {labels.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
              {[0, 1, 2, 3].map((n) => (
                <div
                  className="grid grid-cols-3 items-center gap-3 border-t border-[#ede8e2] p-2 text-[7px] [&_i]:h-1 [&_i]:w-4/5 [&_i]:rounded-sm [&_i]:bg-[#d6d1c9] [&_i:nth-child(2)]:w-3/5"
                  key={n}
                >
                  <i />
                  <i />
                  <span
                    className={
                      n % 2
                        ? "justify-self-start rounded-sm bg-[#ece9e4] px-1 py-0.5 text-[#645b54]"
                        : "justify-self-start rounded-sm bg-[#f2e7d5] px-1 py-0.5 text-[#755526]"
                    }
                  >
                    {id ? "Tinjau" : "Review"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
