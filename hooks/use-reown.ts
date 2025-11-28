/**
 * Custom Reown AppKit Hooks
 * 
 * This file provides custom React hooks that wrap and enhance
 * Reown AppKit functionality with additional features.
 */

'use client'

import { useAccount, useConnect, useDisconnect, useSwitchChain, useBalance, useChainId } from 'wagmi'
import { useMemo } from 'react'
import { SUPPORTED_NETWORKS, REOWN_PROJECT_ID } from '@/components/wallet-provider'
import { getNetworkName, getExplorerUrl, formatAddress, isSupportedNetwork } from '@/lib/reown-utils'

/**
 * Enhanced hook for wallet connection with Reown AppKit features
 */
export function useReownWallet() {
  const { isConnected, address, chainId, connector, isConnecting, isDisconnected } = useAccount()
  const { connect, connectors, error: connectError, isPending: isConnectingPending } = useConnect()
  const { disconnect } = useDisconnect()
  const { switchChain, chains, isPending: isSwitchingChain } = useSwitchChain()
  const { data: balance } = useBalance({ address })
  const currentChainId = useChainId()

  // Get current network info
  const currentNetwork = useMemo(() => {
    if (!chainId) return null
    return SUPPORTED_NETWORKS.find((network) => network.id === chainId)
  }, [chainId])

  // Check if current network is supported
  const isNetworkSupported = useMemo(() => {
    if (!chainId) return false
    return isSupportedNetwork(chainId)
  }, [chainId])

  // Get formatted address
  const formattedAddress = useMemo(() => {
    if (!address) return ''
    return formatAddress(address)
  }, [address])

  // Get network name
  const networkName = useMemo(() => {
    if (!chainId) return ''
    return getNetworkName(chainId)
  }, [chainId])

  // Get explorer URL helper
  const getExplorerLink = (hash: string, type: 'tx' | 'address' = 'tx') => {
    if (!chainId) return null
    return getExplorerUrl(chainId, hash, type)
  }

  // Connect to a specific connector
  const connectWallet = (connectorId?: string) => {
    const targetConnector = connectorId
      ? connectors.find((c: { id: string }) => c.id === connectorId)
      : connectors[0]
    
    if (targetConnector) {
      connect({ connector: targetConnector })
    }
  }

  // Switch to a specific network
  const switchToNetwork = (targetChainId: number) => {
    if (isSupportedNetwork(targetChainId)) {
      switchChain({ chainId: targetChainId })
    }
  }

  return {
    // Connection state
    isConnected,
    isConnecting: isConnecting || isConnectingPending,
    isDisconnected,
    isSwitchingChain,
    
    // Account info
    address,
    formattedAddress,
    chainId: currentChainId,
    connector,
    balance,
    
    // Network info
    currentNetwork,
    networkName,
    isNetworkSupported,
    supportedNetworks: SUPPORTED_NETWORKS,
    availableChains: chains,
    
    // Actions
    connect: connectWallet,
    disconnect,
    switchChain: switchToNetwork,
    getExplorerLink,
    
    // Errors
    connectError,
    
    // Reown project ID (for additional integrations)
    projectId: REOWN_PROJECT_ID,
  }
}

/**
 * Hook to get wallet connection status and quick actions
 */
export function useReownConnection() {
  const { isConnected, address, chainId } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const canConnect = !isConnected && connectors.length > 0
  const canDisconnect = isConnected

  return {
    isConnected,
    address,
    chainId,
    canConnect,
    canDisconnect,
    connect,
    disconnect,
    availableConnectors: connectors,
  }
}

/**
 * Hook for network management with Reown
 */
export function useReownNetwork() {
  const { chainId } = useAccount()
  const { switchChain, chains, isPending } = useSwitchChain()

  const currentChain = useMemo(() => {
    if (!chainId) return null
    return chains.find((chain: { id: number }) => chain.id === chainId)
  }, [chainId, chains])

  const supportedChains = useMemo(() => {
    return SUPPORTED_NETWORKS.filter((network) =>
      chains.some((chain: { id: number }) => chain.id === network.id)
    )
  }, [chains])

  return {
    currentChain,
    currentChainId: chainId,
    supportedChains,
    allChains: chains,
    switchChain,
    isSwitching: isPending,
  }
}

