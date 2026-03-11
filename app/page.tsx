export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Subtle indigo horizon glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "80%",
          height: "320px",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(79,70,229,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 pb-40 text-center">
        <h1
          className="text-6xl font-light tracking-[0.3em] text-white sm:text-7xl"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          aalaya
        </h1>
        <p
          className="text-sm font-light tracking-[0.5em] uppercase"
          style={{ color: "rgba(129,140,248,0.7)" }}
        >
          coming soon
        </p>
      </div>

      {/* Mountain silhouette — sits at the very bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="
            M0,320
            L0,220
            L120,160
            L200,200
            L320,100
            L440,180
            L520,130
            L620,60
            L700,110
            L780,70
            L860,120
            L960,50
            L1060,130
            L1140,90
            L1240,160
            L1340,120
            L1440,180
            L1440,320
            Z
          "
          fill="#1e1b4b"
        />
        {/* Second ridge for depth */}
        <path
          d="
            M0,320
            L0,270
            L100,240
            L200,260
            L340,200
            L460,240
            L560,210
            L660,230
            L760,195
            L860,225
            L980,200
            L1100,230
            L1200,215
            L1320,245
            L1440,230
            L1440,320
            Z
          "
          fill="#0f0a2a"
        />
      </svg>
    </main>
  );
}
