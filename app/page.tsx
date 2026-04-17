import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site-nav";

/** In-section kickers; matches earlier lilac treatment (nav links stay neutral). */
const sectionKickerClass =
  "text-xs font-bold tracking-[0.2em] text-[#dcb8ff]";

const focusLink =
  "rounded-sm text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

const footerLinkClass =
  "text-neutral-500 transition-colors duration-500 hover:text-purple-300";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="landing-page-bg text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main>
        <section
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center md:pb-48 md:pt-60"
          aria-label="Introduction"
        >
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
            aria-hidden
          />
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="mb-12 flex flex-col items-center">
              <h1 className="text-glow text-6xl font-extrabold tracking-tighter text-primary leading-[0.9] md:text-9xl">
                be heard.
              </h1>
              <h1 className="text-glow text-6xl font-extrabold tracking-tighter text-primary leading-[0.9] md:text-9xl">
                hold space.
              </h1>
            </div>
            <p className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-[#ededed] md:text-2xl">
              <span className="text-primary">aalaya</span>{" "}
              <span className="block italic text-[color:var(--on-surface-variant)] md:inline">
                • sanskrit आलय (ālaya) n.
              </span>{" "}
              abode. sanctuary.
              <span className="mt-2 block">
                a place to rest something heavy.
              </span>
            </p>
            <Button
              variant="outline"
              asChild
              className="h-auto rounded-xl border-[color:var(--outline-variant)] bg-transparent px-8 py-4 text-base font-semibold tracking-wide text-primary shadow-none hover:bg-[color:var(--surface-container-high)]"
            >
              <Link href="/coming-soon">Get Started</Link>
            </Button>
          </div>
        </section>

        <section
          id="concept"
          className="reveal-on-scroll scroll-mt-28 px-6 py-32 md:px-12"
          aria-labelledby="concept-heading"
        >
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-start gap-5 md:grid-cols-12 md:items-baseline md:gap-x-16 md:gap-y-3">
            <p className={`md:col-span-4 ${sectionKickerClass}`}>Concept</p>
            <h2
              id="concept-heading"
              className="m-0 text-3xl leading-snug font-bold tracking-tight text-foreground md:col-span-4 md:col-start-1 md:row-start-2"
            >
              what is aalaya?
            </h2>
            <p className="m-0 text-2xl leading-snug font-medium text-[color:var(--on-surface-variant)] md:col-span-8 md:col-start-5 md:row-start-2 md:text-4xl">
              aalaya connects two people. one holds space. one speaks. no
              therapists. no chatbots. no profiles to scroll through.{" "}
              <span className="text-foreground">
                just two people, anonymous, present.
              </span>
            </p>
          </div>
        </section>

        <section
          id="ethos"
          className="reveal-on-scroll relative scroll-mt-28 bg-[color:var(--surface-dim)]/40 px-6 py-48"
          aria-labelledby="ethos-label"
        >
          <div className="mx-auto max-w-4xl">
            <p
              id="ethos-label"
              className={`mb-12 text-center ${sectionKickerClass}`}
            >
              Ethos
            </p>
            <blockquote className="text-center text-4xl leading-[1.1] font-bold text-foreground md:text-6xl">
              <p>
                so much of what we carry doesn&apos;t need a diagnosis.
                <span className="mt-4 block text-primary">
                  it needs someone to sit with it.
                </span>
                <span className="mt-2 block">not to fix. to witness.</span>
              </p>
            </blockquote>
          </div>
        </section>

        <section
          id="boundaries"
          className="reveal-on-scroll flex scroll-mt-28 flex-col items-center px-6 py-24 text-center md:px-12"
          aria-labelledby="boundaries-heading"
        >
          <div className="max-w-[600px] space-y-8">
            <p className={`text-center ${sectionKickerClass}`}>Boundaries</p>
            <h2
              id="boundaries-heading"
              className="text-lg font-bold text-[#ededed] md:text-xl"
            >
              what aalaya is not
            </h2>
            <p className="text-lg leading-relaxed font-medium text-[#ededed] md:text-xl">
              aalaya is not therapy. not crisis support. not a social network.
            </p>
            <div className="pt-4">
              <p className="text-xs leading-relaxed tracking-widest text-neutral-500 uppercase">
                if you are in crisis, contact{" "}
                <a
                  href="tel:116123"
                  className={`${focusLink} inline-flex min-h-11 items-center text-inherit underline`}
                >
                  samaritans (116 123)
                </a>{" "}
                or{" "}
                <a
                  href="sms:85258;?&body=SHOUT"
                  className={`${focusLink} inline-flex min-h-11 items-center text-inherit underline`}
                >
                  text SHOUT to 85258
                </a>
                .{" "}
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusLink} inline-flex min-h-11 items-center text-inherit underline`}
                >
                  outside the UK?
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 w-full border-t border-neutral-800/20 bg-neutral-950 px-12 py-20">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="font-bold tracking-tight text-neutral-100">
              aalaya.space
            </div>
            <div className="font-sans text-xs tracking-[0.05em] text-neutral-500 uppercase">
              © {year} · aalaya.space · the abyss wants to be friends.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-sans text-xs tracking-[0.05em] uppercase">
            <a
              href="https://github.com/nnox9999/aalaya-space"
              className="text-purple-400 transition-colors duration-500 hover:text-neutral-100"
              rel="noopener noreferrer"
            >
              built by nox. open source.
            </a>
            <Link href="/coming-soon" className={footerLinkClass}>
              Privacy
            </Link>
            <Link href="/coming-soon" className={footerLinkClass}>
              Terms
            </Link>
            <Link href="/coming-soon" className={footerLinkClass}>
              Void
            </Link>
          </div>
        </div>
        <div className="reveal-on-scroll mx-auto mt-10 max-w-screen-2xl text-center text-xs text-neutral-500 md:text-left">
          licensed under{" "}
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.html"
            className={`${focusLink} text-neutral-400`}
            rel="noopener noreferrer"
          >
            AGPL v3
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
