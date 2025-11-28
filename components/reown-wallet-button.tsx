/**
 * Reown Wallet Connection Button Component
 * 
 * A reusable component that utilizes Reown AppKit features
 * for wallet connection with enhanced UI and functionality.
 */

'use client'

import React from 'react'
import { useReownWallet } from '@/hooks/use-reown'
import { formatAddress } from '@/lib/reown-utils'

interface ReownWalletButtonProps {
  className?: string
  showBalance?: boolean
  showNetwork?: boolean
  variant?: 'default' | 'minimal' | 'full'
}

export function ReownWalletButton({
  className = '',
  showBalance = false,
  showNetwork = false,
  variant = 'default',
}: ReownWalletButtonProps) {
  const {
    isConnected,
    isConnecting,
    address,
    formattedAddress,
    networkName,
    balance,
    connect,
    disconnect,
  } = useReownWallet()

  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors'
  const defaultClasses = 'bg-white text-black hover:bg-gray-100'
  const minimalClasses = 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
  const fullClasses = 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'

  const getButtonClasses = () => {
    switch (variant) {
      case 'minimal':
        return `${baseClasses} ${minimalClasses}`
      case 'full':
        return `${baseClasses} ${fullClasses}`
      default:
        return `${baseClasses} ${defaultClasses}`
    }
  }

  if (isConnected && address) {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex items-center gap-2">
          <button
            onClick={() => disconnect()}
            className={getButtonClasses()}
            type="button"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-wallet" aria-hidden="true"></i>
              {formattedAddress}
            </span>
          </button>
        </div>
        
        {showNetwork && networkName && (
          <div className="text-sm text-gray-400">
            <i className="fas fa-network-wired mr-1" aria-hidden="true"></i>
            {networkName}
          </div>
        )}
        
        {showBalance && balance && (
          <div className="text-sm text-gray-400">
            <i className="fas fa-coins mr-1" aria-hidden="true"></i>
            {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
          </div>
        )}
      </div>
    )
  }

  return (
    <button
      onClick={() => connect()}
      disabled={isConnecting}
      className={`${getButtonClasses()} ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      type="button"
    >
      {isConnecting ? (
        <span className="flex items-center gap-2">
          <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
          Connecting...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <i className="fas fa-plug" aria-hidden="true"></i>
          Connect Wallet
        </span>
      )}
    </button>
  )
}

/**
 * Reown Network Switcher Component
 */
export function ReownNetworkSwitcher({ className = '' }: { className?: string }) {
  const { currentNetwork, supportedNetworks, switchChain, isSwitchingChain } = useReownWallet()
  
  // Use supportedNetworks from the hook instead of supportedChains
  const supportedChains = supportedNetworks || []
  const isSwitching = isSwitchingChain || false

  if (!currentNetwork) return null

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium">
        <i className="fas fa-network-wired mr-1" aria-hidden="true"></i>
        Network
      </label>
      <select
        value={currentNetwork.id}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => switchChain(Number(e.target.value))}
        disabled={isSwitching}
        className="px-3 py-2 bg-white text-black rounded-md border border-gray-300 disabled:opacity-50"
      >
        {supportedChains.map((chain: { id: number; name: string }) => (
          <option key={chain.id} value={chain.id}>
            {chain.name}
          </option>
        ))}
      </select>
    </div>
  )
}

