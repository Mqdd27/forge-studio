# Design System — Forge Studio

**Dokumen:** Design System v1.0
**Terkait:** `PRD.md`, `UI_UX_PROMPT.md`

---

## 1. Prinsip Desain

1. **Business-first, bukan developer-portfolio.** Tampilan harus terasa seperti software studio profesional, bukan CV online.
2. **Solusi di atas teknologi.** Visual mendukung pesan "masalah bisnis diselesaikan", bukan memamerkan stack teknis.
3. **Tenang, presisi, dapat dipercaya.** Bukan playful/startup-flashy. Whitespace cukup, tipografi rapi, warna terbatas.
4. **Scalable.** Semua komponen (terutama Product Card & Case Study Card) harus bisa bertambah tanpa desain ulang.

---

## 2. Color Palette

### Primary
| Token | Hex | Penggunaan |
|---|---|---|
| `color-accent` | `#B5501A` (rust/forge orange) | CTA utama, aksen heading, link aktif |
| `color-accent-dark` | `#8F3F14` | Hover state accent |
| `color-accent-light` | `#F4EFEA` | Background section terang, hover card |

### Neutral
| Token | Hex | Penggunaan |
|---|---|---|
| `color-ink` | `#1F1F1F` | Teks utama, heading |
| `color-grey` | `#595959` | Teks sekunder, caption |
| `color-grey-light` | `#8C8C8C` | Placeholder, disabled |
| `color-border` | `#E3DDD5` | Border, divider |
| `color-surface` | `#FFFFFF` | Background utama |
| `color-surface-alt` | `#F7F4F0` | Background section alternatif |

### Semantic
| Token | Hex | Penggunaan |
|---|---|---|
| `color-success` | `#2E7D32` | Status "Live" |
| `color-warning` | `#B8860B` | Status "Beta" |
| `color-muted` | `#9E9E9E` | Status "Coming Soon" |

> Palet sengaja terbatas (1 warna aksen + neutral) agar terasa studio yang matang, bukan produk consumer yang ramai warna.

---

## 3. Typography

- **Font family:** Sans-serif geometris/humanis modern — rekomendasi: `Inter` atau `Manrope` untuk UI/body, `General Sans` atau `Inter Tight` untuk heading besar bila ingin sedikit karakter.
- **Base size:** 16px, line-height 1.6 untuk body.

| Style | Size | Weight | Penggunaan |
|---|---|---|---|
| Display | 56–64px | 700 | Hero headline |
| H1 | 36–40px | 700 | Judul halaman |
| H2 | 28px | 600 | Judul section |
| H3 | 20px | 600 | Judul card/subsection |
| Body Large | 18px | 400 | Subheadline, lead paragraph |
| Body | 16px | 400 | Teks umum |
| Small | 14px | 400 | Caption, meta info |
| Label | 12–13px | 600, uppercase, letter-spacing 0.04em | Badge, tag, eyebrow text |

---

## 4. Spacing & Grid

- **Base unit:** 8px (skala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- **Container max-width:** 1200px, padding horizontal 24px (mobile) / 32–64px (desktop)
- **Grid kolom:** 12-column grid untuk layout umum

### Breakpoints
| Nama | Lebar |
|---|---|
| Mobile | < 640px |
| Tablet | 640–1024px |
| Desktop | > 1024px |
| Wide | > 1440px |

### Product/Case Study Grid (khusus, lihat PRD 7.4)
| Breakpoint | Kolom | Gap |
|---|---|---|
| Mobile | 1 | 16px |
| Tablet | 2 | 24px |
| Desktop | 3 | 32px |

---

## 5. Iconography & Imagery

- **Icon:** line icon, stroke 1.5–2px, rounded joints (rekomendasi set: Lucide/Phosphor) — konsisten satu keluarga icon di seluruh situs.
- **Imagery:** screenshot produk asli (bukan stok foto generik orang kantor). Bila butuh ilustrasi, gunakan gaya diagram/wireframe minimal (garis, kotak, arrow) selaras dengan diagram di Business Plan.
- **Product logo:** ditampilkan dalam bounding box konsisten (mis. 48×48px) di dalam Product Card supaya rapi walau logo tiap produk beda proporsi.

---

## 6. Komponen

### 6.1 Button
| Varian | Style |
|---|---|
| Primary | Background `color-accent`, teks putih, radius 8px, padding 12px 24px, hover → `color-accent-dark` |
| Secondary | Border 1px `color-ink`, background transparan, hover → background `color-accent-light` |
| Ghost/Text | Tanpa border, teks `color-accent`, underline on hover |

### 6.2 Case Study Card (Work)
- Thumbnail 16:9
- Tag kategori (badge kecil)
- Judul project
- 1 baris ringkasan problem
- Hover: elevasi ringan (shadow) + thumbnail slight zoom

### 6.3 Product Card (Products — grid)
Struktur wajib (selaras PRD 7.4):
```
┌─────────────────────────────┐
│  [Logo 48x48]     [Status]  │
│                              │
│  Nama Produk                │
│  Tagline satu baris          │
│                              │
│  Kategori tag                │
│                              │
│  [Visit product →]           │
└─────────────────────────────┘
```
- Padding internal 24px, radius 12px, border 1px `color-border`, background `color-surface`
- Status badge: pill kecil, warna sesuai token semantic (Live/Beta/Coming Soon)
- Hover: border berubah ke `color-accent`, shadow halus muncul
- Card harus tetap rapi walau tagline pendek/panjang (fixed min-height, teks truncate di 2 baris)

### 6.4 Service Card
- Icon di atas, judul, deskripsi singkat, link "Learn more →"

### 6.5 Navigation
- **Header:** logo kiri, menu tengah/kanan (Home, Services, Work, Products, About, Insights), CTA "Start a Project" di ujung kanan (button primary), sticky on scroll dengan background blur/solid saat discroll
- **Footer:** logo + tagline, kolom navigasi, kolom sosial (LinkedIn, Instagram, GitHub), copyright

### 6.6 Form (Contact)
- Input: border 1px `color-border`, radius 8px, padding 12px, focus state → border `color-accent` + subtle ring
- Label di atas input, bukan placeholder-only (accessibility)
- Error state: border merah + teks bantuan kecil di bawah field

### 6.7 Badge/Tag
- Pill, padding 4px 10px, font 12px uppercase, radius full
- Varian warna mengikuti status/kategori (lihat token semantic)

### 6.8 Section Divider
- Gunakan whitespace (padding vertical 80–120px antar section) sebagai pemisah utama, bukan garis solid — kecuali garis tipis aksen (seperti di header dokumen Business Plan) untuk penekanan judul section.

---

## 7. Motion & Interaction

- Transisi standar: 150–200ms, ease-out, untuk hover/focus state
- Hindari animasi besar/berlebihan di hero — cukup fade-in halus saat scroll (staggered) untuk card grid
- Loading state pada form: button berubah jadi spinner kecil + teks "Sending..."

---

## 8. Voice & Tone (Copywriting)

- Bahasa Inggris untuk copy utama website (selaras positioning "Building Software That Solves Real Problems"), lugas dan langsung ke solusi bisnis — hindari jargon teknis di homepage.
- Nada: confident, calm, precise — bukan hype/marketing berlebihan ("revolutionary", "game-changing").
- Judul studi kasus dan produk sebaiknya menyebut hasil/masalah bisnis, bukan nama teknologi.

---

## 9. Accessibility

- Kontras teks minimal 4.5:1 terhadap background
- Semua elemen interaktif dapat diakses via keyboard (focus ring terlihat jelas, gunakan `color-accent` sebagai focus ring)
- Alt text wajib untuk semua gambar/screenshot produk
- Ukuran target sentuh minimal 44×44px untuk tombol di mobile

---

## 10. Dark Mode (opsional, v2)

Bila diperlukan di masa depan:
| Token | Light | Dark |
|---|---|---|
| Background | `#FFFFFF` | `#141414` |
| Surface alt | `#F7F4F0` | `#1E1E1E` |
| Teks utama | `#1F1F1F` | `#F2F2F2` |
| Accent | `#B5501A` | `#D97A45` (sedikit lebih terang agar tetap kontras) |

Tidak wajib untuk v1 — catat sebagai future consideration di PRD.
