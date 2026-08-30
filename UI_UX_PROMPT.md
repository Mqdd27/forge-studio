# UI/UX Generation Prompt — Forge Studio Website

**Dokumen:** Prompt siap pakai untuk AI UI/UX tool (mis. Claude, v0, Lovable, Figma AI, Galileo, dsb.)
**Terkait:** `PRD.md`, `DESIGN_SYSTEM.md`
**Cara pakai:** Salin **Master Prompt** di bawah sebagai konteks awal, lalu jalankan **Prompt per Halaman** satu per satu sesuai kebutuhan.

---

## Master Prompt (konteks — jalankan/tempel di awal sebelum prompt per halaman)

```
Kamu adalah senior product designer & frontend engineer. Bantu saya membangun UI untuk
website "Forge Studio", sebuah independent software engineering studio.

KONTEKS PRODUK
Forge Studio menjual solusi bisnis melalui software (custom web application, SaaS
development, business automation, API/system integration, DevOps, maintenance), bukan
menjual teknologi/stack tertentu. Positioning: "Building Software That Solves Real
Problems." Website ini harus terasa seperti business website / studio profesional,
BUKAN portfolio developer pribadi ("Hi, I'm a Full Stack Developer" style dilarang).

TARGET USER
Business owner / decision maker non-teknis, startup founder yang cari partner teknis,
existing client yang butuh maintenance/repeat project, dan calon partner/kontributor
yang menilai kredibilitas studio.

DESIGN SYSTEM — ikuti secara konsisten di semua output:
- Warna: accent #B5501A (rust orange) untuk CTA/aksen, ink #1F1F1F untuk teks utama,
  grey #595959 untuk teks sekunder, surface #FFFFFF, surface-alt #F7F4F0, border #E3DDD5.
  Status: success #2E7D32 (Live), warning #B8860B (Beta), muted #9E9E9E (Coming Soon).
- Tipografi: sans-serif modern (Inter/Manrope untuk body, Inter Tight untuk heading
  besar). Skala: Display 56-64px/700, H1 36-40px/700, H2 28px/600, H3 20px/600,
  Body 16px/400, Small 14px, Label 12-13px uppercase letter-spacing.
- Spacing: base unit 8px, container max-width 1200px, radius komponen 8-12px.
- Breakpoint: mobile <640px, tablet 640-1024px, desktop >1024px.
- Nada visual: tenang, presisi, dapat dipercaya — whitespace lega, warna terbatas
  (1 warna aksen + neutral), TIDAK playful/flashy startup, tidak ramai warna.
- Icon: line icon, stroke 1.5-2px, satu keluarga icon konsisten (Lucide/Phosphor style).
- Copy: bahasa Inggris, lugas, fokus solusi bisnis, hindari jargon teknis di halaman
  publik, hindari kata hype ("revolutionary", "game-changing").

STRUKTUR SITUS (site map)
Home / Services / Work (+ /work/[slug]) / Products / About / Insights (+ /insights/[slug]) / Contact

ATURAN PENTING
1. Semua CTA utama bertuliskan "Start a Project" mengarah ke halaman Contact.
2. Halaman Work menggunakan format studi kasus: Problem → Solution → Engineering →
   Features → Result → Screenshots.
3. Halaman Products WAJIB berbentuk GRID (lihat prompt khusus di bawah) karena sudah
   ada beberapa produk (GrowPOS dan produk SaaS berikutnya) — jangan buat landing page
   panjang per produk di dalam situs ini, cukup Product Card yang link keluar.
4. Semua komponen harus scalable: menambah studi kasus baru atau produk baru tidak
   boleh butuh perubahan layout, cukup data baru.
5. Output harus responsive (mobile-first) dan accessible (kontras AA, keyboard nav,
   alt text pada gambar, target sentuh minimal 44x44px).

Setelah ini saya akan memberi instruksi per halaman. Ikuti design system dan aturan di
atas pada setiap output, dan tanyakan bila ada informasi yang masih kurang jelas
sebelum berasumsi.
```

---

## Prompt per Halaman

### 1. Homepage
```
Buatkan homepage Forge Studio dengan urutan section berikut:
1. Hero — headline "We build software that solves real business problems.",
   subheadline "Custom web applications, business systems and SaaS products engineered
   from idea to production.", CTA primer "Start a Project", CTA sekunder "View Our Work".
2. Trusted/Technologies — baris logo stack teknologi (placeholder logo dulu).
3. What We Build — grid 6 kartu ringkas untuk 6 kategori layanan, tiap kartu berisi
   icon, judul, 1 baris deskripsi, link "Learn more →".
4. Selected Work — 3 case study card unggulan (thumbnail, tag, judul, 1 baris problem).
5. How We Work — timeline horizontal singkat: Discovery → Consultation → Proposal →
   Development → Handover → Maintenance.
6. Products preview — 2-3 Product Card (lihat spek grid di prompt Products), dengan
   link "See all products →".
7. About Forge (ringkas) — 1 paragraf + foto/identitas minimal + link "About us →".
8. CTA penutup — headline singkat + tombol "Start a Project".

Buat dalam satu halaman scroll, section terpisah jelas dengan whitespace vertikal
80-120px, bukan garis divider tebal.
```

### 2. Services
```
Buatkan halaman Services berisi 6 section untuk kategori: Custom Web Applications,
SaaS Development, Business Automation, API & System Integration, DevOps & Deployment,
Maintenance & Support.

Tiap section: judul kategori, deskripsi 1-2 kalimat (framing solusi bisnis, bukan tech
stack), daftar bullet use case/contoh, dan CTA "Discuss your project" di akhir section.

Untuk section Maintenance & Support, tampilkan sebagai 3 kartu paket berdampingan:
Basic Care, Business Care, Continuous Development — masing-masing dengan daftar
cakupan dan satu kartu (Business Care) ditandai "Most popular".

Tambahkan badge kecil "Available now" atau "By request" di header tiap kategori
layanan sesuai kapasitas studio saat ini.
```

### 3. Work (Portfolio) — listing
```
Buatkan halaman listing Work: grid Case Study Card (thumbnail 16:9, badge kategori,
judul project, 1 baris ringkasan problem). Sertakan filter/tab kategori di atas grid
(All, Custom App, SaaS, Automation, Integration). Grid 3 kolom desktop, 2 tablet,
1 mobile. Sertakan empty state ramah bila filter tidak ada hasil.
```

### 4. Work — detail studi kasus
```
Buatkan template halaman detail studi kasus dengan struktur:
- Header: judul project, tag kategori, ringkasan 1 kalimat
- Problem — deskripsi masalah bisnis client
- Solution — apa yang dibangun
- Engineering — bagaimana sistem dibangun (boleh sertakan diagram/arsitektur sederhana)
- Features — bullet kemampuan utama
- Result — dampak/hasil terukur bila ada
- Screenshots — galeri gambar aplikasi
- CTA penutup: "Have a similar challenge? Start a Project"
```

### 5. Products — GRID (khusus, karena sudah ada beberapa produk)
```
Buatkan halaman Products berbentuk GRID SEDERHANA — bukan landing page panjang per
produk. Ini penting karena Forge Studio sudah punya beberapa produk (GrowPOS, dan akan
bertambah SaaS lain), jadi halaman ini harus scalable.

Layout: grid responsive 3 kolom desktop / 2 kolom tablet / 1 kolom mobile, gap 32px
desktop / 16px mobile.

Setiap Product Card berisi HANYA:
- Logo produk (bounding box konsisten 48x48)
- Status badge (Live / Beta / Coming Soon) dengan warna sesuai token semantic
- Nama produk
- Tagline satu baris (truncate 2 baris maksimal, jangan sampai card jadi tidak rapi)
- Tag kategori kecil (mis. "POS", "SaaS")
- Tombol/link "Visit product →" (kalau Live/Beta, link keluar ke situs produk) atau
  "Notify me" (kalau Coming Soon)

JANGAN tambahkan deskripsi panjang, daftar fitur, atau pricing di kartu ini — detail
lengkap ada di situs produk masing-masing di luar Forge Studio. Halaman ini murni jadi
hub navigasi rapi, bukan halaman penjualan produk itu sendiri.

Tambahkan header singkat di atas grid: judul "Products" + 1 kalimat konteks
("Software products built by Forge Studio, born from real client problems.").

Buat komponen Product Card sebagai komponen reusable/data-driven (terima props:
name, tagline, status, category, url, logo) sehingga menambah produk baru = menambah
satu object data, tanpa mengubah layout.
```

### 6. About
```
Buatkan halaman About: hero singkat, copy inti "Forge Studio is an independent
software studio focused on designing and engineering reliable digital products for
businesses.", 1 section prinsip cara kerja (3-4 poin singkat), section identitas
founder minimal (nama + peran, tanpa branding personal berlebihan), CTA "Start a
Project" di akhir.
```

### 7. Insights (listing)
```
Buatkan halaman listing artikel sederhana: list/grid card artikel (judul, tanggal,
tag kategori seperti Building/Feature/Engineering/Case Study, ringkasan 1-2 kalimat).
Tidak perlu sistem komentar atau kategori kompleks.
```

### 8. Contact
```
Buatkan halaman/section Contact dengan form: Nama, Email/WhatsApp, Perusahaan
(opsional), Jenis kebutuhan (dropdown: Custom App / SaaS / Automation / Integration /
Maintenance / Lainnya), Deskripsi singkat proyek (textarea). Tambahkan teks ekspektasi
respons ("We typically reply within 1-2 business days.") dan alternatif kontak
langsung (email/WhatsApp). Setelah submit, tampilkan state konfirmasi yang
menjelaskan next step singkat (Discovery call → Proposal).

Gunakan validasi input yang jelas dan pesan error ramah, bukan teknis.
```

### 9. Navigation (Header & Footer) — komponen global
```
Buatkan Header: logo kiri "FORGE STUDIO", menu (Home, Services, Work, Products, About,
Insights), tombol primary "Start a Project" di kanan. Sticky saat scroll dengan
background berubah dari transparan ke solid+blur halus.

Buatkan Footer: logo + tagline kecil, kolom navigasi (sitemap), kolom sosial (LinkedIn,
Instagram, GitHub icon), baris copyright di bawah dengan divider tipis.
```

---

## Catatan Penggunaan

- Jalankan Master Prompt lebih dulu di setiap sesi baru dengan AI tool agar konteks dan design token konsisten sebelum meminta halaman spesifik.
- Jika tool mendukung upload referensi visual, lampirkan palet warna dari `DESIGN_SYSTEM.md` bab 2 sebagai referensi tambahan.
- Untuk tool berbasis kode (v0, Lovable, Claude/Cursor), minta output dalam komponen terpisah per section agar mudah dipakai ulang, bukan satu file monolitik.
- Review setiap hasil terhadap checklist: (1) tidak ada CTA selain "Start a Project" yang jadi CTA utama, (2) grid Products tidak melebar jadi landing page panjang, (3) warna & tipografi konsisten dengan token di `DESIGN_SYSTEM.md`.
