const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="px-4 pb-6 pt-4 sm:px-6 lg:px-8 lg:pb-8">
  <div class="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 text-white shadow-[0_18px_60px_rgba(2,6,23,0.3)] backdrop-blur">
    <div class="grid gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10 lg:py-12">
      <div >
        <div class="flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#154360] text-[#E6C17A]">
            <i class="fa-solid fa-truck-ramp-box"></i>
          </span>
          <div>
            <p class="font-display text-2xl uppercase tracking-[0.18em]">Heavy Duty</p>
            <p class="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-white/55">Towing Near Me</p>
          </div>
        </div>
        <p class="mt-5 max-w-md text-sm leading-7 text-slate-300">
          Built for heavy vehicles, large loads, and roadside problems that need more than a standard tow truck.
          Request help when you are ready to build the full service flow on the contact page.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="./contact-us.html"
            class="inline-flex items-center gap-3 rounded-full bg-[#154360] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#103651]">
            Contact Dispatch
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
          <a href="./heavy-duty-towing.html"
            class="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#E6C17A]/35 hover:bg-white/10">
            View Service Page
          </a>
        </div>
      </div>

      <div  >
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[#E6C17A]">Pages</p>
        <ul class="mt-5 space-y-3 text-sm text-slate-300">
          <li><a href="./index.html" class="transition hover:text-white">Home</a></li>
          <li><a href="./about.html" class="transition hover:text-white">About</a></li>
          <li><a href="./heavy-duty-towing.html" class="transition hover:text-white">Heavy Duty Towing</a></li>
          <li><a href="./faq.html" class="transition hover:text-white">FAQ</a></li>
          <li><a href="./contact-us.html" class="transition hover:text-white">Contact Us</a></li>
        </ul>
      </div>

      <div  >
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[#E6C17A]">Core Focus</p>
        <ul class="mt-5 space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check mt-1 text-[#E6C17A]"></i>
            Heavy-duty towing and recovery
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check mt-1 text-[#E6C17A]"></i>
            Equipment and trailer transport
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-circle-check mt-1 text-[#E6C17A]"></i>
            Emergency roadside support
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/8 px-6 py-5 text-sm text-slate-400 lg:px-10">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; <span data-year></span> Heavy Duty Towing Near Me. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="./faq.html" class="transition hover:text-white">Support Info</a>
          <a href="./contact-us.html" class="transition hover:text-white">Request Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;
