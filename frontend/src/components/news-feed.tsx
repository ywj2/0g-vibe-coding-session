import { } from 'react'

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
    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-xl p-4 md:p-6 h-full flex flex-col">
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">黄金市场动态</h2>
        <p className="text-gray-400 text-sm md:text-base">全球大事件与黄金买卖新闻</p>
      </div>

      {/* 新闻列表容器 - 直接显示所有新闻 */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2">
        <div className="space-y-2 md:space-y-3">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 md:p-4 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs font-semibold ${
                    item.category === '全球大事件' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {item.category}
                  </span>
                  <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs font-semibold ${getImpactColor(item.impact)}`}>
                    {getImpactText(item.impact)}
                  </span>
                </div>
                <span className="text-gray-500 text-xs md:text-sm">{item.time}</span>
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2 flex items-center gap-1 md:gap-2">
                {item.title}
                {item.trend === 'up' ? (
                  <span className="text-green-400 text-xs md:text-sm">↑</span>
                ) : (
                  <span className="text-red-400 text-xs md:text-sm">↓</span>
                )}
              </h3>
              
              <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-xs">
                  影响金价: {item.trend === 'up' ? '正面' : '负面'}
                </div>
                <div className="text-xs text-gray-400">
                  #{item.id.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700">
        <div className="text-gray-400 text-xs md:text-sm flex items-center justify-between">
          <div>共 {newsItems.length} 条新闻</div>
          <div className="text-gray-500 text-xs">
            更新时间: {new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      <div className="mt-3 md:mt-4 text-gray-500 text-xs">
        <p>全球黄金市场重要动态一览</p>
      </div>
    </div>
  )
}
