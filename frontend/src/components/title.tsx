export function Title() {
  return (
    <div className="w-full max-w-5xl mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            黄金价格AI预测分析
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">实时价格追踪 + AI历史预测模型</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200">
            预测
          </button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 font-medium rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-200">
            验证历史预测
          </button>
        </div>
      </div>
    </div>
  )
}
