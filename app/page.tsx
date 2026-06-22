import Link from "next/link";

const chapterLinks = [
  {
    number: "01",
    title: "Projects",
    subtitle: "Full content design and UX case studies shaped by research, flow, and storytelling.",
    href: "/projects",
  },
  {
    number: "02",
    title: "Playground",
    subtitle: "Smaller experiments, visual studies, and more playful design explorations.",
    href: "/playground",
  },
  {
    number: "03",
    title: "About",
    subtitle: "My background in writing, HCI, and designing for people and their stories.",
    href: "/about",
  },
  {
    number: "04",
    title: "Contact",
    subtitle: "A final page for opportunities, collaboration, and saying hello.",
    href: "/contact",
  },
];

function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M60 10L68 45L105 60L68 74L60 110L52 74L15 60L52 45L60 10Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoodleBookmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 10H68C71.3137 10 74 12.6863 74 16V109L45 88L16 109V16C16 12.6863 18.6863 10 22 10Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M30 30H60"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30 46H54"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DoodleScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 34C20 21 34 17 46 23C58 29 64 41 77 39C90 37 93 18 108 16C123 14 129 36 143 39C157 42 167 26 191 21"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function StorybookPortfolioHomepage() {
  return (
    <main className="min-h-screen bg-[#efe4d1] px-4 py-4 text-[#3b241a] md:px-6 md:py-6">
      <div className="mx-auto max-w-7xl rounded-[2rem] border-2 border-[#3b241a]/10 bg-[#fbf4e8] shadow-[0_18px_60px_rgba(59,36,26,0.12)] overflow-hidden">
        <header className="relative border-b border-[#3b241a]/10 bg-[#f8efdf] px-6 py-5 md:px-10">
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#3b241a]/10" />
          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#3b241a]/50">Camila Garcia</p>
              <p className="mt-1 text-sm text-[#3b241a]/65">UX Designer & Content Designer</p>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-[#3b241a]/75 md:flex">
              <Link href="/projects" className="transition hover:text-[#3b241a] hover:-translate-y-0.5">
                Projects
              </Link>
              <Link href="/playground" className="transition hover:text-[#3b241a] hover:-translate-y-0.5">
                Playground
              </Link>
              <Link href="/about" className="transition hover:text-[#3b241a] hover:-translate-y-0.5">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-[#3b241a] hover:-translate-y-0.5">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <section className="relative grid min-h-[78vh] overflow-hidden lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative px-6 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <div className="absolute right-4 top-4 hidden rounded-full border border-[#3b241a]/10 bg-[#fff8ee] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#3b241a]/45 md:block">
              Cover Page
            </div>

            <DoodleStar className="absolute left-5 top-10 h-10 w-10 rotate-[-12deg] text-[#a85f3f]/60" />
            <DoodleScribble className="absolute bottom-10 left-8 hidden w-36 text-[#a85f3f]/45 md:block" />

            <div className="relative max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[0.32em] text-[#3b241a]/45">A portfolio in chapters</p>
              <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#3b241a] md:text-7xl lg:text-[6.25rem]">
                I design stories people can move through.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#3b241a]/72 md:text-lg">
                I blend storytelling, research, and flow design to create experiences that feel warm, clear, and thoughtfully guided.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-full border border-[#3b241a] bg-[#3b241a] px-6 py-3 text-sm text-[#fbf4e8] transition hover:-translate-y-0.5"
                >
                  Open chapters
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-[#3b241a]/20 bg-[#fff8ee] px-6 py-3 text-sm text-[#3b241a] transition hover:-translate-y-0.5 hover:border-[#3b241a]/40"
                >
                  Meet the author
                </Link>
              </div>
            </div>
          </div>

          <div className="relative border-t border-[#3b241a]/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_38%),linear-gradient(180deg,#f4e8d6_0%,#eddcc4_100%)] px-6 py-10 md:px-10 lg:border-l lg:border-t-0 lg:py-14">
            <div className="absolute left-0 top-0 hidden h-full w-6 bg-gradient-to-r from-[#d6c1a8]/55 to-transparent lg:block" />
            <div className="absolute right-5 top-8 rotate-[8deg] rounded-2xl border border-[#3b241a]/10 bg-[#fff8ee] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#3b241a]/45 shadow-sm">
              Story Notes
            </div>
            <DoodleBookmark className="absolute left-8 top-8 hidden h-20 w-20 text-[#a85f3f]/55 md:block" />
            <DoodleStar className="absolute bottom-8 right-8 h-12 w-12 text-[#a85f3f]/50" />

            <div className="relative mx-auto mt-10 max-w-lg rounded-[2rem] border border-[#3b241a]/10 bg-[#fffaf2] p-6 shadow-[0_20px_50px_rgba(59,36,26,0.08)] md:p-8">
              <div className="mb-6 border-b border-dashed border-[#3b241a]/12 pb-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#3b241a]/42">Inside this book</p>
              </div>

              <div className="space-y-5">
                <div className="rounded-[1.4rem] border border-[#3b241a]/10 bg-[#f7eddc] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#3b241a]/42">Themes</p>
                  <p className="mt-2 text-sm leading-6 text-[#3b241a]/72">
                    Storytelling, human context, intuitive flows, and design that feels emotionally aware.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Research-led",
                    "Flow-focused",
                    "Narrative-driven",
                    "Content-aware",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#3b241a]/10 bg-[#fff8ee] px-4 py-4 text-sm text-[#3b241a]/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.4rem] border border-dashed border-[#3b241a]/16 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#3b241a]/42">Margin note</p>
                  <p className="mt-2 text-sm leading-6 text-[#3b241a]/70">
                    The work here is meant to feel guided and playful, like turning through a book that still knows how to be useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#3b241a]/10 bg-[#f8efdf] px-6 py-6 md:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Storytelling", "I use narrative to shape how a product feels and unfolds."],
              ["Human context", "I design with people’s emotions, needs, and uncertainty in mind."],
              ["Flow", "I care about rhythm, transitions, and the path from one moment to the next."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.6rem] border border-[#3b241a]/10 bg-[#fff8ee] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#3b241a]/42">{title}</p>
                <p className="mt-3 text-sm leading-6 text-[#3b241a]/70">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative px-6 py-16 md:px-10 md:py-20 lg:px-14">
          <DoodleScribble className="absolute right-10 top-12 hidden w-40 text-[#a85f3f]/45 lg:block" />

          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#3b241a]/45">Table of contents</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] md:text-5xl">
                Choose a chapter.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#3b241a]/68">
              The homepage is the cover. The rest of the story lives in separate pages for full projects, playful experiments, and more about me.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {chapterLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-[2rem] border border-[#3b241a]/10 bg-[#fffaf2] p-6 shadow-[0_12px_30px_rgba(59,36,26,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(59,36,26,0.1)]"
              >
                <div className="mb-10 flex items-start justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#3b241a]/40">{item.number}</p>
                  <span className="rounded-full border border-[#3b241a]/10 bg-[#f7eddc] px-3 py-1 text-[11px] text-[#3b241a]/55 transition group-hover:translate-x-1">
                    Open
                  </span>
                </div>
                <h3 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[#3b241a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#3b241a]/68">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-[#3b241a]/10 bg-[#2f1f19] px-6 py-12 text-[#f9efdf] md:px-10 md:py-14 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#f9efdf]/55">Final page</p>
              <div className="mt-5 rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-6 text-[#f9efdf]/75">
                  A portfolio shaped by writing, design, research, and a love for thoughtful detail.
                </p>
              </div>
            </div>

            <div>
              <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
                Designed like a book, built for real people to read.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#f9efdf]/76">
                I want this portfolio to feel warm and memorable without losing clarity. The goal is not to overwhelm, but to guide people through the work with care and personality.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full border border-[#f9efdf] px-6 py-3 text-sm text-[#f9efdf] transition hover:-translate-y-0.5"
                >
                  Turn to contact
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm text-[#f9efdf] transition hover:-translate-y-0.5"
                >
                  Go to projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

