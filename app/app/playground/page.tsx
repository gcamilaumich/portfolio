import Link from "next/link";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-[#efe4d1] px-4 py-6 text-[#3b241a]">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#3b241a]/10 bg-[#fbf4e8] p-8 shadow-[0_18px_60px_rgba(59,36,26,0.12)]">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-sm opacity-70 hover:opacity-100">
            ← Back to cover
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] opacity-50">
            Playground
          </p>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl tracking-[-0.03em]">
          Sketchbook & Experiments
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 opacity-70">
          A collection of smaller ideas, visual explorations, and playful work —
          things that don’t need a full case study, but still tell a story.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group rounded-[1.5rem] border border-[#3b241a]/10 bg-[#fff8ee] p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-40 rounded-lg bg-[#e9dcc7] mb-4 flex items-center justify-center text-sm opacity-60">
                image / design
              </div>

              <p className="text-sm uppercase tracking-[0.2em] opacity-40">
                Experiment {item}
              </p>

              <h3 className="mt-2 font-serif text-xl">
                Title of piece
              </h3>

              <p className="mt-2 text-sm opacity-70">
                Short description or idea behind this exploration.
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}