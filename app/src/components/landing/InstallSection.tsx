"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Package, Layers } from "lucide-react";

type PkgManager = "npm" | "pnpm" | "yarn";

export function InstallSection() {
  const [pkgManager, setPkgManager] = useState<PkgManager>("npm");
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

  const getInstallCmd = (pkg: string) => {
    switch (pkgManager) {
      case "pnpm":
        return `pnpm add ${pkg}`;
      case "yarn":
        return `yarn add ${pkg}`;
      default:
        return `npm install ${pkg}`;
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPkg(id);
      setTimeout(() => setCopiedPkg(null), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-8">
      {/* Package manager pill selector */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-border-subtle bg-surface p-1 text-xs">
          {(["npm", "pnpm", "yarn"] as PkgManager[]).map((mgr) => (
            <button
              key={mgr}
              type="button"
              onClick={() => setPkgManager(mgr)}
              className={`rounded-full px-4 py-1 font-mono font-medium transition-all ${
                pkgManager === mgr
                  ? "bg-card text-primary shadow-xs"
                  : "text-faint hover:text-primary"
              }`}
            >
              {mgr}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* CARD 1: privora CLI & Core */}
        <article className="paper-card flex flex-col justify-between p-6 sm:p-7 transition-shadow hover:shadow-md">
          <div>
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Terminal size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-primary">privora</h3>
                  <p className="font-mono text-[11px] text-faint">CLI / Core Package</p>
                </div>
              </div>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-faint">
                v0.1.0-preprod
              </span>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted">
              Compile Compact contracts, deploy gates to Midnight Preprod, and enroll cryptographic commitments directly.
            </p>

            {/* Install command box */}
            <div className="mt-4 flex items-center justify-between rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 font-mono text-xs text-primary">
              <code>{getInstallCmd("privora")}</code>
              <button
                type="button"
                onClick={() => copyToClipboard(getInstallCmd("privora"), "core")}
                className="text-faint hover:text-primary transition-colors p-1"
                aria-label="Copy install command"
              >
                {copiedPkg === "core" ? (
                  <Check size={14} className="text-accent" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-dark/95 p-3.5 font-mono text-[11px] leading-5 text-white/80">
            <div className="text-white/40">// Deploy a gate on Preprod</div>
            <div>
              <span className="text-accent-soft">$</span> privora gate:deploy --network preprod
            </div>
            <div className="mt-1 text-white/40">// Enroll a credential commitment</div>
            <div>
              <span className="text-accent-soft">$</span> privora enroll --hash 0x7b4a...
            </div>
          </div>
        </article>

        {/* CARD 2: privora-react */}
        <article className="paper-card flex flex-col justify-between p-6 sm:p-7 transition-shadow hover:shadow-md">
          <div>
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-dim text-accent">
                  <Package size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-primary">privora-react</h3>
                  <p className="font-mono text-[11px] text-accent">React Integration</p>
                </div>
              </div>
              <span className="rounded-full bg-accent-dim px-2.5 py-0.5 font-mono text-[10px] text-accent font-medium">
                React 19 Ready
              </span>
            </div>

            <p className="mt-4 text-xs leading-6 text-muted">
              Pre-built React hooks and UI primitives for Midnight dApp connector, wallet sessions, and client-side proof orchestration.
            </p>

            {/* Install command box */}
            <div className="mt-4 flex items-center justify-between rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 font-mono text-xs text-primary">
              <code>{getInstallCmd("privora-react")}</code>
              <button
                type="button"
                onClick={() => copyToClipboard(getInstallCmd("privora-react"), "react")}
                className="text-faint hover:text-primary transition-colors p-1"
                aria-label="Copy React install command"
              >
                {copiedPkg === "react" ? (
                  <Check size={14} className="text-accent" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-dark/95 p-3.5 font-mono text-[11px] leading-5 text-white/80">
            <div className="text-white/40">// Embed into your web application</div>
            <div>
              <span className="text-emerald-300">const</span> {"{ verify, isProving }"} = <span className="text-accent-soft">useGate</span>({"{"}
            </div>
            <div className="pl-4">contractId: <span className="text-white/60">&quot;0x...&quot;</span></div>
            <div>{"});"}</div>
          </div>
        </article>
      </div>
    </div>
  );
}
