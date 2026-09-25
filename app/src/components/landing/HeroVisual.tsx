"use client";

import { useEffect, useState } from "react";
import {
  Shield,
  Cpu,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  RotateCw,
  Sparkles,
  ArrowDown,
  Layers,
  Check,
} from "lucide-react";

type StepId = "input" | "prover" | "verified";

export function HeroVisual() {
  const [activeStep, setActiveStep] = useState<StepId>("verified");
  const [isSimulating, setIsSimulating] = useState(false);
  const [showRawSecret, setShowRawSecret] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(100);

  // Auto simulation or manual trigger
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep("input");
    setSimulationProgress(15);

    setTimeout(() => {
      setActiveStep("prover");
      setSimulationProgress(60);
    }, 1100);

    setTimeout(() => {
      setActiveStep("verified");
      setSimulationProgress(100);
      setIsSimulating(false);
    }, 2400);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-linear-to-b from-accent/10 via-transparent to-transparent blur-xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-border-subtle bg-card shadow-[0_8px_30px_rgba(20,22,26,0.06)] overflow-hidden">
        {/* Top telemetry status bar */}
        <div className="flex items-center justify-between border-b border-border-subtle bg-surface/70 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wider uppercase text-primary/80">
              Midnight ZK Pipeline
            </span>
            <span className="hidden sm:inline-block text-border-subtle">|</span>
            <span className="hidden font-mono text-[11px] text-faint sm:inline-block">
              Local Prover v0.22
            </span>
          </div>

          <button
            type="button"
            onClick={runSimulation}
            disabled={isSimulating}
            className="group flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3 py-1 font-mono text-[11px] font-medium text-primary transition-all hover:border-accent hover:bg-accent-dim disabled:opacity-50"
            title="Simulate zero-knowledge proof execution"
          >
            <RotateCw
              size={12}
              className={`text-accent transition-transform duration-700 ${
                isSimulating ? "animate-spin" : "group-hover:rotate-180"
              }`}
            />
            <span>{isSimulating ? "Proving..." : "Simulate flow"}</span>
          </button>
        </div>

        {/* Step progress pills */}
        <div className="grid grid-cols-3 border-b border-border-subtle bg-surface/30 p-1.5 text-center font-mono text-[10px] uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveStep("input")}
            className={`rounded-lg py-1.5 transition-all ${
              activeStep === "input"
                ? "bg-card font-semibold text-primary shadow-xs"
                : "text-faint hover:text-primary"
            }`}
          >
            1. Private Secret
          </button>
          <button
            type="button"
            onClick={() => setActiveStep("prover")}
            className={`rounded-lg py-1.5 transition-all ${
              activeStep === "prover"
                ? "bg-card font-semibold text-primary shadow-xs"
                : "text-faint hover:text-primary"
            }`}
          >
            2. Local Prover
          </button>
          <button
            type="button"
            onClick={() => setActiveStep("verified")}
            className={`rounded-lg py-1.5 transition-all ${
              activeStep === "verified"
                ? "bg-card font-semibold text-accent shadow-xs"
                : "text-faint hover:text-primary"
            }`}
          >
            3. Verified Result
          </button>
        </div>

        {/* Prover pipeline visual body */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* STAGE 1: PRIVATE CREDENTIAL */}
          <div
            className={`relative rounded-xl border p-4 transition-all duration-300 ${
              activeStep === "input"
                ? "border-primary/30 bg-surface shadow-xs ring-1 ring-primary/20"
                : "border-border-subtle bg-surface/40 opacity-90"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-dark text-white">
                  <Lock size={12} />
                </span>
                <span className="font-mono text-xs font-semibold text-primary">
                  PRIVATE CREDENTIAL
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-surface-raised px-2 py-0.5 font-mono text-[10px] text-faint border border-border-subtle">
                <Shield size={10} className="text-accent" />
                Device memory only
              </span>
            </div>

            <div className="rounded-lg bg-card p-3 border border-border-subtle font-mono text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted">raw_secret:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">
                    {showRawSecret
                      ? "0x7a39fc01e4a69d2e1b"
                      : "••••••••••••••••••••"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowRawSecret((v) => !v)}
                    className="text-faint hover:text-primary transition-colors"
                    aria-label={showRawSecret ? "Mask secret" : "Reveal secret"}
                  >
                    {showRawSecret ? <EyeOff size={13} /> : <Eye size={13} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border-subtle/60 pt-2 text-[11px]">
                <span className="text-muted">issuer_salt:</span>
                <span className="text-faint font-mono">0x4c8e...d20a</span>
              </div>
              <div className="flex items-center justify-between border-t border-border-subtle/60 pt-2 text-[11px]">
                <span className="text-muted">off_chain_leak:</span>
                <span className="text-accent font-semibold">0 bytes (shielded)</span>
              </div>
            </div>
          </div>

          {/* CONNECTOR 1 -> 2 */}
          <div className="relative flex items-center justify-center py-0.5">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-border-subtle" />
            <div className="relative flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3 py-1 font-mono text-[10px] text-muted shadow-xs">
              <ArrowDown size={11} className="text-accent animate-bounce" />
              <span>witness passed to client proof server</span>
            </div>
          </div>

          {/* STAGE 2: LOCAL ZERO-KNOWLEDGE PROOF */}
          <div
            className={`relative rounded-xl border p-4 transition-all duration-300 ${
              activeStep === "prover"
                ? "border-accent/40 bg-accent-dim/30 shadow-xs ring-1 ring-accent/30"
                : "border-border-subtle bg-surface/40 opacity-90"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-white">
                  <Cpu size={12} />
                </span>
                <span className="font-mono text-xs font-semibold text-primary">
                  LOCAL ZK PROVER
                </span>
              </div>
              <span className="font-mono text-[10px] text-accent font-medium">
                Compact circuit: verify_access()
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="rounded-lg bg-card p-2.5 border border-border-subtle">
                <div className="text-[10px] text-faint uppercase tracking-wider">
                  Merkle Tree Root
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-primary font-medium">
                  <Check size={12} className="text-accent" />
                  Checked (depth 16)
                </div>
              </div>
              <div className="rounded-lg bg-card p-2.5 border border-border-subtle">
                <div className="text-[10px] text-faint uppercase tracking-wider">
                  Replay Protection
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-primary font-medium">
                  <Check size={12} className="text-accent" />
                  Nullifier derived
                </div>
              </div>
            </div>

            {/* Dynamic progress bar during simulation */}
            {isSimulating && (
              <div className="mt-3">
                <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${simulationProgress}%` }}
                  />
                </div>
                <div className="mt-1 flex justify-between font-mono text-[10px] text-faint">
                  <span>Executing Compact SNARK</span>
                  <span>{simulationProgress}%</span>
                </div>
              </div>
            )}
          </div>

          {/* CONNECTOR 2 -> 3 */}
          <div className="relative flex items-center justify-center py-0.5">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-border-subtle" />
            <div className="relative flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3 py-1 font-mono text-[10px] text-muted shadow-xs">
              <ArrowDown size={11} className="text-accent" />
              <span>submits verified proof without secret</span>
            </div>
          </div>

          {/* STAGE 3: VERIFIED RESULT */}
          <div
            className={`relative rounded-xl border p-4 transition-all duration-300 ${
              activeStep === "verified"
                ? "border-accent bg-emerald-50/50 shadow-xs ring-1 ring-accent/30"
                : "border-border-subtle bg-surface/40 opacity-90"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-white">
                  <CheckCircle2 size={13} />
                </span>
                <span className="font-mono text-xs font-semibold text-primary">
                  VERIFIED OUTPUT
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
                <Sparkles size={11} />
                ACCESS GRANTED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="rounded-lg bg-card p-3 border border-border-subtle">
                <p className="text-[10px] uppercase tracking-wider text-faint">
                  What Application Sees
                </p>
                <div className="mt-2 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">status:</span>
                    <span className="font-bold text-accent">valid_member</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">identity:</span>
                    <span className="text-faint">anonymous</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">raw_secret:</span>
                    <span className="text-faint">none (hidden)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-card p-3 border border-border-subtle">
                <p className="text-[10px] uppercase tracking-wider text-faint">
                  What Midnight Ledger Sees
                </p>
                <div className="mt-2 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">nullifier:</span>
                    <span className="text-primary font-medium">0x8f3c...</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">zk_proof:</span>
                    <span className="text-accent font-medium">verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">network:</span>
                    <span className="text-faint">Preprod</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom card footer metrics */}
        <div className="flex items-center justify-between border-t border-border-subtle bg-surface/50 px-4 py-2.5 font-mono text-[11px] text-faint sm:px-6">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Selective disclosure</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Proof: ~320ms</span>
            <span className="font-medium text-accent">0 data leaked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
