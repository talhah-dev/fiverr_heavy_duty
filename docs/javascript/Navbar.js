const navbar = document.getElementById("navbar");
const currentPage = document.body.dataset.page || "home";

const navItems = [
  { id: "home", label: "Home", href: "./index.html" },
  { id: "about", label: "About", href: "./about.html" },
  { id: "heavy-duty-towing", label: "Heavy Duty Towing", href: "./heavy-duty-towing.html" },
  { id: "faq", label: "FAQ", href: "./faq.html" },
  { id: "contact-us", label: "Contact Us", href: "./contact-us.html" },
];

const desktopLinks = navItems
  .map((item) => {
    const active = item.id === currentPage;
    return `
      <a
        href="${item.href}"
        class="text-sm font-semibold uppercase tracking-[0.18em] transition ${
          active ? "text-[#E6C17A]" : "text-white/80 hover:text-white"
        }"
      >
        ${item.label}
      </a>
    `;
  })
  .join("");

const mobileLinks = navItems
  .map((item) => {
    const active = item.id === currentPage;
    return `
      <a
        href="${item.href}"
        class="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
          active
            ? "bg-[#154360] text-white"
            : "text-white/80 hover:bg-white/6 hover:text-white"
        }"
      >
        ${item.label}
      </a>
    `;
  })
  .join("");

navbar.innerHTML = `
<header class="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-[0_18px_60px_rgba(2,6,23,0.35)] backdrop-blur">
    <div class="hidden items-center justify-between border-b border-white/8 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white/65 lg:flex">
      <p>24/7 dispatch for heavy-duty towing, recovery, and transport</p>
      <div class="flex items-center gap-4 text-sm text-white/75">
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-circle text-[0.45rem] text-[#E6C17A]"></i>
          Fast response support
        </span>
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-circle text-[0.45rem] text-[#E6C17A]"></i>
          Commercial vehicle ready
        </span>
      </div>
    </div>

    <div class="flex items-center justify-between px-5 py-4 lg:px-6">
      <a href="./index.html" class="flex items-center gap-3 text-white">
        <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#154360] text-[#E6C17A] shadow-[0_14px_30px_rgba(21,67,96,0.35)]">
          <i class="fa-solid fa-truck-ramp-box text-lg"></i>
        </span>
        <span class="leading-none">
          <span class="font-display block text-2xl uppercase tracking-[0.18em]">Heavy Duty</span>
          <span class="block text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Towing Near Me
          </span>
        </span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex">
        ${desktopLinks}
        <a
          href="./contact-us.html"
          class="inline-flex items-center gap-3 rounded-full bg-[#154360] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#103651]"
        >
          Get Help
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
      </nav>

      <button
        id="menuBtn"
        type="button"
        aria-label="Open navigation"
        aria-expanded="false"
        class="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 lg:hidden"
      >
        <i class="fa-solid fa-bars text-lg"></i>
      </button>
    </div>

    <div
      id="mobileMenu"
      class="pointer-events-none overflow-hidden border-t border-white/8 px-5 opacity-0 transition-all duration-300 lg:hidden"
    >
      <div class="flex flex-col gap-2 py-4">
        ${mobileLinks}
        <a
          href="./contact-us.html"
          class="mt-2 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#154360] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#103651]"
        >
          Request Help
          <i class="fa-solid fa-phone-volume text-sm"></i>
        </a>
      </div>
    </div>
  </div>
</header>
`;
