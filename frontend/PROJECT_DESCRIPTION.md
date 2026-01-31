# 前端项目 - Blockchain DApp

## 项目概述
这是一个基于React + TypeScript + Vite的区块链DApp前端应用。主要用于与智能合约交互，展示区块链数据，提供用户友好的Web3体验。

## 技术栈
- **框架**: React 19 + TypeScript
- **构建工具**: Vite 5
- **状态管理**: React Hooks + Zustand (待选)
- **Web3库**: Wagmi + Viem
- **网络请求**: TanStack Query
- **UI组件**: 待定 (可选用 Ant Design, Chakra UI, 或自定义)
- **样式**: Tailwind CSS 或 Styled Components (待选)
- **钱包集成**: MetaMask, WalletConnect, Coinbase Wallet

## 目录结构
```
frontend/
├── src/
│   ├── components/     # 可复用组件
│   ├── pages/         # 页面组件
│   ├── hooks/         # 自定义hooks (含Web3 hooks)
│   ├── utils/         # 工具函数 (区块链相关)
│   ├── services/      # API服务层
│   ├── stores/        # 状态管理
│   ├── types/         # TypeScript类型定义
│   ├── styles/        # 全局样式
│   ├── assets/        # 静态资源
│   └── App.tsx        # 主应用组件
├── public/            # 公共资源
└── config/            # 配置文件
```

## 核心功能
1. **钱包连接**: 支持多种Web3钱包连接
2. **合约交互**: 调用智能合约的读写操作
3. **交易管理**: 发起、查看、确认交易
4. **数据展示**: 区块链数据可视化展示
5. **用户认证**: Web3身份验证
6. **通知系统**: 交易状态通知

## 开发说明
- 使用 `npm run dev` 启动开发服务器 (端口: 3000)
- 使用 `npm run build` 构建生产版本
- 需要配置环境变量 (.env) 设置RPC节点和合约地址

## 依赖关系
- 依赖于后端API获取非区块链数据
- 依赖于智能合约地址和ABI
- 需要连接到的区块链网络 (如Ethereum, Polygon, 或本地测试网)