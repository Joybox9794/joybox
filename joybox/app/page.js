const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi Joybox 👋

I'd like to plan a birthday event.

Date:
Pax:
Location (home / venue):
Budget range:
Theme / style:

Looking forward to your recommendation 👍`
);

const WHATSAPP_LINK = `https://wa.me/6581234567?text=${WHATSAPP_MESSAGE}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF1E6] text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-orange-100 bg-[#FFF1E6]/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="text-2xl font-black text-orange-600">
            Joybox
          </a>

          <div className="hidden gap-8 text-sm font-bold md:flex">
            <a href="#packages">Packages</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href={WHATSAPP_LINK}
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white hover:bg-orange-600"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
              Singapore Birthday Event Planning
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Stress-free birthday parties from idea to setup.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Joybox helps you plan birthday celebrations in Singapore by
              handling themes, vendors, decorations, timelines, and setup
              coordination.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                className="rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-lg hover:bg-orange-600"
              >
                Get Event Quote
              </a>

              <a
                href="#packages"
                className="rounded-full border border-orange-300 bg-white px-8 py-4 text-center font-bold hover:bg-[#FFF8F3]"
              >
                View Packages
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["SG", "Based"],
                ["24h", "Reply Goal"],
                ["3", "Packages"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-2xl bg-white p-4 shadow">
                  <p className="text-2xl font-black text-orange-600">{num}</p>
                  <p className="text-xs font-bold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <img
              src="/Joybox Logo.png"
              alt="Joybox logo"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            [
              "Clear Package Scope",
              "You know what is included before confirming.",
            ],
            [
              "Vendor Coordination",
              "We help coordinate suitable vendors and setup needs.",
            ],
            [
              "Simple Client Process",
              "Send date, pax, budget, and theme. We guide the rest.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">Packages</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
          Starting prices. Final quote depends on date, location, guest count,
          theme, and vendor requirements.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              name: "Basic",
              price: "From S$499",
              best: "Small simple birthdays",
              items: [
                "Theme direction",
                "Vendor coordination",
                "Basic decoration support",
                "Simple event checklist",
              ],
            },
            {
              name: "Premium",
              price: "From S$899",
              best: "Best for most birthday events",
              items: [
                "Custom theme concept",
                "Setup coordination",
                "Timeline planning",
                "Vendor sourcing support",
              ],
              featured: true,
            },
            {
              name: "Luxury",
              price: "From S$1,499",
              best: "For bigger or more styled events",
              items: [
                "Full event planning",
                "Premium vendor sourcing",
                "On-site coordination",
                "Guest experience planning",
              ],
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 shadow-lg ${
                pkg.featured
                  ? "scale-105 bg-orange-500 text-white"
                  : "bg-[#FFF8F3]"
              }`}
            >
              {pkg.featured && (
                <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-xs font-black text-orange-600">
                  Most Popular
                </p>
              )}

              <h3 className="text-2xl font-black">{pkg.name}</h3>
              <p className="mt-2 text-xl font-bold">{pkg.price}</p>
              <p
                className={`mt-3 text-sm ${
                  pkg.featured ? "text-orange-50" : "text-slate-500"
                }`}
              >
                {pkg.best}
              </p>

              <ul className="mt-6 space-y-3 text-sm font-medium">
                {pkg.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                className={`mt-8 block rounded-full px-6 py-3 text-center font-bold ${
                  pkg.featured
                    ? "bg-white text-orange-600"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                Ask About {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">Past Event Setups</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Upload your real event photos here once you start completing events.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            "/events/event1.jpg",
            "/events/event2.jpg",
            "/events/event3.jpg",
            "/events/event4.jpg",
            "/events/event5.jpg",
            "/events/event6.jpg",
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-3xl bg-white p-3 shadow-md">
              <img
                src={img}
                alt={`Joybox event setup ${i + 1}`}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#FFF8F3] px-6 py-20">
        <h2 className="text-center text-4xl font-black">How It Works</h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            ["1", "Send Details", "Date, pax, budget, location, and theme."],
            ["2", "Get Plan", "We suggest package and event direction."],
            ["3", "Confirm Setup", "Scope, vendors, and timeline are confirmed."],
            ["4", "Enjoy Event", "Setup and coordination are handled smoothly."],
          ].map(([num, title, text]) => (
            <div key={num} className="rounded-3xl bg-[#FFF8F3] p-8 text-center shadow-md">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">
                {num}
              </div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-3 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[#FFF8F3] px-6 py-20">
        <h2 className="text-center text-4xl font-black">Client Reviews</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Upload screenshots of real client reviews here.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            "/reviews/review1.jpg",
            "/reviews/review2.jpg",
            "/reviews/review3.jpg",
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-3xl bg-white p-3 shadow-md">
              <img
                src={img}
                alt={`Joybox client review ${i + 1}`}
                className="h-80 w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">Common Questions</h2>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {[
            [
              "Do you provide decorations?",
              "Yes, depending on the selected package and event requirements.",
            ],
            [
              "Can I choose my own theme?",
              "Yes. You can share your theme idea, colour preference, and inspiration photos.",
            ],
            [
              "Do you handle vendors?",
              "Yes. We can help coordinate vendors such as decoration, cake, balloons, venue, and setup support.",
            ],
            [
              "How do I get a quote?",
              "Send us your event date, guest count, location, budget, and theme through WhatsApp.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-3xl bg-[#FFF8F3] p-6 shadow-sm">
              <h3 className="font-black">{q}</h3>
              <p className="mt-2 text-slate-500">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="min-h-screen bg-slate-950 px-6 py-32 text-center text-white">
        <h2 className="text-4xl font-black md:text-5xl">
          Ready to plan your birthday event?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-slate-300">
          Message us your date, guest count, location, budget, and theme idea.
          Limited event slots per month.
        </p>

        <a
          href={WHATSAPP_LINK}
          className="mt-10 inline-block rounded-full bg-orange-500 px-10 py-4 font-bold text-white hover:bg-orange-600"
        >
          Start on WhatsApp
        </a>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Joybox. Birthday event planning in Singapore.
      </footer>
    </main>
  );
}