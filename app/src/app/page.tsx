import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Shield,
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
  ArrowUpRight,
  ExternalLink,
  KeyRound,
  FileCheck2,
  Terminal,
  CircleDot,
  ChevronRight,
} from "lucide-react";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { PrivacyComparison } from "@/components/landing/PrivacyComparison";
import { TechnicalSection } from "@/components/landing/TechnicalSection";
import { InstallSection } from "@/components/landing/InstallSection";

const trustPillars = [
  {
    title: "Credential stays private",
    description: "Off-chain storage on your device. Never transmitted over HTTP or RPC.",
    icon: Lock,
  },
  {
    title: "Proof generated locally",
    description: "Zero-knowledge proof calculated in your browser proof engine.",
    icon: Cpu,
  },
  {
    title: "Verified result only",
    description: "Target applications receive a single boolean confirmation with zero leaks.",
    icon: ShieldCheck,
  },
  {
    title: "Midnight Preprod",
    description: "Auditable Compact smart contract primitive deployed on Preprod testnet.",
    icon: Layers,
  },
];

const roles = [
  {
    number: "01",
    roleName: "Issuer / Operator",
    title: "Operators verify once",
    text: "Deploy a gate, generate a private credential, and enroll only its commitment on Midnight Preprod.",
    badge: "WRITES A COMMITMENT",
    detail: "Enrolls hash(credential) into the gate's Merkle tree without revealing raw entropy.",
  },
  {
    number: "02",
    roleName: "Member / User",
    title: "Members hold it privately",
    text: "Members keep the raw credential off-chain and generate their proof locally.",
    badge: "HOLDS THE SECRET",
    detail: "The wallet proof server synthesizes a witness and runs the Compact circuit on-device.",
  },
  {
    number: "03",
    roleName: "Application / Verifier",
    title: "Any app verifies",
    text: "Applications consume a narrow verified result without receiving the underlying credential or identity.",
    badge: "READS THE RESULT",
    detail: "Access gates read the confirmed proof state and unlock session data without storing PII.",
  },
];

const midnightCapabilities = [
  {
    title: "Zero public credential exposure",
    description: "Raw credentials never appear in public transaction payloads or indexer logs.",
  },
  {
    title: "Replay prevention via nullifiers",
    description: "Nullifiers prevent double-spend or proof reuse under single-use proof policies.",
  },
  {
    title: "Browser-local session unlock",
    description: "UX unlocks instantly on confirmed proof while secret keys remain shielded in client memory.",
  },
  {
    title: "Auditable on-chain proof state",
    description: "Midnight explorer links verify that constraints and Merkle roots check out transparently.",
  },
];

const resources = [
  {
    category: "OPERATOR CONSOLE",
    title: "Deploy and enroll.",
    description: "Configure gate parameters, set one-time proof policies, and commit credential hashes to Midnight.",
    href: "/admin",
    action: "Open operator console",
    isExternal: false,
  },
  {
    category: "INTERACTIVE DEMO",
    title: "Issue, prove, verified.",
    description: "Connect Lace or 1AM wallet, load an issued credential, and watch local proof generation in action.",
    href: "/gate",
    action: "Try the live demo",
    isExternal: false,
  },
  {
    category: "DOCUMENTATION",
    title: "Guides and API reference.",
    description: "Explore the Compact programming model, private state transitions, and Midnight dApp connector.",
    href: "https://docs.midnight.network",
    action: "Read Midnight docs",
    isExternal: true,
  },
];

export default function Home() {
  return (
    <main className="bg-surface text-primary selection:bg-accent selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black text-white px-6 pt-20 pb-24 sm:pt-28 sm:pb-36 lg:px-10">
        {/* Landscape Image Background */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none">
          <Image
            src="/Landscape_image.jpg"
            alt="Privora Zero-Knowledge Ambient Landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          {/* Black shadow coming upside from the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Centered Pill Announcement Tag (No white border) */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-1.5 text-xs shadow-md backdrop-blur-md transition-transform hover:scale-[1.02]">
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-semibold text-white tracking-wide uppercase">
              Preprod
            </span>
            <span className="font-mono text-[11px] font-medium text-white/90">
              Midnight Zero-Knowledge Credentials
            </span>
            <ChevronRight size={13} className="text-white/60" />
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 font-display text-5xl leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Prove you belong.
            <br />
            Show <em className="italic font-normal text-emerald-300">nothing else.</em>
          </h1>

          {/* Supporting Copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Verify membership with a trusted issuer, then prove access to any app on Midnight. Privora returns
            only the result an application needs — never your name, credential, or wallet history.
          </p>

          {/* Action CTAs (No white borders) */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/gate"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black shadow-lg transition-all hover:bg-neutral-200 sm:w-auto"
            >
              <span>Try the live demo</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/admin"
              className="inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-full bg-black/70 px-7 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-black/90 sm:w-auto"
            >
              <span>Open operator console</span>
              <ChevronRight size={15} className="text-white/60" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. VERIFICATION PIPELINE (LANDSCAPE FORMAT)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-4 pb-20 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="eyebrow">Interactive Pipeline</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
              Private input → Zero-knowledge proof → Minimal verified output.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
              Observe how secrets stay shielded on-device while generating cryptographically binding proofs for Midnight.
            </p>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TRUST / PRODUCT SIGNAL
          ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-border-subtle bg-secondary/60 px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="eyebrow">Built for private access</p>
            <p className="font-mono text-[11px] text-faint">
              Local ZK-SNARK Prover · Midnight Preprod Network
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="paper-card p-5 transition-shadow duration-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface text-accent border border-border-subtle">
                      <Icon size={14} />
                    </span>
                    <h3 className="text-xs font-semibold text-primary">{pillar.title}</h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-5 text-muted">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HOW IT WORKS
          ───────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="px-6 py-24 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
              Three roles, one credential, zero leakage.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              Privacy is load-bearing, not decorative. Privora keeps the credential private while Compact makes
              every value that reaches the chain explicit.
            </p>
          </div>

          {/* Three Steps with Connected Flow Architecture */}
          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            {roles.map((role, idx) => (
              <article
                key={role.number}
                className="paper-card relative flex flex-col justify-between p-7 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl italic text-muted/60">{role.number}</span>
                    <span className="rounded-full bg-surface px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-accent border border-border-subtle">
                      {role.badge}
                    </span>
                  </div>

                  <p className="mt-6 font-mono text-xs uppercase tracking-wider text-faint">
                    {role.roleName}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-primary">{role.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted">{role.text}</p>
                </div>

                <div className="mt-8 border-t border-border-subtle/80 pt-4">
                  <p className="font-mono text-[11px] leading-5 text-faint">{role.detail}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Flow Pipeline Indicator */}
          <div className="mt-8 hidden items-center justify-center gap-4 text-xs font-mono text-muted md:flex">
            <span className="rounded-md bg-secondary px-3 py-1 text-primary">Issuer creates commitment</span>
            <span className="text-faint">→</span>
            <span className="rounded-md bg-secondary px-3 py-1 text-primary">Member computes proof locally</span>
            <span className="text-faint">→</span>
            <span className="rounded-md bg-accent-dim px-3 py-1 font-semibold text-accent">
              App verifies zero-knowledge result
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PRIVACY EXPLANATION (Your credential stays yours)
          ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-border-subtle bg-secondary/40 px-6 py-24 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Selective disclosure</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
              Your credential stays yours.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The contrast is structural. Applications get mathematical certainty without holding your sensitive keys,
              identifiers, or wallet history.
            </p>
          </div>

          <div className="mt-14">
            <PrivacyComparison />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHY MIDNIGHT & TECHNICAL WORKBENCH
          ───────────────────────────────────────────────────────────── */}
      <section id="why-midnight" className="border-t border-border-subtle px-6 py-24 sm:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Midnight</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
              One deployment. Every app. Selective disclosure.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              The Privora contract is deployed once and becomes a shared primitive. Membership is proven against a
              Merkle root, so a proof never reveals which credential it used.
            </p>

            <div className="mt-8 space-y-4">
              {midnightCapabilities.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-dim text-accent">
                    <Check size={13} />
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold text-primary">{item.title}</h3>
                    <p className="mt-0.5 text-xs leading-5 text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/gate"
                className="btn-primary inline-flex min-h-10 items-center justify-center gap-2 px-5 text-xs font-semibold"
              >
                Test verification flow <ArrowRight size={14} />
              </Link>
              <a
                href="https://docs.midnight.network"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex min-h-10 items-center justify-center gap-1.5 px-4 text-xs font-semibold"
              >
                Midnight Compact Docs <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div>
            <TechnicalSection />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INSTALL SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="install" className="border-t border-border-subtle bg-secondary/50 px-6 py-24 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Install</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            Plug it into your stack.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
            A small, typed Preprod demo. Deploy the contract, enroll a commitment, and ship a private access gate.
          </p>

          <div className="mt-12 text-left">
            <InstallSection />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. LIVE DEMO / DOCUMENTATION RESOURCES
          ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-border-subtle px-6 py-20 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="eyebrow">Resources & Environments</p>
              <h2 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
                Ready to explore and verify.
              </h2>
            </div>
            <p className="font-mono text-xs text-faint">
              Midnight Preprod Network (ID: preprod)
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => {
              const isExt = resource.isExternal;
              const CardContent = (
                <div className="paper-card flex h-full flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md">
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-faint">
                      {resource.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-primary">{resource.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted">{resource.description}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 font-mono text-xs font-medium text-accent">
                    <span>{resource.action}</span>
                    {isExt ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
                  </div>
                </div>
              );

              return isExt ? (
                <a
                  key={resource.category}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
                >
                  {CardContent}
                </a>
              ) : (
                <Link
                  key={resource.category}
                  href={resource.href}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-border-subtle bg-secondary/70 px-6 py-24 text-center sm:py-32 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Zero-knowledge access primitive
          </span>

          <h2 className="mt-6 font-display text-5xl leading-[1.04] text-primary sm:text-6xl lg:text-7xl">
            Verify once.
            <br />
            Prove anywhere.
            <br />
            Reveal less.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted">
            Any application can consume the verified result without receiving the raw credential.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href="/gate"
              className="btn-primary inline-flex min-h-12 w-full items-center justify-center gap-2 px-8 text-sm font-semibold shadow-xs sm:w-auto"
            >
              <span>Try the live demo</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/admin"
              className="btn-secondary inline-flex min-h-12 w-full items-center justify-center px-7 text-sm font-semibold sm:w-auto"
            >
              Open operator console
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
