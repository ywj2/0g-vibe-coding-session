import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { Profile } from './components/profile'
import { GoldChart } from './components/gold-chart'
import { NewsFeed } from './components/news-feed'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Profile />
        <div className="h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-4 md:p-8 overflow-auto">
          <div className="w-full max-w-5xl mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              黄金价格AI预测分析
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">实时价格追踪 + AI历史预测模型</p>
          </div>
          <div className="w-full max-w-5xl mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="h-full">
                <GoldChart />
              </div>
              <div className="h-full">
                <NewsFeed />
              </div>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
