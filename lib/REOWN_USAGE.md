# Reown AppKit Package Utilization Guide

This document outlines all the Reown packages and features being utilized in the NineCast application.

## Installed Reown Packages

### Core Packages
- **@reown/appkit** (v1.8.11) - Main AppKit package with React components and core functionality
- **@reown/appkit-adapter-wagmi** (v1.8.11) - Wagmi adapter for seamless integration with Wagmi hooks

### Transitive Dependencies (Automatically Installed)
- **@reown/appkit-common** - Common utilities and types
- **@reown/appkit-controllers** - Core controllers for wallet management
- **@reown/appkit-pay** - Payment and on-ramp functionality
- **@reown/appkit-polyfills** - Browser polyfills for compatibility
- **@reown/appkit-scaffold-ui** - UI scaffolding components
- **@reown/appkit-ui** - UI components and themes
- **@reown/appkit-utils** - Utility functions and helpers
- **@reown/appkit-wallet** - Embedded wallet functionality

## Features Enabled in wallet-provider.tsx

### Network Support
- **Monad** - Primary network
- **Ethereum** - Mainnet support
- **Polygon** - Layer 2 scaling
- **Arbitrum** - Layer 2 scaling
- **Base** - Coinbase Layer 2
- **Optimism** - Layer 2 scaling

### AppKit Configuration Features
- ✅ **Email Login** - Embedded wallet via email
- ✅ **Social Logins** - Social authentication (Google, Twitter, etc.)
- ✅ **On-Ramp** - Crypto purchase functionality
- ✅ **EIP-6963** - Modern wallet discovery standard
- ✅ **Coinbase Wallet** - Explicit Coinbase support
- ✅ **Network View** - Network switching interface
- ✅ **Account View** - Account management interface
- ✅ **Explorer Links** - Block explorer integration
- ✅ **All Wallets** - Show all available wallet options

### Theme Configuration
- Dark mode enabled
- Custom accent color (#3b99fc)
- Custom border radius (16px)
- System font family

## Utility Files Created

### `/lib/reown-utils.ts`
Utility functions for:
- Network lookup by chain ID
- Network name resolution
- Explorer URL generation
- Address formatting
- Network validation
- Network configuration access

### `/hooks/use-reown.ts`
Custom React hooks:
- **useReownWallet()** - Comprehensive wallet hook with connection, balance, network info
- **useReownConnection()** - Simple connection status and actions
- **useReownNetwork()** - Network management and switching

### `/components/reown-wallet-button.tsx`
Reusable UI components:
- **ReownWalletButton** - Connect/disconnect button with balance and network display
- **ReownNetworkSwitcher** - Network selection dropdown

## Usage Examples

### Using the Custom Hook
```typescript
import { useReownWallet } from '@/hooks/use-reown'

function MyComponent() {
  const {
    isConnected,
    address,
    formattedAddress,
    networkName,
    balance,
    connect,
    disconnect,
    switchChain,
  } = useReownWallet()
  
  // Use the wallet state and actions
}
```

### Using the Wallet Button Component
```typescript
import { ReownWalletButton } from '@/components/reown-wallet-button'

function MyPage() {
  return (
    <ReownWalletButton 
      showBalance={true}
      showNetwork={true}
      variant="full"
    />
  )
}
```

### Using Utility Functions
```typescript
import { getNetworkName, getExplorerUrl, formatAddress } from '@/lib/reown-utils'

const networkName = getNetworkName(chainId)
const explorerUrl = getExplorerUrl(chainId, txHash, 'tx')
const shortAddress = formatAddress(address)
```

## Additional Reown Packages Available (Not Currently Used)

If you want to expand further, consider:

1. **@reown/appkit-adapter-ethers** - For Ethers.js integration
2. **@reown/appkit-adapter-solana** - For Solana blockchain support
3. **@reown/appkit-adapter-bitcoin** - For Bitcoin support
4. **@reown/walletkit** - Additional wallet development tools

## Exports from wallet-provider.tsx

- `config` - Wagmi configuration
- `wagmiAdapter` - Wagmi adapter instance
- `appKitOptions` - AppKit configuration object
- `REOWN_PROJECT_ID` - Project ID constant
- `SUPPORTED_NETWORKS` - Array of supported networks
- Network exports: `monad`, `ethereum`, `polygon`, `arbitrum`, `base`, `optimism`
- Type exports: `AppKitOptions`

## Best Practices

1. Always use the custom hooks (`useReownWallet`) instead of direct Wagmi hooks for consistency
2. Use utility functions from `reown-utils.ts` for network operations
3. Leverage the ReownWalletButton component for consistent UI
4. Check network support before switching chains
5. Use the exported constants for network IDs and configuration

