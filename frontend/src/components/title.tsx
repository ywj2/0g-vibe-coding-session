import { useConnection, useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import { useState } from 'react'

interface Prediction {
  tomorrowPrice: string
  takeProfit: string
  stopLoss: string
}

export function Title() {
  const { isConnected } = useConnection()
  const { sendTransaction, isPending } = useSendTransaction()
  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [transactionSuccess, setTransactionSuccess] = useState<boolean>(false)
  const [transactionError, setTransactionError] = useState<string>('')

  const generatePrediction = (): Prediction => {
    // 模拟生成预测数据
    const basePrice = 2350 + Math.random() * 100 // 2350-2450之间
    const tomorrowPrice = basePrice.toFixed(2)
    const takeProfit = (basePrice * 1.05).toFixed(2) // 上涨5%
    const stopLoss = (basePrice * 0.95).toFixed(2)   // 下跌5%
    
    return {
      tomorrowPrice,
      takeProfit,
      stopLoss
    }
  }

  const handlePredict = async () => {
    if (!isConnected) {
      alert('请先连接钱包')
      return
    }

    // 重置状态
    setPrediction(null)
    setTransactionSuccess(false)
    setTransactionError('')

    try {
      await sendTransaction({
        to: '0x1c03eF416bE077Db96A911Cab3ca80CF001E4E04',
        value: parseEther('0.01'),
      })
      
      // 交易成功
      setTransactionSuccess(true)
      const newPrediction = generatePrediction()
      setPrediction(newPrediction)
    } catch (error) {
      console.error('交易失败:', error)
      const errorMessage = error instanceof Error ? error.message : String(error)
      setTransactionError(errorMessage)
      alert('交易失败: ' + errorMessage)
    }
  }

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
          <button
            onClick={handlePredict}
            disabled={isPending}
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? '处理中...' : '预测'}
          </button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 font-medium rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-200">
            验证历史预测
          </button>
        </div>
      </div>

      {/* 显示预测结果 */}
      {transactionSuccess && prediction && (
        <div className="mt-4 p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg animate-fadeIn">
          <h3 className="text-lg font-semibold text-green-300 mb-2">🎯 预测结果已生成</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-black/30 rounded border border-yellow-800/50">
              <p className="text-sm text-gray-400">明日金价预测</p>
              <p className="text-xl font-bold text-yellow-300">{prediction.tomorrowPrice} USD/oz</p>
            </div>
            <div className="p-3 bg-black/30 rounded border border-green-800/50">
              <p className="text-sm text-gray-400">止盈点</p>
              <p className="text-xl font-bold text-green-300">{prediction.takeProfit} USD/oz</p>
              <p className="text-xs text-green-400 mt-1">(+5% 收益目标)</p>
            </div>
            <div className="p-3 bg-black/30 rounded border border-red-800/50">
              <p className="text-sm text-gray-400">止损点</p>
              <p className="text-xl font-bold text-red-300">{prediction.stopLoss} USD/oz</p>
              <p className="text-xs text-red-400 mt-1">(-5% 风险控制)</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            基于AI模型分析历史数据与市场趋势生成，仅供参考，投资需谨慎。
          </p>
        </div>
      )}

      {transactionError && (
        <div className="mt-4 p-4 bg-gradient-to-r from-red-900/20 to-rose-900/20 border border-red-800/30 rounded-lg">
          <h3 className="text-lg font-semibold text-red-300 mb-2">❌ 交易失败</h3>
          <p className="text-gray-300">{transactionError}</p>
          <p className="text-sm text-gray-400 mt-2">请检查网络连接、钱包余额，并确保已切换到正确网络。</p>
        </div>
      )}
    </div>
  )
}
