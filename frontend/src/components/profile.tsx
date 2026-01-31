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
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-2xl mb-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-white">Connect Wallet</h2>
        <p className="text-gray-300 mb-4">Connect your wallet to interact with the app</p>
        <button
          onClick={handleConnect}
          disabled={isPending}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Connecting...' : 'Connect Wallet'}
        </button>
        {connectError && (
          <p className="mt-3 text-red-400 text-sm">Error: {connectError.message}</p>
        )}
      </div>
    )
  }

  // Connected state
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-2xl mb-8 max-w-md w-full">
      <h2 className="text-xl font-bold mb-4 text-white">Wallet Connected</h2>
      
      <div className="mb-6">
        <p className="text-gray-400 text-sm mb-1">Address</p>
        <p className="text-white font-mono text-sm bg-gray-900 p-3 rounded break-all">
          {address}
        </p>
      </div>

      <button
        onClick={handleDisconnect}
        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full"
      >
        Disconnect Wallet
      </button>
    </div>
  )
}
