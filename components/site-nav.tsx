"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-neutral-400 transition-colors duration-300 hover:text-neutral-100";

const sectionLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#ethos", label: "Ethos" },
  { href: "#boundaries", label: "Boundaries" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-neutral-950/80 shadow-[0px_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-6 py-6 font-sans tracking-tight md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tighter text-neutral-100"
        >
          <span className="text-primary">aalaya.space</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {sectionLinks.map((l) => (
            <a key={l.href} className={navLinkClass} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            asChild
            className="hidden min-h-11 px-3 text-sm font-medium text-neutral-400 hover:bg-transparent hover:text-neutral-100 md:inline-flex"
          >
            <Link href="/coming-soon">Sign In</Link>
          </Button>
          <Button
            asChild
            className="min-h-11 rounded-lg px-5 font-semibold shadow-none hover:shadow-[0_0_20px_rgba(176,124,232,0.4)]"
          >
            <Link href="/coming-soon">Begin</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-6" aria-hidden />
            ) : (
              <Menu className="size-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-neutral-800/40 bg-neutral-950/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out md:hidden",
          open ? "max-h-72" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center text-base text-neutral-300 transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/coming-soon"
            className="mt-2 flex min-h-11 items-center text-base font-medium text-neutral-400 transition-colors hover:text-neutral-100"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
