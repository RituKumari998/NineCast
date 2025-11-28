'use client'

import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'

interface Cast {
  hash: string
  author: {
    username: string
    display_name: string
    pfp_url: string
    verifications: string[]
  }
  text: string
  timestamp: string
  reactions: {
    likes_count: number
    recasts_count: number
  }
  replies: {
    count: number
  }
  channel?: {
    name: string
  }
}

interface CastFeedResponse {
  casts: Cast[]
}

async function fetchPopularCasts(): Promise<CastFeedResponse> {
  // For demo purposes, using mock data since we don't have a real API key
  // In production, replace this with the actual API call:
  
  const url = 'https://api.neynar.com/v2/farcaster/feed/user/popular/?fid=249702';
  const options = {
    method: 'GET',
    headers: { 'x-api-key': 'YOUR_NEYNAR_API_KEY' },
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Failed to fetch casts')
  }
  return response.json()
  
//   const mockCasts: Cast[] = [
//     {
//       hash: '0x1234567890abcdef',
//       author: {
//         username: 'commstark',
//         display_name: 'Comm Stark',
//         pfp_url: 'https://i.ibb.co/NdyfX1qx/Monad-Logo-Black-Logo-Mark.png',
//         verifications: ['0x1234567890abcdef'],
//       },
//       text: 'Hot take: Coffee tastes better before you brush your teeth',
//       timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
//       reactions: {
//         likes_count: 25,
//         recasts_count: 1,
//       },
//       replies: {
//         count: 8,
//       },
//       channel: {
//         name: 'hot-takes',
//       },
//     },
//     {
//       hash: '0xabcdef1234567890',
//       author: {
//         username: 'crypto_whale',
//         display_name: 'Crypto Whale',
//         pfp_url: 'https://i.ibb.co/NdyfX1qx/Monad-Logo-Black-Logo-Mark.png',
//         verifications: [],
//       },
//       text: 'Just discovered this amazing new DeFi protocol on Monad. The gas fees are incredibly low! 🚀',
//       timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
//       reactions: {
//         likes_count: 42,
//         recasts_count: 5,
//       },
//       replies: {
//         count: 12,
//       },
//     },
//     {
//       hash: '0x7890abcdef123456',
//       author: {
//         username: 'web3_dev',
//         display_name: 'Web3 Developer',
//         pfp_url: 'https://i.ibb.co/NdyfX1qx/Monad-Logo-Black-Logo-Mark.png',
//         verifications: ['0xabcdef1234567890'],
//       },
//       text: 'Building on Monad has been a game-changer. The parallel execution is mind-blowing! 💻⚡',
//       timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
//       reactions: {
//         likes_count: 18,
//         recasts_count: 3,
//       },
//       replies: {
//         count: 6,
//       },
//       channel: {
//         name: 'monad-dev',
//       },
//     },
//     {
//       hash: '0x4567890abcdef123',
//       author: {
//         username: 'farcaster_fan',
//         display_name: 'Farcaster Fan',
//         pfp_url: 'https://i.ibb.co/NdyfX1qx/Monad-Logo-Black-Logo-Mark.png',
//         verifications: [],
//       },
//       text: 'The Farcaster ecosystem is growing so fast! Love seeing all these new mini apps being built. 🎉',
//       timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
//       reactions: {
//         likes_count: 31,
//         recasts_count: 2,
//       },
//       replies: {
//         count: 9,
//       },
//     },
//     {
//       hash: '0xdef1234567890abc',
//       author: {
//         username: 'blockchain_enthusiast',
//         display_name: 'Blockchain Enthusiast',
//         pfp_url: 'https://i.ibb.co/NdyfX1qx/Monad-Logo-Black-Logo-Mark.png',
//         verifications: ['0xdef1234567890abc'],
//       },
//       text: 'Monad\'s approach to scaling is revolutionary. Can\'t wait to see what the future holds! 🔮',
//       timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 minutes ago
//       reactions: {
//         likes_count: 27,
//         recasts_count: 4,
//       },
//       replies: {
//         count: 7,
//       },
//     },
//   ]

//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000))

//   return { casts: mockCasts }
}

function CastCard({ cast }: { cast: Cast }) {
  const timeAgo = formatDistanceToNow(new Date(cast.timestamp), { addSuffix: true })
  const isVerified = cast.author.verifications && cast.author.verifications.length > 0

  return (
    <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-800">
      {/* User Info Section */}
      <div className="flex items-start mb-3">
        <img
          src={cast.author.pfp_url || '/images/icon.png'}
          alt={cast.author.display_name}
          className="w-14 h-14 rounded-full mr-4 flex-shrink-0"
          onError={(e) => {
            e.currentTarget.src = '/images/icon.png'
          }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-white truncate">{cast.author.username}</span>
            {isVerified && (
              <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
            {cast.channel && (
              <>
                <span className="text-gray-400">in</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 flex-shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  {cast.channel.name}
                </span>
              </>
            )}
            <span className="text-gray-400 text-sm ml-auto">{timeAgo}</span>
          </div>
        </div>
      </div>

      {/* Cast Content */}
      <div className="mb-4 pl-18">
        <p className="text-white text-sm leading-relaxed">{cast.text}</p>
      </div>

      {/* Interaction Metrics */}
      <div className="flex items-center gap-6 text-gray-400 text-sm pl-18">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          <span>{cast.replies.count}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          <span>{cast.reactions.recasts_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span>{cast.reactions.likes_count}</span>
        </div>
      </div>
    </div>
  )
}

export function CastFeed() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popular-casts'],
    queryFn: fetchPopularCasts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  if (isLoading) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left">Popular Casts</h2>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-4 border border-[#333] rounded-md p-4">
        <h2 className="text-xl font-bold text-left">Popular Casts</h2>
        <div className="text-red-400 text-center py-4">
          Error loading casts: {error instanceof Error ? error.message : 'Unknown error'}
        </div>
      </div>
    )
  }

  const topCasts = data?.casts?.slice(0, 9) || []

  return (
    <div className="space-y-4 border border-[#333] rounded-md p-4">
      <h2 className="text-xl font-bold text-left">Popular Casts</h2>
      <div className="space-y-4">
        {topCasts.length > 0 ? (
          topCasts.map((cast) => (
            <CastCard key={cast.hash} cast={cast} />
          ))
        ) : (
          <div className="text-gray-400 text-center py-4">No casts available</div>
        )}
      </div>
    </div>
  )
}
