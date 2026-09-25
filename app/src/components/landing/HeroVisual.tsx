"use client";

import { useState } from "react";
import {
  Shield,
  Cpu,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  RotateCw,
  Sparkles,
  ArrowRight,
  ArrowDown,
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
    <div className="relative mx-auto w-full max-w-6xl">
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-linear-to-b from-accent/15 via-transparent to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-border-subtle bg-card shadow-[0_12px_40px_rgba(20,22,26,0.07)] overflow-hidden">
        {/* Top telemetry status bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle bg-surface/75 px-5 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-primary">
              Midnight ZK Pipeline
            </span>
            <span className="hidden sm:inline-block text-border-subtle">|</span>
            <span className="hidden font-mono text-xs text-faint sm:inline-block">
              Local Prover v0.22 (Preprod)
            </span>
          </div>

          {/* Step progress pills */}
          <div className="flex items-center gap-1 rounded-full border border-border-subtle bg-surface p-1 text-center font-mono text-[11px] uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setActiveStep("input")}
              className={`rounded-full px-3 py-1 transition-all ${
                activeStep === "input"
                  ? "bg-card font-semibold text-primary shadow-xs"
                  : "text-faint hover:text-primary"
              }`}
            >
              1. Secret
            </button>
            <button
              type="button"
              onClick={() => setActiveStep("prover")}
              className={`rounded-full px-3 py-1 transition-all ${
                activeStep === "prover"
                  ? "bg-card font-semibold text-primary shadow-xs"
                  : "text-faint hover:text-primary"
              }`}
            >
              2. Prover
            </button>
            <button
              type="button"
              onClick={() => setActiveStep("verified")}
              className={`rounded-full px-3 py-1 transition-all ${
                activeStep === "verified"
                  ? "bg-card font-semibold text-accent shadow-xs"
                  : "text-faint hover:text-primary"
              }`}
            >
              3. Verified
            </button>
          </div>

          <button
            type="button"
            onClick={runSimulation}
            disabled={isSimulating}
            className="group flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3.5 py-1.5 font-mono text-xs font-medium text-primary transition-all hover:border-accent hover:bg-accent-dim disabled:opacity-50"
            title="Simulate zero-knowledge proof execution"
          >
            <RotateCw
              size={13}
              className={`text-accent transition-transform duration-700 ${
                isSimulating ? "animate-spin" : "group-hover:rotate-180"
              }`}
            />
            <span>{isSimulating ? "Proving..." : "Simulate flow"}</span>
          </button>
        </div>

        {/* Landscape Grid Pipeline: 3 Columns with Connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 p-5 sm:p-7">
          {/* ───────────────────────────────────────────────────────────
              COLUMN 1: PRIVATE CREDENTIAL (INPUT)
              ─────────────────────────────────────────────────────────── */}
          <div
            className={`flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 ${
              activeStep === "input"
                ? "border-primary/40 bg-surface shadow-xs ring-1 ring-primary/20"
                : "border-border-subtle bg-surface/40 opacity-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-dark text-white">
                    <Lock size={13} />
                  </span>
                  <div>
                    <h3 className="font-mono text-xs font-semibold text-primary">
                      PRIVATE CREDENTIAL
                    </h3>
                    <p className="font-mono text-[10px] text-faint">Off-chain secret</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-raised px-2.5 py-0.5 font-mono text-[10px] text-faint border border-border-subtle">
                  <Shield size={10} className="text-accent" />
                  Device memory
                </span>
              </div>

              <div className="rounded-lg bg-card p-3.5 border border-border-subtle font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted">raw_secret:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">
                      {showRawSecret ? "0x7a39fc01e4a6" : "••••••••••••"}
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
                  <span className="text-muted">rpc_leakage:</span>
                  <span className="text-accent font-semibold">0 bytes</span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-secondary/60 p-2 font-mono text-[10px] text-muted text-center">
              Witness is computed locally and never broadcast.
            </div>
          </div>

          {/* CONNECTOR 1 -> 2 */}
          <div className="flex items-center justify-center">
            {/* Desktop Horizontal */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-1.5 px-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-faint rotate-0">
                witness
              </span>
              <div className="flex items-center text-accent">
                <div className="h-0.5 w-6 bg-linear-to-r from-border-subtle to-accent" />
                <ArrowRight size={14} className="animate-pulse" />
              </div>
            </div>
            {/* Mobile Vertical */}
            <div className="flex lg:hidden items-center gap-1.5 py-1 text-faint font-mono text-[10px]">
              <ArrowDown size={12} className="text-accent animate-bounce" />
              <span>witness passed to local prover</span>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────
              COLUMN 2: LOCAL ZK PROVER (CIRCUIT)
              ─────────────────────────────────────────────────────────── */}
          <div
            className={`flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 ${
              activeStep === "prover"
                ? "border-accent/40 bg-accent-dim/30 shadow-xs ring-1 ring-accent/30"
                : "border-border-subtle bg-surface/40 opacity-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white">
                    <Cpu size={13} />
                  </span>
                  <div>
                    <h3 className="font-mono text-xs font-semibold text-primary">
                      LOCAL ZK PROVER
                    </h3>
                    <p className="font-mono text-[10px] text-accent">Midnight Compact</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-faint">
                  verify_access()
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="rounded-lg bg-card p-2.5 border border-border-subtle flex items-center justify-between">
                  <span className="text-[11px] text-muted">Merkle Root:</span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <Check size={12} className="text-accent" /> Verified
                  </span>
                </div>

                <div className="rounded-lg bg-card p-2.5 border border-border-subtle flex items-center justify-between">
                  <span className="text-[11px] text-muted">Nullifier:</span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <Check size={12} className="text-accent" /> Derived
                  </span>
                </div>

                {/* Simulation Progress bar */}
                <div className="rounded-lg bg-card p-2.5 border border-border-subtle">
                  <div className="flex justify-between text-[10px] text-faint mb-1.5">
                    <span>SNARK Proof Gen</span>
                    <span>{simulationProgress}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-accent transition-all duration-500 ease-out"
                      style={{ width: `${simulationProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-secondary/60 p-2 font-mono text-[10px] text-muted text-center">
              Evaluates Compact constraints inside client sandbox.
            </div>
          </div>

          {/* CONNECTOR 2 -> 3 */}
          <div className="flex items-center justify-center">
            {/* Desktop Horizontal */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-1.5 px-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-faint rotate-0">
                proof (π)
              </span>
              <div className="flex items-center text-accent">
                <div className="h-0.5 w-6 bg-linear-to-r from-border-subtle to-accent" />
                <ArrowRight size={14} className="animate-pulse" />
              </div>
            </div>
            {/* Mobile Vertical */}
            <div className="flex lg:hidden items-center gap-1.5 py-1 text-faint font-mono text-[10px]">
              <ArrowDown size={12} className="text-accent" />
              <span>submits verified proof to application</span>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────
              COLUMN 3: VERIFIED OUTPUT (RESULT)
              ─────────────────────────────────────────────────────────── */}
          <div
            className={`flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 ${
              activeStep === "verified"
                ? "border-accent bg-emerald-50/50 shadow-xs ring-1 ring-accent/30"
                : "border-border-subtle bg-surface/40 opacity-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white">
                    <CheckCircle2 size={14} />
                  </span>
                  <div>
                    <h3 className="font-mono text-xs font-semibold text-primary">
                      VERIFIED OUTPUT
                    </h3>
                    <p className="font-mono text-[10px] text-accent">Zero disclosure</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
                  <Sparkles size={11} />
                  GRANTED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded-lg bg-card p-2.5 border border-border-subtle">
                  <p className="text-[10px] uppercase text-faint">App Sees</p>
                  <p className="mt-1.5 font-bold text-accent text-[11px]">valid_member</p>
                  <p className="text-[10px] text-faint">0 bytes identity</p>
                </div>

                <div className="rounded-lg bg-card p-2.5 border border-border-subtle">
                  <p className="text-[10px] uppercase text-faint">Ledger Sees</p>
                  <p className="mt-1.5 font-medium text-primary text-[11px]">0x8f3c...null</p>
                  <p className="text-[10px] text-faint">Preprod proof</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-accent-dim/60 p-2 font-mono text-[10px] text-accent text-center font-medium">
              Access confirmed. No credential or identity revealed.
            </div>
          </div>
        </div>

        {/* Bottom card footer metrics */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle bg-surface/60 px-5 py-3 font-mono text-[11px] text-faint sm:px-7">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-primary/70">Selective disclosure architecture</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Proof latency: ~320ms</span>
            <span className="font-medium text-accent">0 data leaked</span>
            <span className="hidden sm:inline-block">Client prover sandbox</span>
          </div>
        </div>
      </div>
    </div>
  );
}
