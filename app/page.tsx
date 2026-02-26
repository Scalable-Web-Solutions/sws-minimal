export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="flex min-h-screen flex-col justify-between px-6 py-10 sm:px-10 sm:py-12">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
            Scalable Web Solutions
          </p>
          <div className="mt-6 h-px w-full bg-zinc-800" />
        </div>

        <section className="max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-6xl">
            Strategic technology execution for ambitious companies.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Custom software delivery across product, infrastructure, and
            security. Eight years of senior-level execution.
          </p>
        </section>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            Frontend / Backend / Mobile / Pen Testing / Enterprise
          </p>
          <a
            href="mailto:contact@scalableweb.solutions"
            className="inline-flex w-fit border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-400 hover:text-white"
          >
            contact@scalableweb.solutions
          </a>
        </div>
      </main>
    </div>
  );
}
