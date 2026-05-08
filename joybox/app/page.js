const WHATSAPP_NUMBER = "65YOURNUMBER"; // Replace with your real Joybox WhatsApp number

const createWhatsAppLink = (selectedPackage = "") => {
  const packageLine = selectedPackage
    ? `Package interested: ${selectedPackage}\n`
    : "";

  const message = encodeURIComponent(
    `Hi Joybox, I'd like help planning an event.

${packageLine}Event date:
Event type:
Pax:
Location:
Budget:
Theme:
Services needed:`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const packages = [
  {
    name: "Basic",
    price: "From S$499",
    best: "Small simple birthdays",
    description:
      "Suitable for simple home or venue celebrations where you need basic planning support and vendor coordination.",
    items: [
      "Theme direction",
      "Basic decoration guidance",
      "Vendor coordination support",
      "Simple event checklist",
      "WhatsApp planning support",
    ],
  },
  {
    name: "Premium",
    price: "From S$899",
    best: "Best for most birthday events",
    description:
      "Suitable for customers who want a more complete birthday setup with clearer styling, timeline planning, and vendor support.",
    items: [
      "Custom theme concept",
      "Setup coordination",
      "Timeline planning",
      "Vendor sourcing support",
      "Cake table / decor planning",
      "Event flow guidance",
    ],
    featured: true,
  },
  {
    name: "Luxury",
    price: "From S$1,499",
    best: "For bigger or more styled events",
    description:
      "Suitable for larger celebrations or customers who want a more premium and coordinated event experience.",
    items: [
      "Full event planning support",
      "Premium vendor sourcing",
      "On-site coordination",
      "Guest experience planning",
      "Detailed event timeline",
      "More customised styling direction",
    ],
  },
];

const eventTypes = [
  {
    title: "Kids Birthday",
    text: "Fun themes, decorations, cake table setup, balloons, and family-friendly planning support.",
  },
  {
    title: "21st Birthday",
    text: "Stylish celebration concepts, photo areas, guest flow, and setup coordination.",
  },
  {
    title: "Adult Birthday",
    text: "Simple, elegant, or premium birthday setups for private celebrations.",
  },
  {
    title: "Family Celebration",
    text: "Comfortable planning support for small to medium family gatherings.",
  },
];

const themeIdeas = [
  "Pastel Balloon Setup",
  "Princess Theme",
  "Minimal Cream Theme",
  "Blue & White Theme",
  "Garden Celebration",
  "Luxury Gold Theme",
];

const faqs = [
  {
    question: "How do I get a quotation?",
    answer:
      "Click the WhatsApp button and send us your event date, event type, pax, location, budget, theme, and services needed. We will recommend a suitable package and prepare the next steps.",
  },
  {
    question: "Are the prices fixed?",
    answer:
      "The listed prices are starting prices. The final quotation depends on date, location, pax, theme complexity, vendor needs, and setup requirements.",
  },
  {
    question: "Do you provide decorations?",
    answer:
      "Yes, depending on the selected package and event requirements. We can help with decoration planning, vendor coordination, and setup direction.",
  },
  {
    question: "Can I choose my own theme?",
    answer:
      "Yes. You can share your theme idea, colour preference, and inspiration photos through WhatsApp.",
  },
  {
    question: "Do you handle vendors?",
    answer:
      "Yes. We can help coordinate vendors such as decoration, cake, balloons, venue, photography, and setup support.",
  },
  {
    question: "Do I need to create an account or log in?",
    answer:
      "No. Joybox keeps the process simple. You only need to message us on WhatsApp with your event details.",
  },
];

export default function Home() {
  const mainWhatsAppLink = createWhatsAppLink();

  return (
    <main className="min-h-screen bg-[#FFF1E6] text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-orange-100 bg-[#FFF1E6]/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="text-2xl font-black text-orange-600">
            Joybox
          </a>

          <div className="hidden gap-8 text-sm font-bold md:flex">
            <a href="#packages" className="hover:text-orange-600">
              Packages
            </a>
            <a href="#events" className="hover:text-orange-600">
              Events
            </a>
            <a href="#themes" className="hover:text-orange-600">
              Themes
            </a>
            <a href="#faq" className="hover:text-orange-600">
              FAQ
            </a>
            <a href="#contact" className="hover:text-orange-600">
              Contact
            </a>
          </div>

          <a
            href={mainWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Joybox on WhatsApp"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white hover:bg-orange-600"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
              Singapore Birthday Event Planning
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-7xl">
              Stress-free birthday parties from idea to setup.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Joybox helps busy Singapore families and individuals plan birthday
              celebrations without the stress of coordinating decorations,
              vendors, setup, and event flow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={mainWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a birthday event quote from Joybox on WhatsApp"
                className="rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-lg hover:bg-orange-600"
              >
                Get Event Quote on WhatsApp
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
                ["Fast", "WhatsApp Quote"],
                ["3", "Packages"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-2xl bg-white p-4 shadow">
                  <p className="text-2xl font-black text-orange-600">{num}</p>
                  <p className="text-xs font-bold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl">
            <img
              src="/Joybox Logo.png"
              alt="Joybox birthday event planning logo"
              className="h-[360px] w-full rounded-[1.5rem] object-contain md:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            [
              "Clear Package Scope",
              "You know what is included before confirming your event.",
            ],
            [
              "Vendor Coordination",
              "We help coordinate suitable vendors and setup needs based on your budget.",
            ],
            [
              "Simple Client Process",
              "Send your date, pax, location, budget, and theme. We guide the next step.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-[#FFF8F3] p-8 shadow-md">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">Birthday Packages</h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Starting prices only. Final quotation depends on event date, location,
          guest count, theme complexity, vendor requirements, and setup scope.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 shadow-lg ${
                pkg.featured
                  ? "scale-100 bg-orange-500 text-white md:scale-105"
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
                className={`mt-3 text-sm font-bold ${
                  pkg.featured ? "text-orange-50" : "text-orange-600"
                }`}
              >
                {pkg.best}
              </p>

              <p
                className={`mt-4 text-sm leading-6 ${
                  pkg.featured ? "text-orange-50" : "text-slate-600"
                }`}
              >
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm font-medium">
                {pkg.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <a
                href={createWhatsAppLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask Joybox about the ${pkg.name} package on WhatsApp`}
                className={`mt-8 block rounded-full px-6 py-3 text-center font-bold ${
                  pkg.featured
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                Ask About {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT TYPES */}
      <section id="events" className="bg-[#FFF8F3] px-6 py-20">
        <h2 className="text-center text-4xl font-black">
          Birthday Events We Help Plan
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Joybox supports different birthday celebration styles, from simple home
          setups to more detailed themed celebrations.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-4">
          {eventTypes.map((event) => (
            <div key={event.title} className="rounded-3xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-black">{event.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {event.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">How It Works</h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            ["1", "Send Details", "Share your date, pax, budget, location, and theme."],
            ["2", "Get Direction", "We recommend a suitable package and event direction."],
            ["3", "Confirm Quote", "Scope, vendors, timeline, and deposit are confirmed."],
            ["4", "Celebrate", "Joybox supports the setup and coordination process."],
          ].map(([num, title, text]) => (
            <div
              key={num}
              className="rounded-3xl bg-[#FFF8F3] p-8 text-center shadow-md"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">
                {num}
              </div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THEME IDEAS */}
      <section id="themes" className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">
          Theme Ideas & Sample Setups
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
          Use these as sample directions. Real event photos can be added after
          completed Joybox events with client consent.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {themeIdeas.map((theme) => (
            <div
              key={theme}
              className="flex h-64 items-end rounded-3xl bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6 shadow-md"
            >
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                  Sample Theme
                </p>
                <h3 className="mt-2 text-2xl font-black">{theme}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST PROMISE */}
      <section id="reviews" className="bg-[#FFF8F3] px-6 py-20">
        <h2 className="text-center text-4xl font-black">What You Can Expect</h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Before Joybox has real client testimonials, this section should focus
          on service promises instead of fake reviews.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            [
              "Clear Communication",
              "We confirm your date, pax, location, budget, theme, and required services before quoting.",
            ],
            [
              "Practical Planning",
              "We recommend options based on your budget instead of pushing unnecessary add-ons.",
            ],
            [
              "Less Coordination Stress",
              "We help manage the moving parts so you do not need to coordinate every vendor alone.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-md">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white px-6 py-20">
        <h2 className="text-center text-4xl font-black">Common Questions</h2>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-3xl bg-[#FFF8F3] p-6 shadow-sm">
              <h3 className="font-black">{item.question}</h3>
              <p className="mt-2 leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="bg-slate-950 px-6 py-24 text-center text-white"
      >
        <h2 className="text-4xl font-black md:text-5xl">
          Ready to plan your birthday event?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-slate-300">
          Message us your event date, event type, pax, location, budget, theme,
          and services needed. We will guide you from there.
        </p>

        <a
          href={mainWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start planning your Joybox birthday event on WhatsApp"
          className="mt-10 inline-block rounded-full bg-orange-500 px-10 py-4 font-bold text-white hover:bg-orange-600"
        >
          Start on WhatsApp
        </a>

        <p className="mx-auto mt-6 max-w-xl text-xs leading-6 text-slate-400">
          Note: Final quotation depends on event requirements. Client photos,
          reviews, and testimonials should only be published with consent.
          Privacy policy, refund terms, and service agreement wording require
          legal review.
        </p>
      </section>

      {/* MOBILE FLOATING WHATSAPP CTA */}
      <a
        href={mainWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Joybox on WhatsApp"
        className="fixed bottom-5 left-5 right-5 z-50 rounded-full bg-green-500 px-6 py-4 text-center font-black text-white shadow-2xl hover:bg-green-600 md:hidden"
      >
        WhatsApp Joybox for Quote
      </a>

      {/* FOOTER */}
      <footer className="bg-white px-6 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Joybox. Birthday event planning in Singapore.</p>
        <p className="mt-2">
          Basic · Premium · Luxury birthday event planning packages
        </p>
      </footer>
    </main>
  );
}