# Aalaya — Moderation Design

## Philosophy

AI moderation exists to hold the container safe, not to police the space. The goal is to catch genuine harm while preserving the warmth and openness that makes human connection possible. False positives — blocking legitimate vulnerable people — are as serious a failure as missing harmful content.

Moderation is invisible infrastructure. Users experience its effects, not its mechanics.

---

## What we score for

- **Harm to others** — threats, incitement, violence
- **Abuse and harassment** — targeted attacks, sustained hostility
- **Sexual content** — explicit or inappropriate messaging
- **Inappropriate content** — slurs, dehumanising language

We do not score for:
- Sadness, distress, or emotional heaviness — this is expected content
- Positive, celebratory, or joyful content — this should never trigger moderation
- Crisis language — this has its own separate pathway (see below)

---

## Scoring and thresholds

Every outgoing message is scored before it is sent. The user never sees the score — they only see the action.

| Tier | Action |
|---|---|
| **Low** | Soft nudge — suggest reconsidering or rewording |
| **Medium** | Hard warning — user must acknowledge before sending |
| **High** | Message blocked, strike issued |
| **3 strikes** | User removed from platform |

---

## Strike and removal flow

When a user accumulates 3 strikes:
- Account is suspended
- Email is sent to the user containing:
  - The content that triggered each strike
  - The reasoning for each decision
  - The removal outcome

Transparency on removal is intentional. Users deserve to understand why they were removed.

---

## Crisis pathway

Crisis language is handled entirely separately from the harm scoring system.

**Crisis language is never blocked.**

When crisis signals are detected (suicidal ideation, self-harm, expressions of acute distress):
- The message is allowed to send normally
- An in-app response appears from Aalaya — warm, non-clinical, non-AI-branded
- The response surfaces multiple support resources (not just Samaritans — crisis text lines, Mind, Shout, international options)
- The event is logged anonymously (frequency only, no content)
- No human review loop — Aalaya is not a crisis service

**Aalaya is a signpost, not a service.** Terms of Service make this explicit.

> Full crisis design — including resource list, message copy, logging schema, privacy implications, and ICO considerations — is deferred to Phase 8.

---

## Positive space

Moderation must never dampen positive content. Joy, celebration, gratitude, and lightness are as valid as grief and struggle. The eval suite explicitly tests that positive content produces zero moderation response.

---

## Logging

- Strike events: logged with content + reasoning (used for removal emails)
- Crisis signals: logged anonymously, frequency only, no content
- All other moderation events: not logged beyond the immediate action

---

## Evals

The moderation system has a dedicated eval suite in `evals/`. See `evals/README.md` for structure and how to run.

Key eval categories:
- True positives — harmful content correctly caught
- False positives — legitimate content incorrectly flagged (must be near zero)
- Crisis detection — crisis language never blocked, always signposted
- Positive content — joyful/celebratory content never flagged
- Threshold calibration — right tier assigned to right severity