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
    <div className="st-software" aria-hidden="true">
      <div className="st-software-top">
        <span className="st-software-mark">F</span>
        <span>Forge Studio</span>
        <span className="st-software-dot" />
      </div>
      <div className="st-software-body">
        <aside>
          <span className="st-software-active">{id ? "Ringkasan" : "Overview"}</span>
          {labels.map((v) => (
            <span key={v}>{v}</span>
          ))}
        </aside>
        <div className="st-software-content">
          <div className="st-software-breadcrumb">
            {id ? "Beranda" : "Home"} / {title}
          </div>
          <div className="st-software-heading">
            {title}
            <span>+</span>
          </div>
          {type === "lines" ? (
            <div className="st-summary-preview">
              <div>
                {[90, 75, 86, 65, 80].map((n, i) => (
                  <i style={{ width: n + "%" }} key={i} />
                ))}
              </div>
              <div>
                <strong>{id ? "Poin utama" : "Key points"}</strong>
                {[70, 85, 55].map((n, i) => (
                  <i style={{ width: n + "%" }} key={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="st-software-table">
              <div className="st-software-table-head">
                {labels.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
              {[0, 1, 2, 3].map((n) => (
                <div className="st-software-row" key={n}>
                  <i />
                  <i />
                  <span className={n % 2 ? "st-preview-status soft" : "st-preview-status"}>{id ? "Tinjau" : "Review"}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
