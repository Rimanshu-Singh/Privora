"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Shield, Code2 } from "lucide-react";

type CodeTab = "flow" | "compact";

const TS_FLOW_CODE = `// 1. Operator connects to Midnight Preprod & deploys gate
const admin = await privora.connectWallet('preprod');
const gate = await admin.deployCredentialGate({ oneTimeProof: true });

// 2. Issuer generates secret off-chain & enrolls commitment
const credential = generateSecret();
await gate.enroll(hash(credential));

// 3. Member generates zero-knowledge proof locally
const member = await privora.connectWallet('preprod');
const isVerified = await member.verify(credential);

// 4. Consuming app confirms access; session unlocks locally
if (isVerified) {
  vault.unlockForSession();
}`;

const COMPACT_CODE = `// Midnight Compact Smart Contract (privora.compact)
export ledger valid_credentials: MerkleTree<16, Bytes<32>>;
export ledger used_nullifiers: Set<Bytes<32>>;

witness get_secret(): Bytes<32>;
witness get_merkle_path(leaf: Bytes<32>): MerkleTreePath<16, Bytes<32>>;

export circuit verify_access(): [] {
  const sk = get_secret();
  const leaf = persistentHash([pad(32, "vault:credential"), sk]);
  const path = get_merkle_path(leaf);

  // 1. Prove Merkle membership without revealing credential index
  assert(valid_credentials.checkRoot(disclose(merkleTreePathRoot(path))));

  // 2. Enforce replay resistance via derived nullifier
  const nullifier = persistentHash([pad(32, "vault:nullifier"), sk]);
  assert(!used_nullifiers.member(disclose(nullifier)));
  used_nullifiers.insert(disclose(nullifier));
}`;

export function TechnicalSection() {
  const [activeTab, setActiveTab] = useState<CodeTab>("flow");
  const [copied, setCopied] = useState(false);

  const activeCode = activeTab === "flow" ? TS_FLOW_CODE : COMPACT_CODE;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="terminal-card overflow-hidden border border-border-subtle bg-dark shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="traffic-dot bg-red-400/80" />
            <span className="traffic-dot bg-amber-400/80" />
            <span className="traffic-dot bg-accent" />
          </div>

          <div className="flex rounded-md bg-white/5 p-0.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("flow")}
              className={`flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors ${
                activeTab === "flow"
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <Code2 size={13} className="text-accent-soft" />
              <span>flow.ts</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("compact")}
              className={`flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors ${
                activeTab === "compact"
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <Shield size={13} className="text-accent" />
              <span>privora.compact</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[11px] text-white/40 sm:inline-block">
            {activeTab === "flow" ? "TypeScript · Midnight Runtime" : "Compact v0.22 · Midnight Circuit"}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label="Copy code snippet to clipboard"
          >
            {copied ? (
              <>
                <Check size={12} className="text-accent-soft" />
                <span className="text-accent-soft">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code viewport with line numbers */}
      <div className="overflow-x-auto p-4 sm:p-6 font-mono text-xs leading-6 text-white/85">
        <pre className="grid grid-cols-[auto_1fr] gap-x-4">
          <span className="select-none text-right font-mono text-white/25 space-y-0">
            {activeCode.split("\n").map((_, i) => (
              <span key={i} className="block text-[11px] leading-6">
                {(i + 1).toString().padStart(2, " ")}
              </span>
            ))}
          </span>

          <code className="block">
            {activeCode.split("\n").map((line, i) => {
              const isComment = line.trim().startsWith("//");
              const isKeyword =
                line.includes("const ") ||
                line.includes("export ") ||
                line.includes("witness ") ||
                line.includes("circuit ") ||
                line.includes("if ");

              return (
                <span
                  key={i}
                  className={`block leading-6 ${
                    isComment
                      ? "text-white/40 italic"
                      : isKeyword
                      ? "text-emerald-100"
                      : "text-white/85"
                  }`}
                >
                  {line.replace("verify_access", "") && line}
                </span>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Terminal footer status */}
      <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-4 py-2.5 font-mono text-[11px] text-white/45 sm:px-6">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-accent" />
          <span>Local execution · Witness never broadcast</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>Preprod compatible</span>
        </div>
      </div>
    </div>
  );
}
