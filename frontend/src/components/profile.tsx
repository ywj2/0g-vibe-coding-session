import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import { injected } from 'wagmi/connectors'

export function Profile() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, error: connectError, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const { data: ensName, error: ensError, status: ensStatus } = useEnsName({ address })

  if (!isConnected) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-2xl mb-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-white">Connect Wallet</h2>
        <p className="text-gray-300 mb-4">Connect your wallet to interact with the app</p>
        <button
          onClick={() => connect({ connector: injected() })}
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
      
      <div className="mb-4">
        <p className="text-gray-400 text-sm mb-1">Address</p>
        <p className="text-white font-mono text-sm bg-gray-900 p-3 rounded break-all">
          {address}
        </p>
      </div>

      {ensStatus === 'pending' && (
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-1">ENS Name</p>
          <p className="text-gray-300">Loading ENS name...</p>
        </div>
      )}

      {ensStatus === 'success' && ensName && (
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-1">ENS Name</p>
          <p className="text-white font-mono text-sm bg-gray-900 p-3 rounded break-all">
            {ensName}
          </p>
        </div>
      )}

      {ensStatus === 'error' && (
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-1">ENS Name</p>
          <p className="text-red-400 text-sm">Error fetching ENS name: {ensError?.message}</p>
        </div>
      )}

      <button
        onClick={() => disconnect()}
        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full"
      >
        Disconnect Wallet
      </button>
    </div>
  )
}
