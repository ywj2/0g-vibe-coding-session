import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// 模拟黄金价格数据（最近30天）
const generateGoldPriceData = () => {
  const data = []
  const now = new Date()
  const basePrice = 1950 // 基准价格（美元/盎司）
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(now.getDate() - i)
    
    // 添加一些随机波动
    const fluctuation = (Math.random() - 0.5) * 40
    const price = basePrice + fluctuation
    
    data.push({
      date: date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }),
      fullDate: date.toISOString().split('T')[0],
      price: Math.round(price * 100) / 100,
      high: Math.round((price + Math.random() * 10) * 100) / 100,
      low: Math.round((price - Math.random() * 10) * 100) / 100
    })
  }
  
  return data
}

const goldData = generateGoldPriceData()

export function GoldChart() {
  return (
    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-xl p-4 md:p-6 w-full">
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">黄金价格走势</h2>
        <p className="text-gray-400 text-sm md:text-base">最近30天黄金价格（美元/盎司）</p>
      </div>
      
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={goldData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#374151" 
              vertical={false}
            />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              fontSize={10}
              tickLine={false}
              axisLine={{ stroke: '#4B5563' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={10}
              tickLine={false}
              axisLine={{ stroke: '#4B5563' }}
              tickFormatter={(value) => `$${value}`}
              domain={['dataMin - 20', 'dataMax + 20']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #4B5563',
                borderRadius: '0.5rem',
                color: '#F9FAFB'
              }}
              labelStyle={{ color: '#D1D5DB', fontWeight: 'bold' }}
              formatter={(value: number | undefined) => [`$${(value || 0).toFixed(2)}`, '价格']}
              labelFormatter={(label) => `日期: ${label}`}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '5px', fontSize: '12px' }}
              formatter={() => '黄金价格'}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#FBBF24"
              strokeWidth={2.5}
              dot={{ stroke: '#FBBF24', strokeWidth: 1.5, r: 3 }}
              activeDot={{ r: 5, stroke: '#F59E0B', strokeWidth: 2, fill: '#FBBF24' }}
              name="黄金价格"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <p className="text-gray-400 text-xs md:text-sm">当前价格</p>
          <p className="text-lg md:text-2xl font-bold text-yellow-400">
            ${goldData[goldData.length - 1]?.price.toFixed(2) || '0.00'}
          </p>
        </div>
        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <p className="text-gray-400 text-xs md:text-sm">30天最高</p>
          <p className="text-base md:text-xl font-bold text-green-400">
            ${Math.max(...goldData.map(d => d.high)).toFixed(2)}
          </p>
        </div>
        <div className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
          <p className="text-gray-400 text-xs md:text-sm">30天最低</p>
          <p className="text-base md:text-xl font-bold text-red-400">
            ${Math.min(...goldData.map(d => d.low)).toFixed(2)}
          </p>
        </div>
      </div>
      
      <div className="mt-4 md:mt-6 text-gray-500 text-xs md:text-sm">
        <p>数据更新于: {new Date().toLocaleDateString('zh-CN', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
      </div>
    </div>
  )
}