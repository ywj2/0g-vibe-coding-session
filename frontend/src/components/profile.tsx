import { useConnection, useConfig } from 'wagmi'
import { connect, disconnect } from 'wagmi/actions'
import { injected } from 'wagmi/connectors'
import { useState } from 'react'

export function Profile() {
  const config = useConfig()
  const { address } = useConnection()
  const [connectError, setConnectError] = useState<Error | null>(null)
  const [isPending, setIsPending] = useState(false)

  const handleConnect = async () => {
    setIsPending(true)
    setConnectError(null)
    try {
      await connect(config, { connector: injected() })
    } catch (error) {
      setConnectError(error as Error)
    } finally {
      setIsPending(false)
    }
  }

  const handleDisconnect = async () => {
    await disconnect(config)
  }

  // Check if address exists to determine connection status
  const isConnected = !!address

  if (!isConnected) {
    return (
      <div className="flex justify-end">
        <button
          onClick={handleConnect}
          disabled={isPending}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isPending ? 'Connecting...' : 'Connect Wallet'}
        </button>
        {connectError && (
          <span className="text-red-400 text-xs ml-2">Error: {connectError.message}</span>
        )}
      </div>
    )
  }

  // Connected state - show address and disconnect button in one line
  const formattedAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''
  
  return (
    <div className="flex justify-end items-center gap-3 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-300 text-sm font-mono">{formattedAddress}</span>
      </div>
      <button
        onClick={handleDisconnect}
        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-2 px-4 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
      >
        Disconnect
      </button>
    </div>
  )
}
