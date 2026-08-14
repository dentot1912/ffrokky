"use client";

import { useState, useEffect, useRef } from "react";
import {
  Zap,
  Palette,
  Smartphone,
  ShieldCheck,
  Users,
  BarChart3,
  Globe,
  Bot,
  Code2,
  HelpCircle,
  FileText,
  Lock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Share2,
  Mail,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Link2,
  Gamepad2,
  Gift,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Catalog", href: "#catalog" },
  { label: "FAQ & Terms", href: "#faq" },
];

const FEATURES = [
  {
    Icon: Link2,
    iconClass: "icon-violet",
    title: "Custom Link Spesial",
    desc: "Mau pakai nama atau tanggal spesial? Bisa. Bikin link yang lebih personal dan gampang diingat.",
  },
  {
    Icon: Gamepad2,
    iconClass: "icon-cyan",
    title: "Mini Games Seru",
    desc: "Bukan cuma lihat-lihat. Ada mini games dan interaksi seru buat bikin pengalaman makin asik.",
  },
  {
    Icon: Smartphone,
    iconClass: "icon-pink",
    title: "Cakep di Semua Device",
    desc: "Mau dibuka dari HP, tablet, atau laptop? Tetap nyaman dilihat dan enak dipakai.",
  },
  {
    Icon: ShieldCheck,
    iconClass: "icon-amber",
    title: "Privasi Terjaga",
    desc: "Website kamu tetap private. Nggak asal dipublikasikan, jadi bisa dinikmati sesuai kebutuhan kamu.",
  },
  {
    Icon: Gift,
    iconClass: "icon-green",
    title: "Kado Beda dari yang Lain",
    desc: "Kasih sesuatu yang lebih personal dan berkesan. Cocok buat kejutan yang nggak pasaran.",
  },
  {
    Icon: Palette,
    iconClass: "icon-orange",
    title: "Bebas Request",
    desc: "Punya konsep sendiri? Request desain, fitur, dan tampilan website sesuai kebutuhan kamu.",
  },
];

const CATALOG_ITEMS = [
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    image: "assets/birthday-06/banner.png",
    badgeLabel: "Featured",
    category: "website ulang tahun",
    title: "Website Birthday Pinky",
    desc: "Bikin ulang tahunnya jadi lebih seru. Masuk dan temukan foto, musik, dan kejutan spesial. Sekali buka, langsung bikin penasaran.",
    tech: ["Foto/Video", "Music", "Free Request"],
    price: 25000,
    filter: "website ulang tahun",
    images: [
      "assets/birthday-06/image1.png",
      "assets/birthday-06/banner.png",
      "assets/birthday-06/image2.png",
      "assets/birthday-06/image3.png",
      "assets/birthday-06/image4.png",
      "assets/birthday-06/image5.png",
      "assets/birthday-06/image6.png",
      "assets/birthday-06/image7.png",
    ],
  },
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    image: "assets/birthday-05/banner.png",
    badgeLabel: "Featured",
    category: "website ulang tahun",
    title: "Website Birthday Canva Style",
    desc: "Bikin ulang tahunnya jadi lebih seru. Masuk dan temukan foto, musik, dan kejutan spesial. Sekali buka, langsung bikin penasaran.",
    tech: ["Foto/Video", "Music", "Free Request"],
    price: 25000,
    filter: "website ulang tahun",
    images: [
      "assets/birthday-05/banner.png",
      "assets/birthday-05/image1.png",
      "assets/birthday-05/image2.png",
      "assets/birthday-05/image3.png",
      "assets/birthday-05/image4.png",
      "assets/birthday-05/image5.png",
    ],
  },
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    image: "assets/birthday-04/banner.png",
    badgeLabel: "Featured",
    category: "website ulang tahun",
    title: "Website Birthday Code",
    desc: "Bikin ulang tahunnya jadi lebih seru. Masuk pakai code, lalu temukan foto, musik, dan kejutan spesial. Sekali buka, langsung bikin penasaran.",
    tech: ["Foto/Video", "Music", "Free Request"],
    price: 25000,
    filter: "website ulang tahun",
    images: [
      "assets/birthday-04/image1.png",
      "assets/birthday-04/image2.png",
      "assets/birthday-04/banner.png",
      "assets/birthday-04/image3.png",
      "assets/birthday-04/image4.png",
    ],
  },
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    demo: "https://www.tiktok.com/@frokkyofc/video/7637883115276373269",
    image: "assets/birthday-03/banner.png",
    badgeLabel: "Featured",
    category: "website ulang tahun",
    title: "Website Birthday Kitty",
    desc: "Rayakan ulang tahunnya dengan cara yang lebih gemas. Isi dengan foto, video, musik, dan kejutan ala Hello Kitty.",
    tech: ["Foto/Video", "Music", "Free Request"],
    price: 25000,
    filter: "website ulang tahun",
    images: [
      "assets/birthday-03/banner.png",
      "assets/birthday-03/image1.png",
      "assets/birthday-03/image2.png",
      "assets/birthday-03/image3.png",
      "assets/birthday-03/image4.png",
      "assets/birthday-03/image5.png",
      "assets/birthday-03/image6.png",
    ],
  },
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    demo: "https://www.tiktok.com/@frokkyofc/video/7650410830416153874",
    image: "assets/birthday-02/banner.png",
    badgeLabel: "Featured",
    category: "website ulang tahun",
    title: "Website Birthday Memories",
    desc: "Bikin hari spesialnya makin seru dengan foto, video, musik, dan masa masa indah dalam satu website.",
    tech: ["Foto/Video", "Music", "Free Request"],
    price: 25000,
    filter: "website ulang tahun",
    images: [
      "assets/birthday-02/banner.png",
      "assets/birthday-02/image2.png",
      "assets/birthday-02/image3.png",
    ],
  },
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    image: "assets/birthday-01/banner.png",
    badgeLabel: "Featured",
    category: "website ulang tahun",
    title: "Website Birthday Puzzle",
    desc: "Website ulang tahun interaktif berisi puzzle, foto, musik, dan kejutan spesial yang bisa bikin momen ulang tahun jadi lebih berkesan.",
    tech: ["Foto/Video", "Music", "Free Request"],
    price: 25000,
    filter: "website ulang tahun",
    images: [
      "assets/birthday-01/banner.png",
      "assets/birthday-01/image1.png",
      "assets/birthday-01/image2.png",
      "assets/birthday-01/image3.png",
      "assets/birthday-01/image4.png",
      "assets/birthday-01/image5.png",
    ],
  },
  {
    Icon: Globe,
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    badge: "badge-featured",
    demo: "https://vocakopi.vercel.app/",
    image: "assets/voca/banner.png",
    badgeLabel: "Featured",
    category: "website UMKM",
    title: "Template UMKM",
    desc: "Website UMKM untuk memperkenalkan produk dengan tampilan modern, katalog menu, dan informasi kedai yang mudah diakses.",
    tech: ["Katalog Menu", "Responsive", "Free Request"],
    price: 150000,
    filter: "website UMKM",
    images: [
      "assets/voca/banner.png",
      "assets/voca/image1.png",
      "assets/voca/image4.png",
      "assets/voca/image5.png",
    ],
  },
];

const FILTERS = ["all", "website ulang tahun", "website UMKM"];

const TERMS = [
  {
    q: "1. Waktu Pengerjaan",
    a: "Website birthday selesai maksimal 3 jam, sedangkan website UMKM membutuhkan waktu sekitar 1–3 hari.",
  },
  {
    q: "2. Revisi & Perbaikan",
    a: "Ada maksimal 3x revisi minor, seperti ganti teks atau tukar foto. Tinggal ajukan dalam 1x24 jam setelah website kamu dikirim.",
  },
  {
    q: "3. Pengembalian Dana",
    a: "Setelah pembayaran selesai, pesanan tidak dapat dibatalkan atau di-refund. Refund hanya berlaku jika terjadi kesalahan dari pihak FFrokky, seperti website gagal dibuat.",
  },
  {
    q: "4. Masa Aktif Website",
    a: "Website birthday aktif selamanya, jadi semua momen dan kenangan di dalamnya bisa kamu akses kapan saja. Untuk website UMKM, gratis masa aktif selama 1 tahun dan bisa diperpanjang dengan Add-on fee setelah masa aktif berakhir.",
  },
  {
    q: "5. Batas Waktu Pengiriman Data",
    a: "Setelah pembayaran, segera kirim detail dan materi pesanan ya. Kalau sampai 1 bulan belum ada data atau kabar, pesanan otomatis dianggap hangus dan tidak bisa di-refund.",
  },
];

const FAQS = [
  {
    q: "1. Cocok nggak sih buat yang lagi LDR?",
    a: "Cocok banget! Kamu bisa bikin kejutan dari jauh lewat website yang berisi foto, video, ucapan, musik, sampai mini games. Tinggal kirim link-nya, beres!",
  },
  {
    q: "2. Gimana cara ordernya?",
    a: "Gampang banget. Klik tombol WhatsApp di pojok kanan bawah, lalu admin akan kasih form untuk isi materi seperti teks, foto, lagu, dan link. Setelah payment, tinggal santai—biar aku yang urus semuanya!",
  },
  {
    q: "3. Metode pembayaran pakai apa saja?",
    a: "Untuk sekarang pembayaran tersedia melalui QRIS. Tinggal scan, bayar, lalu kirim bukti pembayaran. Simple!",
  },
];

/* ─── Hooks ─────────────────────────────────────────────────────── */
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Sub-components ────────────────────────────────────────────── */
function AccordionItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-item${open ? " open" : ""}`}>
      <button
        id={`accordion-btn-${index}`}
        className="accordion-trigger"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span className="accordion-question">{q}</span>
        <span className="accordion-chevron" aria-hidden="true">
          <ChevronDown size={14} />
        </span>
      </button>
      <div className="accordion-body" aria-hidden={!open}>
        <p className="accordion-answer">{a}</p>
      </div>
    </div>
  );
}

function CatalogCard({
  item,
  onClick,
}: {
  item: (typeof CATALOG_ITEMS)[0];
  onClick: () => void;
}) {
  const IconComponent = item.Icon;
  return (
    <div className="catalog-card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      style={{ cursor: "pointer" }}
    >
      <div className="catalog-img">
        {item.image ? (
          <img src={item.image} alt={item.title} className="catalog-img-file" />
        ) : (
          <div className="catalog-img-bg" style={{ background: item.bg }}>
            <IconComponent size={42} color="#ffffff" />
          </div>
        )}
        <div className="catalog-img-overlay" />
      </div>
      <div className="catalog-body">
          <div className="catalog-price">
            <div className="catalog-title">{item.title}</div>
            {(item as { price?: number }).price !== undefined && (
                <span className="catalog-price-value">
                  {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format((item as { price: number }).price)}
                </span>
            )}
          </div>
        <div className="catalog-desc">{item.desc}</div>
        <div className="catalog-footer">
          <div className="catalog-tech">
            {item.tech.map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
          <div className="catalog-arrow">
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogModal({
  item,
  onClose,
}: {
  item: (typeof CATALOG_ITEMS)[0];
  onClose: () => void;
}) {
  const IconComponent = item.Icon;
  const itemImages = (item as { images?: string[] }).images;
  const slides: string[] = itemImages && itemImages.length > 0
    ? itemImages
    : item.image
      ? [item.image]
      : ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"];

  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlide = () => setActiveSlide((p) => (p === 0 ? slides.length - 1 : p - 1));
  const nextSlide = () => setActiveSlide((p) => (p === slides.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const waLink = `https://wa.me/6281371840860?text=Halo%20FFrokky%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(item.title)}`;
  const itemDemo = (item as { demo?: string }).demo;

  return (
    <div className="mfs-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="mfs-panel" onClick={(e) => e.stopPropagation()}>

        {/* ── FULL-SCREEN BG IMAGE ── */}
        <div className="mfs-bg-wrap">
          {slides.map((src, i) => (
            <div key={i} className={`mfs-bg-slide${i === activeSlide ? " active" : ""}`}>
              {/* blurred bg fill — visible on mobile so contain image has no black bars */}
              <img src={src} alt="" className="mfs-bg-blur" />
              {/* main crisp image */}
              <img src={src} alt="" className="mfs-bg-img" />
            </div>
          ))}
          {/* dark gradient overlay so text stays readable */}
          <div className="mfs-gradient-overlay" />
        </div>

        {/* ── TOP BAR: badge + close ── */}
        <div className="mfs-top-bar">
          <button className="mfs-close-btn" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── DOT INDICATORS (top center) ── */}
        {slides.length > 1 && (
          <div className="mfs-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`mfs-dot${i === activeSlide ? " active" : ""}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* ── ARROW NAVIGATION ── */}
        {slides.length > 1 && (
          <>
            <button className="mfs-arrow mfs-arrow-left" onClick={prevSlide} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <button className="mfs-arrow mfs-arrow-right" onClick={nextSlide} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* ── FLOATING INFO CARD (bottom) ── */}
        <div className="mfs-info-card">
          {/* thumbnail strip */}
          {slides.length > 1 && (
            <div className="mfs-thumb-strip">
              {slides.map((src, i) => (
                <button
                  key={i}
                  className={`mfs-thumb${i === activeSlide ? " active" : ""}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Thumbnail ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}

          <div className="mfs-info-body">
            <div className="mfs-info-left">
              <div className="mfs-price">
                <h2 className="mfs-title font-display">{item.title}</h2>
                {(item as { price?: number }).price !== undefined && (
                  
                    <span className="mfs-price-value">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format((item as { price: number }).price)}
                    </span>
                )}
              </div>
              <p className="mfs-desc">{item.desc}</p>
            </div>

            <div className="mfs-info-right">
              {itemDemo && (
                <a
                  href={itemDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mfs-demo-btn"
                  id="modal-demo-btn"
                >
                  <ExternalLink size={15} />
                  <span>Preview</span>
                </a>
              )}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mfs-cta-btn"
                id="modal-order-btn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Pesan Sekarang</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Sections ──────────────────────────────────────────────────── */
function Navbar({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <a href="#hero" className="navbar-logo" aria-label="Home" onClick={() => setMenuOpen(false)}>
          FFrokky
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links" role="list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="navbar-mobile-toggle">
          <button
            id="mobile-menu-btn"
            className={`menu-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Backdrop for Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-label="Mobile navigation">
        <div className="mobile-menu-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-menu-item"
              onClick={() => setMenuOpen(false)}
            >
              <span>{l.label}</span>
              <ArrowRight size={15} className="mobile-menu-arrow" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero-wrapper" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-center">
          <h1 className="hero-title">
            Bikin Momen Spesial Jadi{" "}
            <span className="gradient-text font-display">Makin Berkesan</span>
          </h1>

          <p className="hero-desc">
            Mau kasih kejutan buat pasangan, ngerayain anniversary, atau sekadar bilang
            "aku sayang kamu" dengan cara yang beda? Bikin website kado yang personal,
            seru, dan bisa jadi kenangan yang nggak terlupakan.
          </p>

          <div className="hero-actions">
            <a href="#catalog" className="btn-primary btn-primary-lg" id="hero-view-work-btn">
              Katalog Website <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-stats">
            {[
              { value: "10+", label: "Customers" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useFadeIn();
  return (
    <section id="features" className="features-section" aria-label="Features">
      <div className="section" ref={ref} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="fade-in" ref={ref}>
          <h2 className="section-title font-display">
            Kenapa Harus<br />
            <span className="gradient-text">Website Gift?</span>
          </h2>

          <div className="features-grid">
            {FEATURES.map((f, i) => {
              const IconComp = f.Icon;
              return (
                <div key={f.title} className="feature-card fade-in" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className={`feature-icon ${f.iconClass}`}>
                    <IconComp size={22} color="var(--accent)" />
                  </div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogSection() {
  const [active, setActive] = useState("all");
  const [selectedItem, setSelectedItem] = useState<(typeof CATALOG_ITEMS)[0] | null>(null);
  const ref = useFadeIn();
  const filtered = active === "all" ? CATALOG_ITEMS : CATALOG_ITEMS.filter((c) => c.filter === active);

  return (
    <>
      <section id="catalog" className="catalog-section" aria-label="Catalog">
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="fade-in" ref={ref}>
            <h2 className="section-title font-display">
              Katalog <span className="gradient-text">Website</span>
            </h2>
            <p className="section-subtitle">
              Website untuk bikin bisnis makin dikenal atau momen spesial jadi lebih berkesan.
            </p>

            <div className="catalog-filters" role="tablist" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  id={`filter-${f}`}
                  role="tab"
                  aria-selected={active === f}
                  className={`filter-btn${active === f ? " active" : ""}`}
                  onClick={() => setActive(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <div className="catalog-grid" role="list">
              {filtered.map((item) => (
                <div key={item.title} role="listitem">
                  <CatalogCard item={item} onClick={() => setSelectedItem(item)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {selectedItem && (
        <CatalogModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}

function AccordionSection() {
  const ref = useFadeIn();
  return (
    <section id="faq" className="accordion-section" aria-label="FAQ and Terms">
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="fade-in" ref={ref}>
          <h2 className="section-title font-display">
            Answers &amp; <span className="gradient-text">Policies</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before we start working together.
          </p>

          <div className="accordion-columns">
            {/* FAQ */}
            <div id="faq-column">
              <div className="accordion-group-title">
                <HelpCircle size={18} color="var(--accent)" /> Frequently Asked Questions
              </div>
              <div className="accordion-list" role="list">
                {FAQS.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} index={i} />
                ))}
              </div>
            </div>

            {/* Terms */}
            <div id="terms" aria-label="Terms and Conditions">
              <div className="accordion-group-title">
                <FileText size={18} color="var(--accent)" /> Terms &amp; Conditions
              </div>
              <div className="accordion-list" role="list">
                {TERMS.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} index={100 + i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="navbar-logo" style={{ fontSize: "1.5rem" }}>
            Sosial Media
          </div>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" id="footer-social-github">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" id="footer-social-linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter" id="footer-social-twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Dribbble" id="footer-social-dribbble">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {["Web Development", "UI/UX Design"].map((s) => (
              <li key={s}><a href="#features">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:dimoky01@gmail.com">dimoky01@gmail.com</a></li>
            <li><a href="tel:+6281371840860">+62 813 7184 0860</a></li>
            <li><a href="#hero">Padang, Sumatera Barat, Indonesia</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FFrokky. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#faq">Privacy Policy</a>
          <a href="mailto:hello@ffrokky.dev">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281371840860?text=Halo%20FFrokky%2C%20saya%20tertarik%20dengan%20layanannya"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat via WhatsApp"
      id="whatsapp-float-btn"
    >
      <div className="wa-icon-wrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </div>
      <span className="wa-label">Chat via WhatsApp</span>
    </a>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Trigger fade-in on scroll for static cards
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-in:not(.visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CatalogSection />
        <AccordionSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
