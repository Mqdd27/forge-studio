# PRD — Forge Studio Website

**Dokumen:** Product Requirements Document
**Produk:** Website Forge Studio (marketing site + portfolio + product hub)
**Versi:** 1.0
**Terkait:** `Forge_Studio_Business_Plan.docx`, `DESIGN_SYSTEM.md`, `UI_UX_PROMPT.md`

---

## 1. Ringkasan

Website Forge Studio adalah pusat dari seluruh ekosistem distribusi Forge Studio (lihat Business Plan bab 6). Website ini **bukan portfolio developer**, melainkan **business website** yang berfungsi sebagai sales tool: menampilkan positioning, layanan, studi kasus, produk, dan menjadi titik konversi dari trafik (LinkedIn, Instagram, Google, referral) menjadi leads (consultation request).

---

## 2. Latar Belakang & Masalah

- Forge Studio tidak menggunakan marketplace freelance → butuh distribusi sendiri, dan website adalah pusatnya.
- Website developer pada umumnya terasa seperti CV online ("Hi, I'm a Full Stack Developer"), sehingga tidak dipercaya oleh calon client bisnis/perusahaan.
- Forge Studio sudah/akan punya beberapa produk (GrowPOS, dan SaaS berikutnya) yang perlu ditampilkan tanpa membuat halaman jadi berat dikelola satu per satu.

---

## 3. Tujuan & Success Metrics

| Tujuan | Metrik |
|---|---|
| Membangun kredibilitas sebagai studio, bukan freelancer individu | Bounce rate halaman Home < 55% |
| Mengonversi trafik menjadi leads berkualitas | Jumlah submission form Contact / bulan |
| Menunjukkan bukti kerja nyata | Rata-rata waktu di halaman Work > 1 menit |
| Menjadi pusat rujukan untuk semua channel sosial | % trafik dari LinkedIn/Instagram yang mendarat ke halaman Services/Work |
| Menampilkan lini produk tanpa beban maintenance tinggi | Waktu update saat menambah produk baru < 15 menit (cukup edit 1 data source) |

---

## 4. Target Pengguna

### Persona 1 — Business Owner / Decision Maker (UMKM berkembang, distributor, retail)
Tidak paham istilah teknis. Datang karena masalah operasional (stok manual, laporan berantakan). Ingin lihat bukti bahwa Forge Studio pernah menyelesaikan masalah serupa.

### Persona 2 — Startup Founder
Butuh partner teknis untuk membangun SaaS dari nol. Ingin tahu proses kerja (dari ide sampai produksi) dan kredibilitas teknis (GitHub, engineering write-up).

### Persona 3 — Existing Client (mencari maintenance / repeat project)
Sudah kenal Forge Studio, datang langsung ke halaman Contact atau Services untuk kebutuhan baru.

### Persona 4 — Calon Partner / Kontributor
Datang untuk menilai kredibilitas Forge Studio sebelum bergabung sebagai kontraktor.

---

## 5. Scope

### In Scope (v1)
- Halaman: Home, Services, Work, Products, About, Insights, Contact
- Form contact yang terhubung ke email
- Studi kasus (case study) dengan format Problem–Solution–Engineering–Features–Result–Screenshots
- Products page dalam bentuk **grid** (lihat bab 7.4)
- Responsive (mobile, tablet, desktop)
- Basic SEO (meta tag, sitemap, OG image)
- Analytics dasar

### Out of Scope (v1)
- Blog CMS penuh dengan komentar/kategori kompleks — cukup daftar artikel sederhana
- Client portal / dashboard login
- Multi-bahasa (ID/EN) — v1 bisa satu bahasa dulu, disiapkan strukturnya saja
- E-commerce/payment di website utama (biarkan produk seperti GrowPOS punya landing/app sendiri, website Forge Studio hanya menampilkan grid + link keluar)

---

## 6. Site Map / Information Architecture

```text
Home
├── Services
│   ├── Custom Web Applications
│   ├── SaaS Development
│   ├── Business Automation
│   ├── API & System Integration
│   ├── DevOps & Deployment
│   └── Maintenance & Support
├── Work
│   └── /work/[case-study-slug]
├── Products            ← GRID (lihat 7.4)
├── About
├── Insights
│   └── /insights/[post-slug]
└── Contact
```

---

## 7. Requirement per Halaman

### 7.1 Home
**Tujuan:** first impression sebagai business website, mengarahkan ke Services/Work/Contact.

Urutan section (mengikuti Business Plan bab 7):
1. **Hero** — headline "We build software that solves real business problems.", subheadline, CTA primer "Start a Project", CTA sekunder "View Our Work"
2. **Trusted / Technologies** — logo stack teknologi yang digunakan (bukan logo client dulu jika belum ada)
3. **What We Build** — ringkasan 6 kategori layanan, tiap kartu link ke `/services#kategori`
4. **Selected Work** — 3 studi kasus unggulan, link ke `/work`
5. **How We Work** — ringkas Client Journey (Discovery → Proposal → Development → Handover → Maintenance)
6. **Products** — preview singkat grid produk (2–3 kartu), link "See all products" ke `/products`
7. **About Forge (ringkas)** — 1 paragraf + link ke `/about`
8. **CTA penutup** — "Start a Project"

**Functional requirement:** semua CTA "Start a Project" mengarah ke `/contact`.

---

### 7.2 Services
Satu halaman berisi 6 kategori layanan (Custom Web Application, SaaS Development, Business Automation, API & Integration, DevOps, Maintenance), masing-masing dengan:
- Judul & deskripsi singkat (positioning solusi bisnis, bukan tech stack)
- Daftar use case/contoh (bullet)
- Untuk Maintenance: tabel 3 tingkat paket (Basic Care / Business Care / Continuous Development)
- CTA di akhir tiap section: "Discuss your project"

**Catatan build:** karena baru mulai (side job), tandai kategori yang **aktif dipasarkan** vs yang **coming soon / by request** — hindari kesan menjanjikan kapasitas yang belum ada.

---

### 7.3 Work (Portfolio)
- Grid/list studi kasus, filter opsional by kategori layanan
- Tiap studi kasus (`/work/[slug]`) mengikuti format:
  **Problem → Solution → Engineering → Features → Result → Screenshots**
- Minimal 3 studi kasus untuk launch (sesuai Business Plan Fase 1)
- Tiap card di listing menampilkan: nama project, 1 baris problem, 1 tag industri/kategori, thumbnail

---

### 7.4 Products — **GRID SAJA**

**Keputusan desain:** karena Forge Studio sudah/akan punya beberapa produk (GrowPOS, SaaS #2, SaaS #3, dst.), halaman Products **tidak dibuat sebagai landing page individual yang berat**, melainkan **grid sederhana** yang scalable.

**Requirement:**
- Layout: responsive grid — **3 kolom desktop / 2 kolom tablet / 1 kolom mobile**
- Setiap item grid = 1 **Product Card**, berisi:
  - Logo/icon produk
  - Nama produk (mis. "GrowPOS")
  - Tagline 1 baris (mis. "Point-of-sale for growing retail businesses")
  - Status badge: `Live` / `Beta` / `Coming Soon`
  - Kategori singkat (mis. "POS", "SaaS")
  - CTA: "Visit product →" (link keluar ke produk/landing page-nya sendiri) atau "Learn more" bila belum live
- Tidak perlu deskripsi panjang, spesifikasi fitur, atau pricing di kartu ini — cukup jadi **hub navigasi**, detail lengkap ada di landing page masing-masing produk (di luar website Forge Studio) atau, jika belum ada, di modal/expand ringkas.
- **Data-driven:** daftar produk sebaiknya berasal dari satu sumber data (array/JSON/CMS field) sehingga menambah produk baru = menambah satu entri, bukan membuat halaman baru.
- Empty state belum diperlukan karena sudah ada produk, tapi struktur harus tetap mendukung penambahan produk kapan saja tanpa redesign.

**Contoh struktur data produk (untuk referensi teknis):**
```json
{
  "name": "GrowPOS",
  "tagline": "Point-of-sale for growing retail businesses",
  "status": "beta",
  "category": "POS / SaaS",
  "url": "https://growpos.example.com",
  "logo": "/products/growpos-logo.svg"
}
```

---

### 7.5 About
- Cerita singkat Forge Studio (pakai copy dari Business Plan bab 2 — transparan sebagai studio independen, tidak berpura-pura perusahaan besar)
- Cara kerja singkat / prinsip
- Foto/identitas founder(s) — opsional, boleh minimal (nama + peran, tanpa branding personal berlebihan)

---

### 7.6 Insights
- Daftar artikel sederhana (title, tanggal, ringkasan, tag)
- Konten mengikuti kategori Build in Public (Business Plan bab 8): Building, Feature, Engineering, Problem→Solution, Case Study, Behind The Build
- v1 cukup markdown/CMS ringan, tidak perlu sistem komentar

---

### 7.7 Contact
- Form: Nama, Email/WhatsApp, Perusahaan (opsional), Jenis kebutuhan (dropdown: Custom App / SaaS / Automation / Integration / Maintenance / Lainnya), Deskripsi singkat proyek
- Alternatif kontak langsung: email, WhatsApp business (jika ada)
- Set ekspektasi respons (mis. "Kami membalas dalam 1–2 hari kerja")
- Setelah submit → tampilkan konfirmasi + gambaran next step (mirip Client Journey: Discovery → Consultation)

---

## 8. Functional Requirements

| ID | Requirement |
|---|---|
| F-01 | Form contact mengirim notifikasi ke email studio & menyimpan submission |
| F-02 | Halaman Work bisa difilter berdasarkan kategori layanan |
| F-03 | Halaman Products merender grid dari satu sumber data terpusat |
| F-04 | Semua CTA utama ("Start a Project") konsisten mengarah ke form Contact |
| F-05 | Meta title/description dapat diatur per halaman & per studi kasus (SEO) |
| F-06 | Analytics mencatat page view dan submission Contact minimal |

## 9. Non-Functional Requirements

- **Performance:** Lighthouse score ≥ 90 untuk Performance & SEO di halaman utama
- **Responsive:** breakpoint mobile (< 640px), tablet (640–1024px), desktop (> 1024px)
- **Accessibility:** kontras warna minimal WCAG AA, semua gambar punya alt text, navigasi bisa diakses keyboard
- **Security:** form contact punya validasi & basic spam protection (honeypot/captcha ringan)
- **Maintainability:** konten (studi kasus, produk, artikel) idealnya bisa diedit tanpa deploy ulang kode (headless CMS atau markdown-based content)

## 10. Rekomendasi Tech Stack (non-mengikat)

- Framework: Next.js (SSG/ISR untuk performa + SEO)
- Styling: Tailwind CSS, mengikuti token di `DESIGN_SYSTEM.md`
- Content: Markdown/MDX untuk studi kasus & artikel, atau headless CMS ringan (Sanity/Notion-as-CMS) bila ingin non-developer bisa update
- Hosting: Vercel/VPS sendiri (selaras dengan layanan DevOps Forge Studio — bisa jadi showcase juga)
- Form handling: API route sederhana + email service (Resend/SMTP)
- Analytics: Plausible/Umami (privacy-friendly) atau Google Analytics 4

## 11. Milestones (selaras dengan Business Plan Fase 1)

| Milestone | Cakupan |
|---|---|
| M1 — Skeleton | Struktur halaman + navigasi + design system diterapkan |
| M2 — Core Content | Home, Services, Contact live dengan copy final |
| M3 — Proof | Minimal 3 studi kasus di Work, grid Products terisi |
| M4 — Polish & SEO | Meta tags, sitemap, analytics, performance pass |
| M5 — Launch | Domain live, terhubung ke social media |

## 12. Open Questions

- Apakah butuh dukungan dua bahasa (ID/EN) di v1 atau nanti?
- Apakah studi kasus akan menyertakan nama client asli atau anonim (tergantung NDA)?
- Siapa yang menjadi penanggung jawab update konten Insights secara rutin?
- Apakah form Contact perlu terintegrasi ke tools tertentu (mis. Notion, Google Sheet, CRM ringan) untuk tracking leads?
