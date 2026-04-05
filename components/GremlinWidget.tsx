'use client';

import { useEffect, useRef, useState } from 'react';

const W = 80;
const H = 75;
const SPEED = 1.3;

export default function GremlinWidget() {
  const posRef = useRef({ x: 140, y: 220 });
  const velRef = useRef({ dx: SPEED, dy: SPEED * 0.6 });
  const rafRef = useRef<number>(0);
  const [renderPos, setRenderPos] = useState({ x: 140, y: 220 });
  const [facingRight, setFacingRight] = useState(true);
  const [bumping, setBumping] = useState(false);
  const [pawPhase, setPawPhase] = useState(0); // 0 = neutral, 1 = left up, 2 = right up
  const bumpTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pawIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // alternate paw raise while walking
    pawIntervalRef.current = setInterval(() => {
      setPawPhase(p => (p === 1 ? 2 : 1));
    }, 320);

    const triggerBump = () => {
      setBumping(true);
      if (bumpTimeoutRef.current) clearTimeout(bumpTimeoutRef.current);
      bumpTimeoutRef.current = setTimeout(() => setBumping(false), 380);
    };

    const tick = () => {
      const pos = posRef.current;
      const vel = velRef.current;
      const maxX = window.innerWidth - W;
      const maxY = window.innerHeight - H;

      let nextX = pos.x + vel.dx;
      let nextY = pos.y + vel.dy;
      let didBump = false;

      // viewport edges
      if (nextX <= 0) { nextX = 0; vel.dx = Math.abs(vel.dx); didBump = true; }
      else if (nextX >= maxX) { nextX = maxX; vel.dx = -Math.abs(vel.dx); didBump = true; }

      if (nextY <= 0) { nextY = 0; vel.dy = Math.abs(vel.dy); didBump = true; }
      else if (nextY >= maxY) { nextY = maxY; vel.dy = -Math.abs(vel.dy); didBump = true; }

      // text block collision (AABB)
      const textEl = document.getElementById('text-block');
      if (textEl) {
        const t = textEl.getBoundingClientRect();
        const gL = nextX, gR = nextX + W, gT = nextY, gB = nextY + H;

        if (gR > t.left && gL < t.right && gB > t.top && gT < t.bottom) {
          // find smallest overlap to determine which face was hit
          const overlapL = gR - t.left;   // gremlin's right hit text's left
          const overlapR = t.right - gL;  // gremlin's left hit text's right
          const overlapT = gB - t.top;    // gremlin's bottom hit text's top
          const overlapB = t.bottom - gT; // gremlin's top hit text's bottom

          const min = Math.min(overlapL, overlapR, overlapT, overlapB);
          if (min === overlapL) { nextX = t.left - W; vel.dx = -Math.abs(vel.dx); }
          else if (min === overlapR) { nextX = t.right; vel.dx = Math.abs(vel.dx); }
          else if (min === overlapT) { nextY = t.top - H; vel.dy = -Math.abs(vel.dy); }
          else { nextY = t.bottom; vel.dy = Math.abs(vel.dy); }
          didBump = true;
        }
      }

      pos.x = nextX;
      pos.y = nextY;

      setRenderPos({ x: nextX, y: nextY });
      setFacingRight(vel.dx > 0);

      if (didBump) triggerBump();

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (bumpTimeoutRef.current) clearTimeout(bumpTimeoutRef.current);
      if (pawIntervalRef.current) clearInterval(pawIntervalRef.current);
    };
  }, []);

  // paw vertical offsets for waddling
  const leftPawY = pawPhase === 1 ? -5 : 0;
  const rightPawY = pawPhase === 2 ? -5 : 0;

  return (
    <>
      <style>{`
        @keyframes blob-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes blob-bump {
          0%   { transform: scaleX(1)    scaleY(1); }
          25%  { transform: scaleX(1.5)  scaleY(0.6); }
          60%  { transform: scaleX(0.85) scaleY(1.15); }
          100% { transform: scaleX(1)    scaleY(1); }
        }
        @keyframes blob-blink {
          0%, 88%, 100% { transform: scaleY(1); }
          93% { transform: scaleY(0.07); }
        }
        .blob-body {
          transform-origin: 40px 75px;
          animation: blob-bob 0.6s ease-in-out infinite;
        }
        .blob-bump {
          animation: blob-bump 0.38s ease-out forwards !important;
        }
        .blob-eyes {
          animation: blob-blink 3.5s ease-in-out infinite;
          transform-origin: 40px 40px;
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          left: renderPos.x,
          top: renderPos.y,
          width: W,
          height: H,
          zIndex: 50,
          pointerEvents: 'none',
          transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)',
          filter: 'drop-shadow(0 0 10px rgba(192, 132, 250, 0.5))',
          willChange: 'left, top',
        }}
      >
        <svg width={W} height={H} viewBox="0 0 80 75" xmlns="http://www.w3.org/2000/svg">

          {/* === EARS (big soft cat — rounded base, gentle pointed tip) === */}
          <path d="M 10,34 Q 8,10 22,4 Q 34,10 32,34 Z" fill="#3b0764" />
          <path d="M 48,34 Q 46,10 58,4 Q 72,10 70,34 Z" fill="#3b0764" />
          {/* inner ear */}
          <path d="M 14,32 Q 13,16 22,11 Q 30,16 29,32 Z" fill="#7c3aed" />
          <path d="M 51,32 Q 50,16 58,11 Q 67,16 66,32 Z" fill="#7c3aed" />

          {/* === BODY + FACE (bobs together) === */}
          <g className={`blob-body${bumping ? ' blob-bump' : ''}`}>

            {/* main body blob */}
            <ellipse cx="40" cy="48" rx="30" ry="26" fill="#2e1065" />

            {/* subtle fur texture swirls */}
            <path d="M 22 38 Q 18 42 22 46" stroke="#1a0030" fill="none" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <path d="M 58 38 Q 62 42 58 46" stroke="#1a0030" fill="none" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            <path d="M 32 28 Q 28 24 33 22" stroke="#1a0030" fill="none" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
            <path d="M 48 28 Q 52 24 47 22" stroke="#1a0030" fill="none" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>

            {/* === EYES === */}
            <g className="blob-eyes">
              {/* left eye */}
              <circle cx="26" cy="44" r="11" fill="#ede9fe" />
              <circle cx="26" cy="44" r="7.5" fill="#0f0020" />
              <circle cx="23" cy="41" r="2.5" fill="#ede9fe" opacity="0.9" />
              <circle cx="28.5" cy="46" r="1.2" fill="#ede9fe" opacity="0.5" />
              {/* right eye */}
              <circle cx="54" cy="44" r="11" fill="#ede9fe" />
              <circle cx="54" cy="44" r="7.5" fill="#0f0020" />
              <circle cx="51" cy="41" r="2.5" fill="#ede9fe" opacity="0.9" />
              <circle cx="56.5" cy="46" r="1.2" fill="#ede9fe" opacity="0.5" />
            </g>

            {/* cat nose — small pink triangle */}
            <path d="M 38 55 L 42 55 L 40 57.5 Z" fill="#f9a8d4" />

            {/* cat mouth — two small lines down from nose tip */}
            <path d="M 40 57.5 L 38 60" stroke="#7c3aed" fill="none" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 40 57.5 L 42 60" stroke="#7c3aed" fill="none" strokeWidth="1.3" strokeLinecap="round" />

          </g>

          {/* === PAWS (outside bob group so they animate independently) === */}
          {/* left paw */}
          <g transform={`translate(0, ${leftPawY})`} style={{ transition: 'transform 0.15s ease-out' }}>
            <ellipse cx="12" cy="58" rx="9" ry="8" fill="#3b0764" />
            {/* paw pads */}
            <ellipse cx="12" cy="60" rx="5" ry="3.5" fill="#c084fc" opacity="0.8" />
            <circle cx="8"  cy="55" r="2" fill="#c084fc" opacity="0.7" />
            <circle cx="12" cy="53" r="2" fill="#c084fc" opacity="0.7" />
            <circle cx="16" cy="55" r="2" fill="#c084fc" opacity="0.7" />
          </g>
          {/* right paw */}
          <g transform={`translate(0, ${rightPawY})`} style={{ transition: 'transform 0.15s ease-out' }}>
            <ellipse cx="68" cy="58" rx="9" ry="8" fill="#3b0764" />
            <ellipse cx="68" cy="60" rx="5" ry="3.5" fill="#c084fc" opacity="0.8" />
            <circle cx="64" cy="55" r="2" fill="#c084fc" opacity="0.7" />
            <circle cx="68" cy="53" r="2" fill="#c084fc" opacity="0.7" />
            <circle cx="72" cy="55" r="2" fill="#c084fc" opacity="0.7" />
          </g>

        </svg>
      </div>
    </>
  );
}
