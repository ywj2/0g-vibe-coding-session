import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { Profile } from './components/profile'
import { GoldChart } from './components/gold-chart'
import { NewsFeed } from './components/news-feed'
import { Title } from './components/title'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Profile />
        <div className="h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-4 md:p-8 overflow-auto">
          <Title />
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
