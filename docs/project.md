# Aalaya — Project Documentation

## What is Aalaya

Aalaya is an open-source, non-monetised, human-to-human emotional support platform.

People show up, say what they need or what they can hold space for, and connect with other humans. AI is purely infrastructure — moderation and safety. Never companionship. Never a replacement for human connection.

Live at: [aalaya.space](https://aalaya.space)  
GitHub: [aalaya-space](https://github.com/nnox9999/aalaya-space)  
Licence: AGPL v3 + Commons Clause

---

## Core values

- **Human connection is the product.** AI exists to keep the space safe, not to simulate presence.
- **Never therapy, never crisis service.** Aalaya is peer support. Crisis signposting is built in, but we are not a clinical service.
- **Never monetised.** No ads, no subscriptions, no data selling. Ever.
- **Open source.** The code is public. The licence prevents commercial exploitation.
- **Privacy by design.** Minimum data, clear retention, no persistent profiling.

---

## Tech stack

| Layer | Tool |
|---|---|
| Frontend | Next.js (App Router, TypeScript, Tailwind) |
| Database / Auth / Realtime | Supabase |
| Hosting | Vercel |
| AI moderation | Anthropic Claude API |
| Avatar | DiceBear|
| Email | Resend |

---

## Architecture decisions

**No end-to-end encryption**  
Moderation requires the ability to read messages. E2E encryption would make safety screening impossible. Encryption at rest via Supabase/AWS covers data security.

**Stateless AI**  
Claude has no persistent memory of users. Each moderation call is independent. AI cannot build a profile of any user.

**30-day message retention**  
Messages are deleted after 30 days via a pg_cron job. Balances accountability with privacy.

**AI role is safety-only**  
The AI never generates responses to users, never simulates human presence, and never participates in conversations. Its only function is moderation and safety screening.

**Row-Level Security on everything**  
Every Supabase table has RLS enabled. No exceptions.

---

## Moderation

Aalaya uses a tiered scoring system for outgoing messages. Harmful content is caught before it reaches another person. Crisis language is never blocked — it triggers a separate signposting pathway.

See [`docs/MODERATION.md`](./MODERATION.md) for full design.


## Safety & legal requirements (before go-live)

- [ ] ICO registration (£40/yr — [ico.org.uk](https://ico.org.uk))
- [ ] Privacy Policy published
- [ ] Terms of Service published — must state Aalaya is not a crisis service
- [ ] Crisis signposting implemented in-product
- [ ] Responsible disclosure policy (SECURITY.md)
- [ ] RLS configured and tested on all tables
- [ ] hCaptcha on all auth flows
- [ ] Email verification required before access

---

## What Aalaya is not

- Not a therapy platform
- Not a crisis line
- Not an AI companion app
- Not a commercial product
- Not a data business