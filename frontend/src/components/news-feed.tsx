import { useState, useEffect, useRef } from 'react'

// 模拟新闻数据
const newsItems = [
  {
    id: 1,
    title: '美联储宣布维持利率不变',
    description: '美联储在最新会议中决定维持基准利率在5.25%-5.50%区间，黄金价格应声上涨。',
    category: '全球大事件',
    time: '2小时前',
    impact: 'high',
    trend: 'up'
  },
  {
    id: 2,
    title: '中国央行增持黄金储备',
    description: '中国央行连续第8个月增持黄金储备，总储备量达到2,250吨，创历史新高。',
    category: '黄金买卖',
    time: '4小时前',
    impact: 'medium',
    trend: 'up'
  },
  {
    id: 3,
    title: '俄乌局势紧张推动避险需求',
    description: '地缘政治紧张局势升级，投资者转向黄金等避险资产，金价突破1,980美元。',
    category: '全球大事件',
    time: '6小时前',
    impact: 'high',
    trend: 'up'
  },
  {
    id: 4,
    title: '大型机构减持黄金ETF',
    description: '全球最大黄金ETF SPDR Gold Shares遭遇1.2亿美元资金流出，反映短期获利了结。',
    category: '黄金买卖',
    time: '8小时前',
    impact: 'medium',
    trend: 'down'
  },
  {
    id: 5,
    title: '美元指数走强压制金价',
    description: '美元指数升至105上方，对以美元计价的黄金构成压力，金价小幅回落。',
    category: '全球大事件',
    time: '10小时前',
    impact: 'medium',
    trend: 'down'
  },
  {
    id: 6,
    title: '印度黄金进口量激增',
    description: '印度10月黄金进口量同比增长40%，达到156吨，婚礼季需求旺盛。',
    category: '黄金买卖',
    time: '12小时前',
    impact: 'low',
    trend: 'up'
  },
  {
    id: 7,
    title: '全球通胀数据超预期',
    description: '欧元区CPI数据高于预期，加剧对央行维持高利率的担忧，黄金承压。',
    category: '全球大事件',
    time: '1天前',
    impact: 'medium',
    trend: 'down'
  },
  {
    id: 8,
    title: '央行黄金购买创纪录',
    description: '2023年全球央行净购买黄金达1,136吨，创下自1950年以来最高年度纪录。',
    category: '黄金买卖',
    time: '2天前',
    impact: 'high',
    trend: 'up'
  }
]

export function NewsFeed() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<number>()

  // 自动滚动效果
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % newsItems.length)
      }, 5000) // 每5秒滚动一次
    }

    startAutoScroll()

    // 鼠标悬停时暂停滚动
    const container = containerRef.current
    if (container) {
      const handleMouseEnter = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
      const handleMouseLeave = () => startAutoScroll()
      
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // 手动导航
  const goToNext = () => setCurrentIndex(prev => (prev + 1) % newsItems.length)
  const goToPrev = () => setCurrentIndex(prev => (prev - 1 + newsItems.length) % newsItems.length)

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getImpactText = (impact: string) => {
    switch (impact) {
      case 'high': return '高影响'
      case 'medium': return '中影响'
      case 'low': return '低影响'
      default: return '未知'
    }
  }

  return (
    <div 
      ref={containerRef}
      className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-xl p-6 h-full flex flex-col"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">黄金市场动态</h2>
        <p className="text-gray-400">全球大事件与黄金买卖新闻</p>
      </div>

      {/* 新闻列表容器 */}
      <div className="flex-1 relative overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="h-full pb-4"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.category === '全球大事件' 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {item.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getImpactColor(item.impact)}`}>
                      {getImpactText(item.impact)}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">{item.time}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {item.title}
                  {item.trend === 'up' ? (
                    <span className="text-green-400 text-sm">↑</span>
                  ) : (
                    <span className="text-red-400 text-sm">↓</span>
                  )}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-500 text-xs">
                    影响金价: {item.trend === 'up' ? '正面' : '负面'}
                  </div>
                  <div className="text-xs text-gray-400">
                    #{item.id.toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 导航控制 */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
        <div className="text-gray-400 text-sm">
          当前: {currentIndex + 1} / {newsItems.length}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrev}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="上一个新闻"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-1">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`跳转到新闻 ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="下一个新闻"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-xs">
        <p>新闻自动更新，滚动播放全球黄金市场重要动态</p>
      </div>
    </div>
  )
}