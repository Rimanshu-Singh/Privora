"use client";

import { useState } from "react";
import {
  ShieldCheck,
  EyeOff,
  Globe2,
  Lock,
  Check,
  KeyRound,
  Database,
  Fingerprint,
} from "lucide-react";

export function PrivacyComparison() {
  const [activeTab, setActiveTab] = useState<"all" | "client" | "ledger">("all");

  const privateItems = [
    {
      title: "Credential secret",
      detail: "Raw entropy generated during issuance. Retained exclusively in your browser or local wallet.",
      tag: "Never leaves device",
      icon: KeyRound,
    },
    {
      title: "Issuer salt",
      detail: "Cryptographic blinding factor that prevents rainbow-table correlation or pattern matching.",
      tag: "Off-chain only",
      icon: Lock,
    },
    {
      title: "User identity & history",
      detail: "No wallet address, ENS name, email, IP, or previous transaction logs are attached to the proof.",
      tag: "Zero metadata",
      icon: EyeOff,
    },
    {
      title: "Raw credential attributes",
      detail: "Tier levels, expiration dates, or membership claims are computed inside the ZK circuit, not revealed.",
      tag: "Circuit private state",
      icon: Fingerprint,
    },
  ];

  const publicItems = [
    {
      title: "Commitment hash",
      detail: "Merkle tree root and leaf hashes on Midnight Preprod confirming membership in the gate.",
      tag: "Cryptographic hash",
      icon: Database,
    },
    {
      title: "Nullifier (when enabled)",
      detail: "Deterministic proof tag that prevents reuse if the gate enforces a one-time proof policy.",
      tag: "Replay prevention",
      icon: ShieldCheck,
    },
    {
      title: "Verification result",
      detail: "The application receives a single narrow assertion: access authorized or denied.",
      tag: "Boolean output",
      icon: Check,
    },
    {
      title: "Explicit public state",
      detail: "Only parameters explicitly declared with disclose() in Compact smart contracts reach the chain.",
      tag: "Auditable Compact code",
      icon: Globe2,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Mobile view selector */}
      <div className="flex justify-center sm:hidden">
        <div className="inline-flex rounded-full border border-border-subtle bg-surface p-1 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-3 py-1.5 font-medium transition-all ${
              activeTab === "all" ? "bg-card text-primary shadow-xs" : "text-faint"
            }`}
          >
            Side by side
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("client")}
            className={`rounded-full px-3 py-1.5 font-medium transition-all ${
              activeTab === "client" ? "bg-card text-primary shadow-xs" : "text-faint"
            }`}
          >
            Private
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ledger")}
            className={`rounded-full px-3 py-1.5 font-medium transition-all ${
              activeTab === "ledger" ? "bg-card text-primary shadow-xs" : "text-faint"
            }`}
          >
            Verified
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* WHAT STAYS PRIVATE */}
        <div
          className={`paper-card relative overflow-hidden p-6 sm:p-8 transition-all ${
            activeTab === "ledger" ? "hidden sm:block opacity-40" : ""
          }`}
        >
          <div className="flex items-center justify-between border-b border-border-subtle pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-white">
                <Lock size={18} />
              </span>
              <div>
                <h3 className="font-display text-xl text-primary">What stays private</h3>
                <p className="font-mono text-xs text-faint">Client-side & off-chain memory</p>
              </div>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">
              Never exposed
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {privateItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border-subtle/80 bg-surface/60 p-4 transition-colors hover:border-border-subtle hover:bg-surface"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                        <Icon size={13} />
                      </span>
                      <h4 className="text-sm font-semibold text-primary">{item.title}</h4>
                    </div>
                    <span className="shrink-0 rounded-full border border-border-subtle bg-card px-2 py-0.5 font-mono text-[10px] text-faint">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted pl-8.5">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-border-subtle bg-surface/40 p-3.5 text-center">
            <p className="font-mono text-[11px] text-muted">
              Zero-knowledge witness data stays inside the local browser proof engine.
            </p>
          </div>
        </div>

        {/* WHAT CAN BE VERIFIED */}
        <div
          className={`paper-card relative overflow-hidden p-6 sm:p-8 transition-all ${
            activeTab === "client" ? "hidden sm:block opacity-40" : ""
          }`}
        >
          <div className="flex items-center justify-between border-b border-border-subtle pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                <Check size={18} />
              </span>
              <div>
                <h3 className="font-display text-xl text-primary">What can be verified</h3>
                <p className="font-mono text-xs text-faint">Midnight chain & consuming app</p>
              </div>
            </div>
            <span className="rounded-full bg-accent-dim px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
              Mathematically sound
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {publicItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border-subtle/80 bg-surface/60 p-4 transition-colors hover:border-accent/40 hover:bg-surface"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-dim text-accent">
                        <Icon size={13} />
                      </span>
                      <h4 className="text-sm font-semibold text-primary">{item.title}</h4>
                    </div>
                    <span className="shrink-0 rounded-full border border-border-subtle bg-card px-2 py-0.5 font-mono text-[10px] text-accent font-medium">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted pl-8.5">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border border-accent/20 bg-accent-dim/40 p-3.5 text-center">
            <p className="font-mono text-[11px] text-accent">
              Verification provides mathematical certainty without transferring ownership of secrets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
