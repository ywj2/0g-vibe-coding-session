import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { Profile } from './components/profile'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Profile />
        <div className="h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-8 overflow-auto">
          <div className="flex flex-wrap gap-8 justify-center items-center mb-12">
            <a href="https://vite.dev" target="_blank" className="group">
              <img 
                src={viteLogo} 
                className="h-24 p-6 will-change-filter transition-filter duration-300 group-hover:drop-shadow-[0_0_2em_#646cffaa]" 
                alt="Vite logo" 
              />
            </a>
            <a href="https://react.dev" target="_blank" className="group">
              <img 
                src={reactLogo} 
                className="h-24 p-6 will-change-filter transition-filter duration-300 group-hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:group-hover:animate-spin-slow" 
                alt="React logo" 
              />
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Vite + React
          </h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl mb-12 max-w-md w-full">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 mb-4 w-full"
            >
              count is {count}
            </button>
            <p className="text-gray-300">
              Edit <code className="bg-gray-900 px-2 py-1 rounded text-blue-300 font-mono">src/App.tsx</code> and save to test HMR
            </p>
          </div>
          
          <p className="text-gray-400 text-center max-w-md mb-8">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
