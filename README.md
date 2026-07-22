<div align="center">

# 🔐 Privora

### **Privacy-First Zero-Knowledge Access Control on Midnight Network**

_Prove you're authorized — without revealing who you are._

[![Midnight Network](https://img.shields.io/badge/Midnight-Preview-blueviolet?style=for-the-badge)]()
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)]()
[![Compact](https://img.shields.io/badge/Compact-Zero--Knowledge-success?style=for-the-badge)]()
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=for-the-badge&logo=tailwindcss)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]()

**Built for Midnight Moonshots Level 3 🚀**

[🌐 Live Demo](#) •
[🎥 Demo Video](#demo-video) •
[📖 Documentation](#documentation) •
[🏗 Architecture](#architecture) •
[🚀 Getting Started](#getting-started)

---

### **Your Identity. Your Privacy. Your Control.**

Privora is a privacy-preserving access gateway powered by **Zero-Knowledge Proofs** on the **Midnight Network**. It enables users to prove authorization without exposing their identity, wallet history, or confidential credentials.

</div>

---

# 📑 Table of Contents

- Overview
- Why Privora?
- Key Features
- Problem Statement
- Solution
- How It Works
- System Architecture
- Tech Stack
- Project Structure
- Smart Contract
- Zero-Knowledge Flow
- Local Development
- Testing
- Deployment
- Explorer Verification
- Demo Guide
- Security Model
- Future Roadmap
- License

---

# 🌍 Overview

Traditional Web3 applications often require users to reveal unnecessary information simply to access a resource.

Examples include:

- Wallet-based allowlists
- Token-gated communities
- Private events
- Beta testing platforms
- DAO memberships

Although these systems verify access, they also expose:

- Wallet identity
- Transaction history
- NFT holdings
- Token balances
- On-chain activity

**Privora changes that.**

Instead of proving **who you are**, Privora lets you prove **that you're authorized**.

Using **Midnight's Zero-Knowledge capabilities**, users generate a cryptographic proof locally and submit only the proof.

The blockchain verifies:

✅ Authorized

without ever learning:

❌ Identity

❌ Secret

❌ Credential

❌ Wallet history

---

# ❓ Why Privora?

Privacy should be the default.

Modern decentralized applications shouldn't require users to reveal personal information just to access content.

Privora provides:

- 🔐 Zero-Knowledge authentication
- 🕵️ Identity privacy
- 🚫 Replay attack protection
- ⚡ Instant verification
- 🌐 Fully decentralized verification
- 🧩 Simple integration with Midnight

---

# ✨ Key Features

## 🔒 Zero-Knowledge Authentication

Authenticate without revealing the original credential.

---

## 🌳 Merkle Tree Allowlist

Authorized users are represented as hashed leaves inside a Merkle Tree.

Only hashes are stored.

Never plaintext secrets.

---

## ♻️ Nullifier Protection

Each successful proof generates a unique nullifier.

Used nullifiers are permanently rejected, preventing replay attacks.

---

## 👤 Admin Console

Operators can:

- Deploy new access gates
- Enroll credential hashes
- Generate member credentials
- Share access links
- Restore published gates

---

## 🔑 Secure Member Access

Users simply:

1. Connect Wallet
2. Paste Secret
3. Generate Proof
4. Unlock Access

No sensitive information ever leaves the browser.

---

## 💻 Modern User Experience

- Midnight Wallet integration
- Real-time transaction states
- Explorer links
- Session-based vault unlock
- Responsive UI
- Dark modern interface

---

# 🚨 Problem Statement

Current token-gated platforms require users to expose sensitive information.

Examples include:

- NFT ownership
- Wallet balances
- DAO participation
- Historical transactions

This creates unnecessary privacy risks.

---

# 💡 Solution

Privora introduces a Zero-Knowledge access gateway.

Instead of exposing credentials:

```
Secret
      ↓
Generate ZK Proof
      ↓
Blockchain Verification
      ↓
Access Granted
```

Only proof validity reaches the blockchain.

Secrets remain private forever.

---

# ⚙️ How It Works

```text
                 Admin

          Deploy Access Gate
                  │
                  ▼
        Create Credential Secret
                  │
                  ▼
      Hash Secret → Merkle Tree
                  │
──────────────────────────────────────────

                Member

        Receive Secret Securely
                  │
                  ▼
          Connect Wallet
                  │
                  ▼
        Generate ZK Proof
                  │
                  ▼
      Midnight Smart Contract
                  │
                  ▼
      Verify Merkle Membership
                  │
                  ▼
      Check Nullifier Replay
                  │
                  ▼
         Unlock Session Vault
```

---

# 🏗 Architecture

```text
                  ┌────────────────────┐
                  │     Admin Panel    │
                  └─────────┬──────────┘
                            │
                            ▼
               Midnight Compact Contract
                            │
             ┌──────────────┴─────────────┐
             │                            │
             ▼                            ▼
      Merkle Tree                 Nullifier Set
             │                            │
             └──────────────┬─────────────┘
                            ▼
                     ZK Verification
                            │
                            ▼
                    Session Unlock
                            │
                            ▼
                     Protected Vault
```

---

# 🛠 Tech Stack

| Layer           | Technology               |
| --------------- | ------------------------ |
| Smart Contract  | Midnight Compact         |
| Blockchain      | Midnight Preview Network |
| Frontend        | Next.js App Router       |
| Language        | TypeScript               |
| Styling         | Tailwind CSS             |
| Wallet          | Lace Wallet / 1AM Wallet |
| Proof Engine    | Midnight ZK Runtime      |
| Testing         | Jest                     |
| Package Manager | npm Workspaces           |

---

# 📂 Project Structure

```text
privora/
│
├── app/
│   ├── src/
│   ├── components/
│   ├── lib/
│   └── pages/
│
├── contracts/
│   ├── src/
│   │     vault_pass.compact
│   ├── tests/
│   └── compiler/
│
├── public/
│
├── package.json
└── README.md
```

---

# 🔐 Smart Contract

The Compact smart contract manages:

- Merkle Tree
- Credential Hashes
- Nullifiers
- Access Verification

Core circuits include:

### `add_valid_credential`

Adds a hashed credential into the Merkle Tree.

Only callable by administrators.

---

### `verify_access`

Verifies:

- Merkle proof
- Credential authenticity
- Nullifier uniqueness

Then grants access.

---

# 🔄 Zero-Knowledge Verification Flow

```text
Secret
   │
   ▼
Hash Secret
   │
   ▼
Generate Witness
   │
   ▼
Create ZK Proof
   │
   ▼
Submit Proof
   │
   ▼
Smart Contract
   │
   ▼
Verify Proof
   │
   ▼
Insert Nullifier
   │
   ▼
Grant Access
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Rimanshu-Singh/Privora
```

Rename folder if desired:

```bash
cd vaultpass
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## Requirements

Before running:

- Midnight Preview Network
- Lace Wallet or 1AM Wallet
- Preview DUST balance
- Node.js 20+

---

# 🧪 Testing

Run tests

```bash
npm test
```

The Jest suite validates:

- Admin permissions
- Allowlist behavior
- Nullifier replay prevention
- Merkle verification logic

Testing uses mocked in-memory structures rather than generating production ZK proofs.

---

# 🚀 Deployment

## Frontend

Deploy directly to Vercel.

```bash
npm run build
```

Import the repository into Vercel.

No production environment variables are required.

---

## Smart Contract

Contracts are deployed through the built-in Admin Dashboard.

Each deployment creates a unique contract address on Midnight Preview.

---

# 🔎 Explorer Verification

| Resource    | Link                                                  |
| ----------- | ----------------------------------------------------- |
| Explorer    | https://preview.midnightexplorer.com                  |
| Transaction | https://preview.midnightexplorer.com/transactions/... |
| Contract    | https://preview.midnightexplorer.com/contracts/...    |

The application automatically provides explorer links after deployment and verification.

---

# 🎥 Demo Guide

## Admin

1. Open `/admin`
2. Connect Wallet
3. Deploy Access Gate
4. Generate Credential
5. Enroll Credential Hash
6. Share Member Link

---

## Member

1. Open shared Gate URL
2. Connect Wallet
3. Paste Secret
4. Generate Proof
5. Unlock Protected Vault

---

# 🛡 Security Model

Privora never stores:

- Raw credentials
- Identity information
- Wallet history
- Private keys

Only the following exist on-chain:

- Credential Hashes
- Merkle Root
- Nullifiers

Replay attacks are prevented using cryptographic nullifiers.

Every proof is single-use and cannot be replayed.

---

# 🔮 Future Roadmap

- [ ] Multi-gate management
- [ ] Expiring credentials
- [ ] Anonymous DAO voting
- [ ] Enterprise identity verification
- [ ] API access gateway
- [ ] Multi-admin governance
- [ ] zkBadge support
- [ ] NFT private membership
- [ ] OAuth integration
- [ ] Cross-chain proof verification

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes

```bash
git commit -m "Add amazing feature"
```

4. Push branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

## 🔐 Privacy isn't about hiding.

### It's about giving people the power to choose what they reveal.

### Built with ❤️ on Midnight Network

**Privora • Zero-Knowledge • Privacy First**

</div>
