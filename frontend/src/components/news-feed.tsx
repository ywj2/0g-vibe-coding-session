import { } from 'react'

// 模拟新闻数据（精简为4条，使高度与GoldChart匹配）
const newsItems = [
  {
    id: 1,
    title: '美联储维持利率不变',
    description: '美联储决定维持基准利率不变，黄金价格应声上涨。',
    category: '全球大事件',
    time: '2小时前',
    impact: 'high',
    trend: 'up'
  },
  {
    id: 2,
    title: '中国央行增持黄金',
    description: '中国央行连续第8个月增持黄金储备，创历史新高。',
    category: '黄金买卖',
    time: '4小时前',
    impact: 'high',
    trend: 'up'
  },
  {
    id: 3,
    title: '俄乌局势推动避险',
    description: '地缘政治紧张局势升级，投资者转向黄金等避险资产。',
    category: '全球大事件',
    time: '6小时前',
    impact: 'high',
    trend: 'up'
  },
  {
    id: 4,
    title: '大型机构减持ETF',
    description: '全球最大黄金ETF遭遇资金流出，反映短期获利了结。',
    category: '黄金买卖',
    time: '8小时前',
    impact: 'medium',
    trend: 'down'
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
    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-xl p-3 md:p-4 h-full flex flex-col">
      <div className="mb-2 md:mb-4">
        <h2 className="text-lg md:text-xl font-bold text-white">黄金市场动态</h2>
        <p className="text-gray-400 text-xs md:text-sm">全球大事件与黄金买卖新闻</p>
      </div>

      {/* 新闻列表容器 - 直接显示所有新闻 */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1.5 md:space-y-2">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-2 md:p-3 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-1 md:mb-2">
                <div className="flex items-center gap-1">
                  <span className={`px-1 md:px-1.5 py-0.5 rounded text-xs font-semibold ${
                    item.category === '全球大事件' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {item.category}
                  </span>
                  <span className={`px-1 md:px-1.5 py-0.5 rounded text-xs font-semibold ${getImpactColor(item.impact)}`}>
                    {getImpactText(item.impact)}
                  </span>
                </div>
                <span className="text-gray-500 text-xs">{item.time}</span>
              </div>
              
              <h3 className="text-sm md:text-base font-bold text-white mb-1 flex items-center gap-1">
                {item.title}
                {item.trend === 'up' ? (
                  <span className="text-green-400 text-xs">↑</span>
                ) : (
                  <span className="text-red-400 text-xs">↓</span>
                )}
              </h3>
              
              <p className="text-gray-300 text-xs mb-1 md:mb-2 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-xs">
                  影响: {item.trend === 'up' ? '正面' : '负面'}
                </div>
                <div className="text-xs text-gray-400">
                  #{item.id.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 md:mt-3 pt-2 border-t border-gray-700">
        <div className="text-gray-400 text-xs flex items-center justify-between">
          <div>共 {newsItems.length} 条新闻</div>
          <div className="text-gray-500 text-xs">
            {new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  )
}
