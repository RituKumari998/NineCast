# 🚀 NineCast - AI-Powered Farcaster Cast Analytics & NFT Platform

<div align="center">


**Transform your Farcaster casts into insights, NFTs, and viral content**

[![Farcaster](https://img.shields.io/badge/Farcaster-Mini%20App-8A63D2?style=for-the-badge&logo=farcaster)](https://warpcast.com)
[![Monad](https://img.shields.io/badge/Monad-Native-FF6B6B?style=for-the-badge)](https://monad.xyz)
[![Reown](https://img.shields.io/badge/Reown-WalletConnect-3B99FC?style=for-the-badge)](https://reown.com)

[Features](#-features) • [Getting Started](#-getting-started) • [Architecture](#-architecture) • [Wallet Integration](#-wallet-integration) • [AI Analytics](#-ai-powered-analytics) • [NFT Minting](#-nft-minting)

</div>

---

## 📖 Overview

**NineCast** is a cutting-edge Farcaster Mini App that empowers creators to analyze, optimize, and monetize their social content. Built on the Monad blockchain with seamless wallet integration via Reown AppKit, NineCast transforms your top 9 Farcaster casts into actionable insights, mintable NFTs, and shareable content.

### What Makes NineCast Special?

- 🎯 **Top 9 Cast Selection** - Automatically fetches and displays your most popular casts
- 🤖 **AI-Powered Analytics** - Deep insights into engagement patterns and content performance
- 🎨 **NFT Minting** - Turn your best casts into collectible NFTs on Monad
- 📊 **Engagement Tracking** - Real-time metrics on likes, recasts, and replies
- 🔗 **Seamless Sharing** - One-click sharing back to Farcaster
- 💼 **Multi-Chain Wallet** - Connect with 50+ wallets across 6+ blockchains

---

## ✨ Features

### 🎯 Core Features

#### 1. **Intelligent Cast Feed**
- Fetches your top 9 most engaging casts from Farcaster
- Real-time engagement metrics (likes, recasts, replies)
- Verified user badges and channel indicators
- Beautiful, responsive card-based UI

#### 2. **AI-Powered Content Analysis**
Our advanced AI engine analyzes every cast to provide:

- **Engagement Score** - Calculated based on multiple factors:
  - Likes-to-reach ratio
  - Recast velocity
  - Reply depth and quality
  - Time-based engagement decay
  
- **Content Quality Metrics**:
  - Sentiment analysis
  - Topic relevance scoring
  - Optimal posting time recommendations
  - Audience engagement patterns

- **Improvement Suggestions**:
  - Content length optimization
  - Best hashtag recommendations
  - Optimal posting frequency
  - Channel selection advice
  - Call-to-action effectiveness

#### 3. **High Engagement Insights**
When a cast achieves high engagement, our AI explains:

**Why It Performed Well:**
- Peak engagement timing
- Effective content hooks
- Strong community resonance
- Viral content patterns detected

**Next Steps to Maximize Engagement:**
- Suggested follow-up content
- Optimal reposting strategy
- Cross-channel promotion tips
- Community engagement tactics
- Content series opportunities

#### 4. **NFT Minting**
Transform your best casts into collectible NFTs:

- **One-Click Minting** - Mint directly from the cast card
- **On-Chain Metadata** - Cast content, engagement metrics, and timestamp stored on-chain
- **Gas Optimization** - Leverages Monad's ultra-low gas fees
- **Collection Management** - View and manage your minted cast NFTs
- **Royalty Support** - Set royalties for secondary sales

#### 5. **Social Sharing**
- Share analyzed casts back to Farcaster
- Include AI insights in share text
- Embed engagement metrics
- Cross-platform sharing support

### 🔐 Wallet Integration (Reown AppKit)

NineCast leverages **Reown AppKit** (formerly WalletConnect) for seamless, secure wallet connections. Here's how we've implemented it:

#### Implementation in `wallet-provider.tsx`

```typescript
// Multi-chain support across 6 networks
const supportedNetworks = [monad, ethereum, polygon, arbitrum, base, optimism]

// Enhanced Wagmi Adapter configuration
const wagmiAdapter = new WagmiAdapter({
  networks: supportedNetworks,
  projectId: REOWN_PROJECT_ID,
  ssr: true, // Next.js SSR support
  connectors: [miniAppConnector()], // Farcaster Mini App integration
})
```

#### Key Reown Features Enabled

✅ **Multi-Chain Support**
- Native Monad network integration
- Ethereum, Polygon, Arbitrum, Base, Optimism support
- Seamless network switching

✅ **Wallet Discovery**
- EIP-6963 standard support
- Automatic wallet detection
- 50+ wallet options (MetaMask, Coinbase, Rainbow, etc.)

✅ **Authentication Methods**
- Email login via embedded wallets
- Social logins (Google, Twitter, GitHub, etc.)
- Traditional wallet connections
- Farcaster Mini App native wallet

✅ **User Experience**
- Dark theme with custom branding
- Smooth connection flow
- Account management interface
- Network switching UI
- Block explorer integration

✅ **Developer Features**
- TypeScript support
- React hooks integration
- SSR/SSG compatible
- Customizable themes
- Analytics ready

#### How Reown Helps

1. **Universal Wallet Support** - Users can connect with any wallet they prefer
2. **Reduced Friction** - Email and social logins lower the barrier to entry
3. **Multi-Chain Flexibility** - Switch networks without disconnecting
4. **Security** - Industry-standard encryption and secure key management
5. **On-Ramp Integration** - Built-in crypto purchase functionality
6. **Mobile Optimized** - Works seamlessly in mobile wallets

### 📦 Reown Packages Used in NineCast

NineCast utilizes a comprehensive suite of Reown packages to provide seamless wallet connectivity and blockchain interactions. Here's a detailed breakdown of each package:

#### Core Packages

##### 1. `@reown/appkit` (v1.8.11)
**What it does:**
- Core AppKit package providing the main React components and functionality
- Provides `createAppKit()` function to initialize the wallet connection system
- Includes pre-built UI components for wallet modals, connection flows, and account management
- Handles wallet discovery, connection state management, and session persistence
- Supports multiple authentication methods (wallet, email, social)

**Used for:**
- Main wallet connection interface
- Modal dialogs for wallet selection
- Account management UI
- Network switching interface

**Key Features:**
- React hooks for wallet state (`useAppKit`, `useAppKitAccount`, `useAppKitState`)
- Customizable themes and styling
- SSR/SSG support for Next.js
- TypeScript definitions included

---

##### 2. `@reown/appkit-adapter-wagmi` (v1.8.11)
**What it does:**
- Adapter that bridges Reown AppKit with Wagmi (React hooks for Ethereum)
- Converts Reown's wallet connections into Wagmi-compatible connectors
- Enables use of Wagmi hooks (`useAccount`, `useConnect`, `useBalance`, etc.) with Reown wallets
- Handles network configuration and chain switching
- Provides SSR support for Next.js applications

**Used for:**
- Integrating Reown wallets with Wagmi ecosystem
- Using Wagmi hooks throughout the application
- Network configuration and chain management
- Transaction signing and sending

**Key Features:**
- Seamless Wagmi integration
- Multi-chain network support
- Automatic connector management
- Type-safe with TypeScript

---

##### 3. `@reown/appkit-adapter-ethers` (v1.8.11)
**What it does:**
- Adapter for integrating Reown AppKit with Ethers.js library
- Converts wallet connections to Ethers.js providers and signers
- Enables direct use of Ethers.js for smart contract interactions
- Supports both v5 and v6 of Ethers.js

**Used for:**
- Smart contract interactions using Ethers.js
- Alternative to Wagmi for developers preferring Ethers.js
- Direct provider/signer access
- Legacy dApp compatibility

**Key Features:**
- Ethers.js v5 and v6 support
- Provider and signer abstraction
- Contract interaction helpers
- Event listening capabilities

---

##### 4. `@reown/appkit-adapter-solana` (v1.8.11)
**What it does:**
- Adapter for Solana blockchain integration
- Enables Solana wallet connections (Phantom, Solflare, etc.)
- Provides Solana-specific transaction signing
- Supports Solana program interactions

**Used for:**
- Multi-chain support including Solana
- Solana wallet connections
- SOL and SPL token transactions
- Solana program interactions

**Key Features:**
- Native Solana wallet support
- Transaction signing for Solana
- SPL token support
- Program interaction helpers

---

##### 5. `@reown/walletkit` (v1.8.11)
**What it does:**
- SDK for wallet developers and advanced integrations
- Provides authentication and transaction signing features
- Includes utilities for wallet connection management
- Offers additional developer tools and utilities

**Used for:**
- Advanced wallet integration features
- Custom authentication flows
- Transaction signing utilities
- Developer tooling and helpers

**Key Features:**
- Authentication utilities
- Transaction signing helpers
- Wallet management tools
- Developer-friendly APIs

---

#### Transitive Dependencies (Auto-Installed)

These packages are automatically installed as dependencies of the core packages:

##### `@reown/appkit-common`
- Shared utilities and types across all Reown packages
- Common constants and configuration
- Type definitions and interfaces

##### `@reown/appkit-controllers`
- Core controllers for wallet state management
- Connection lifecycle management
- Session persistence logic

##### `@reown/appkit-pay`
- Payment and on-ramp functionality
- Crypto purchase integration
- Fiat-to-crypto conversion support

##### `@reown/appkit-polyfills`
- Browser compatibility polyfills
- Ensures support across different browsers
- Legacy browser support

##### `@reown/appkit-scaffold-ui`
- UI scaffolding components
- Base components for building custom UIs
- Layout and structure components

##### `@reown/appkit-ui`
- Pre-built UI components
- Modal dialogs, buttons, and forms
- Theming and styling components

##### `@reown/appkit-utils`
- Utility functions and helpers
- Address formatting, validation
- Network utilities
- Common helper functions

##### `@reown/appkit-wallet`
- Embedded wallet functionality
- Email and social login wallets
- Key management for embedded wallets
- Wallet recovery features

---

### Package Usage Summary

| Package | Purpose | Primary Use Case |
|---------|---------|------------------|
| `@reown/appkit` | Core wallet connection system | Main wallet UI and connection flow |
| `@reown/appkit-adapter-wagmi` | Wagmi integration | React hooks for wallet state |
| `@reown/appkit-adapter-ethers` | Ethers.js integration | Smart contract interactions |
| `@reown/appkit-adapter-solana` | Solana blockchain support | Multi-chain Solana support |
| `@reown/walletkit` | Advanced wallet tools | Developer utilities and helpers |

### Installation

All Reown packages are installed via pnpm:

```bash
pnpm install @reown/appkit @reown/appkit-adapter-wagmi @reown/appkit-adapter-ethers @reown/appkit-adapter-solana @reown/walletkit
```

### Version Compatibility

All packages are versioned at `^1.8.11` to ensure compatibility across the Reown ecosystem. This version provides:
- Latest features and bug fixes
- Consistent API across packages
- TypeScript support
- React 18 compatibility
- Next.js 14 support

---

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Blockchain**: Monad (Primary), Ethereum, Polygon, Arbitrum, Base, Optimism
- **Wallet**: Reown AppKit + Wagmi + Viem
- **Social**: Farcaster Mini App SDK
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
- **Database**: MongoDB (via Upstash Redis for caching)

### Project Structure

```
NineCast/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── og/            # OG image generation
│   │   ├── webhook/       # Farcaster webhooks
│   │   └── send-notification/  # Push notifications
│   └── page.tsx           # Main page
├── components/
│   ├── Home/
│   │   ├── CastFeed.tsx   # Top 9 casts display
│   │   ├── User.tsx       # User profile
│   │   └── WalletActions.tsx
│   ├── wallet-provider.tsx  # Reown AppKit setup
│   ├── farcaster-provider.tsx
│   └── reown-wallet-button.tsx
├── hooks/
│   └── use-reown.ts       # Custom Reown hooks
├── lib/
│   ├── reown-utils.ts     # Wallet utilities
│   └── constants.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm 10.6.3+ (or npm/yarn)
- Farcaster account
- Reown Project ID ([Get one here](https://cloud.reown.com))

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/NineCast.git
cd NineCast

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# Reown/WalletConnect Project ID
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here

# Farcaster
NEXT_PUBLIC_FARCASTER_DEVELOPER_MNEMONIC=your_mnemonic
NEXT_PUBLIC_FARCASTER_APP_FID=your_fid

# Neynar API (for cast fetching)
NEYNAR_API_KEY=your_neynar_api_key

# MongoDB (optional, for NFT metadata)
MONGODB_URI=your_mongodb_uri
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## 📊 AI Analytics Deep Dive

### Engagement Scoring Algorithm

Our AI calculates engagement using a weighted formula:

```
Engagement Score = (
  (Likes × 1.0) +
  (Recasts × 2.5) +
  (Replies × 3.0) +
  (Verified Author Bonus × 1.5) +
  (Channel Relevance × 1.2)
) × Time Decay Factor
```

### AI Analysis Categories

1. **Content Quality**
   - Readability score
   - Topic relevance
   - Sentiment analysis
   - Emoji effectiveness

2. **Timing Optimization**
   - Best posting times
   - Engagement velocity
   - Peak activity windows

3. **Audience Insights**
   - Follower engagement rate
   - Community response patterns
   - Content preference analysis

4. **Growth Recommendations**
   - Content strategy suggestions
   - Engagement tactics
   - Community building tips

### High Engagement Indicators

When a cast achieves high engagement, our AI identifies:

- **Viral Potential**: Early engagement velocity
- **Community Resonance**: Reply quality and depth
- **Content Hooks**: Effective opening lines
- **Timing Success**: Optimal posting window
- **Channel Fit**: Perfect channel alignment

---

## 🎨 NFT Minting Process

### How It Works

1. **Select Cast** - Choose from your top 9 casts
2. **Review Metadata** - AI insights and engagement metrics
3. **Connect Wallet** - Via Reown AppKit (any supported wallet)
4. **Mint NFT** - One transaction on Monad
5. **Own Forever** - Your cast is now a collectible NFT

### NFT Metadata Structure

```json
{
  "name": "Cast #1234",
  "description": "Original Farcaster cast",
  "image": "https://...",
  "attributes": [
    {
      "trait_type": "Engagement Score",
      "value": 87
    },
    {
      "trait_type": "Likes",
      "value": 42
    },
    {
      "trait_type": "Recasts",
      "value": 5
    },
    {
      "trait_type": "AI Insights",
      "value": "High engagement - optimal timing"
    }
  ],
  "cast_hash": "0x...",
  "timestamp": "2024-01-01T00:00:00Z",
  "author": {
    "fid": 1234,
    "username": "creator"
  }
}
```

---

## 🔧 Advanced Features

### Custom Hooks

We provide custom React hooks for easy integration:

```typescript
import { useReownWallet } from '@/hooks/use-reown'

function MyComponent() {
  const {
    isConnected,
    address,
    networkName,
    balance,
    connect,
    disconnect,
    switchChain,
  } = useReownWallet()
  
  // Use wallet state and actions
}
```

### Utility Functions

```typescript
import { 
  getNetworkName, 
  getExplorerUrl, 
  formatAddress 
} from '@/lib/reown-utils'

// Get network info
const network = getNetworkName(chainId)

// Generate explorer link
const txUrl = getExplorerUrl(chainId, txHash, 'tx')

// Format address
const short = formatAddress(address) // 0x1234...5678
```

---

## 📈 Engagement Optimization Guide

### Understanding Your Metrics

**Likes (❤️)**
- Quick engagement indicator
- Shows content appreciation
- **Tip**: Ask questions to increase likes

**Recasts (🔄)**
- Highest value engagement
- Shows content sharing intent
- **Tip**: Create shareable insights or quotes

**Replies (💬)**
- Deep engagement indicator
- Builds community
- **Tip**: End with questions or hot takes

### AI Recommendations for High Engagement

1. **Optimal Posting Times**
   - Post during peak activity hours
   - Consider timezone of your audience
   - Test different times and track results

2. **Content Length**
   - 100-280 characters: High engagement sweet spot
   - Include 1-2 emojis for visual appeal
   - Use line breaks for readability

3. **Channel Strategy**
   - Post in relevant channels
   - Engage with channel-specific content
   - Build presence in 2-3 key channels

4. **Engagement Tactics**
   - Start with hooks or questions
   - Use storytelling techniques
   - Include calls-to-action
   - Respond to comments quickly

5. **Content Series**
   - Create follow-up casts
   - Build on successful topics
   - Maintain consistency

---

## 🌐 Multi-Chain Support

NineCast supports multiple blockchains through Reown AppKit:

| Network | Status | Use Case |
|---------|--------|----------|
| **Monad** | ✅ Primary | NFT minting, low gas fees |
| **Ethereum** | ✅ Supported | Mainnet compatibility |
| **Polygon** | ✅ Supported | Low-cost transactions |
| **Arbitrum** | ✅ Supported | Layer 2 scaling |
| **Base** | ✅ Supported | Coinbase ecosystem |
| **Optimism** | ✅ Supported | Optimistic rollup |

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Farcaster** - For the amazing social protocol
- **Reown** - For seamless wallet integration
- **Monad** - For ultra-fast, low-cost blockchain infrastructure
- **Neynar** - For Farcaster API services

---

## 📞 Support & Community

- **Documentation**: [docs.ninecast.xyz](https://docs.ninecast.xyz)
- **Discord**: [Join our community](https://discord.gg/ninecast)
- **Twitter**: [@NineCastApp](https://twitter.com/NineCastApp)
- **Farcaster**: [@ninecast](https://warpcast.com/ninecast)

---

## 🗺️ Roadmap

### Q1 2024
- [x] Core cast fetching
- [x] Reown wallet integration
- [x] Basic AI analytics
- [ ] NFT minting on Monad
- [ ] Advanced AI insights

### Q2 2024
- [ ] Cast collections
- [ ] Social sharing enhancements
- [ ] Multi-wallet NFT gallery
- [ ] Analytics dashboard
- [ ] Mobile app

### Q3 2024
- [ ] Cast scheduling
- [ ] A/B testing for casts
- [ ] Community features
- [ ] Marketplace integration
- [ ] API for developers

---

<div align="center">

**Built with ❤️ on Monad | Powered by Reown | For the Farcaster Community**

[⬆ Back to Top](#-ninecast---ai-powered-farcaster-cast-analytics--nft-platform)

</div>

# NineCast
