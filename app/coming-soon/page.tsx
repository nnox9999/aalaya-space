import Link from "next/link";

export const metadata = {
  title: "coming soon — aalaya.space",
};

export default function ComingSoonPage() {
  return (
    <main className="landing-page-bg flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-[#dcb8ff]">
        Coming soon
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
        not ready yet.
      </h1>
      <p className="max-w-prose text-base text-[color:var(--on-surface-variant)] md:text-lg">
        aalaya is still being built. check back soon.
      </p>
      <Link
        href="/"
        className="text-sm font-medium tracking-wide text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
      >
        back home
      </Link>
    </main>
  );
}
