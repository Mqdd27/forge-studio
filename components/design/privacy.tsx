import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
export async function PrivacyDesign() {
  const id = (await getLocale()) === "id";
  const sections = id
    ? [
        [
          "Informasi yang Anda berikan",
          "Form inquiry meminta nama, email atau WhatsApp, jenis proyek, dan deskripsi proyek. Jangan sertakan kata sandi, kredensial akses, atau data rahasia pelanggan dalam inquiry awal.",
        ],
        [
          "Penggunaan informasi",
          "Informasi inquiry digunakan untuk memahami kebutuhan proyek dan menanggapi Anda melalui kontak yang diberikan. Form ini tidak mendaftarkan Anda ke milis pemasaran.",
        ],
        [
          "Pengiriman dan penyimpanan",
          "Saat layanan pengiriman aktif, informasi diteruskan melalui penyedia pengiriman yang dikonfigurasi untuk Forge Studio. Halaman hanya menampilkan konfirmasi setelah layanan menerima pengiriman. Jika pengiriman tidak tersedia, halaman akan memberi tahu Anda. Website tidak menyimpan salinan inquiry dalam database aplikasi.",
        ],
        [
          "Data teknis",
          "Penyedia hosting dapat memproses log teknis untuk menjalankan dan mengamankan website. Endpoint inquiry memakai pembatasan percobaan sementara untuk mengurangi spam. Website ini tidak memasang pelacak iklan atau analitik tambahan.",
        ],
        [
          "Permintaan terkait data",
          "Untuk meminta koreksi atau penghapusan informasi inquiry, gunakan kanal Forge Studio yang digunakan saat berkorespondensi, atau sampaikan permintaan melalui form proyek jika tersedia. Jangan sertakan data sensitif tambahan.",
        ],
      ]
    : [
        [
          "Information you provide",
          "The inquiry form asks for your name, email or WhatsApp, project type, and project description. Do not include passwords, access credentials, or confidential customer data in an initial inquiry.",
        ],
        [
          "How information is used",
          "Inquiry information is used to understand your project needs and respond through the contact you provide. This form does not subscribe you to marketing emails.",
        ],
        [
          "Delivery and storage",
          "When delivery is active, information is forwarded through the delivery provider configured for Forge Studio. The page confirms submission only after the service accepts it. If delivery is unavailable, the page will tell you. The website does not store an inquiry copy in an application database.",
        ],
        [
          "Technical data",
          "The hosting provider may process technical logs to operate and secure the website. The inquiry endpoint uses temporary attempt limits to reduce spam. This website does not install advertising trackers or additional analytics.",
        ],
        [
          "Data requests",
          "To request correction or deletion of inquiry information, use the Forge Studio channel used in your correspondence, or make a request through the project form when available. Do not include additional sensitive data.",
        ],
      ];
  return (
    <main className="stitch-page stitch-legacy design-page mx-auto max-w-[900px] px-6 py-12 md:py-20">
      <header>
        <h1 className="font-heading font-bold">{id ? "Kebijakan Privasi" : "Privacy Policy"}</h1>
        <p className="mt-5 text-lg text-grey">
          {id
            ? "Cara website Forge Studio menangani informasi inquiry proyek."
            : "How the Forge Studio website handles project inquiry information."}
        </p>
      </header>
      <div className="mt-10 space-y-8">
        {sections.map(([title, description]) => (
          <section key={title}>
            <h2 className="font-heading font-semibold">{title}</h2>
            <p className="mt-4 leading-relaxed text-grey">{description}</p>
          </section>
        ))}
      </div>
      <Link href="/start-a-project" className="about-button btn-secondary mt-10">
        {id ? "Mulai Proyek" : "Start a Project"}
      </Link>
    </main>
  );
}
