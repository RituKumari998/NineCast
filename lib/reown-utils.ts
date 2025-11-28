/**
 * Reown AppKit Utility Functions
 * 
 * This file provides utility functions and helpers that utilize
 * various Reown packages for enhanced wallet functionality.
 */

import { monad, ethereum, polygon, arbitrum, base, optimism } from '@reown/appkit/networks'
import { SUPPORTED_NETWORKS } from '@/components/wallet-provider'

/**
 * Get network information by chain ID
 */
export function getNetworkByChainId(chainId: number) {
  return SUPPORTED_NETWORKS.find((network) => network.id === chainId)
}

/**
 * Get network name by chain ID
 */
export function getNetworkName(chainId: number): string {
  const network = getNetworkByChainId(chainId)
  return network?.name || `Chain ${chainId}`
}

/**
 * Get network explorer URL by chain ID
 */
export function getExplorerUrl(chainId: number, hash: string, type: 'tx' | 'address' = 'tx'): string | null {
  const network = getNetworkByChainId(chainId)
  if (!network?.blockExplorers?.default) return null
  
  const baseUrl = network.blockExplorers.default.url
  return `${baseUrl}/${type}/${hash}`
}

/**
 * Format address with ellipsis
 */
export function formatAddress(address: string, startLength = 6, endLength = 4): string {
  if (!address) return ''
  if (address.length <= startLength + endLength) return address
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`
}

/**
 * Check if a chain ID is supported
 */
export function isSupportedNetwork(chainId: number): boolean {
  return SUPPORTED_NETWORKS.some((network) => network.id === chainId)
}

/**
 * Get all supported network IDs
 */
export function getSupportedChainIds(): number[] {
  return SUPPORTED_NETWORKS.map((network) => network.id)
}

/**
 * Network configuration map for easy access
 */
export const NETWORK_CONFIG = {
  monad: monad,
  ethereum: ethereum,
  polygon: polygon,
  arbitrum: arbitrum,
  base: base,
  optimism: optimism,
} as const

/**
 * Get network icon URL (if available)
 */
export function getNetworkIcon(chainId: number): string | null {
  const network = getNetworkByChainId(chainId)
  return network?.iconUrl || null
}

/**
 * Validate if an address is a valid Ethereum address format
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

