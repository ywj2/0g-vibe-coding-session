# 0G Vibe Coding Session - 区块链开发工作区

## 📋 项目简介

欢迎来到 **0G Vibe Coding Session** 区块链开发工作区！本仓库专为 **2026年1月31日 Vibe Coding Day** 活动设计，提供了一个完整的区块链应用开发基础架构，方便开发者快速开始基于 0G 技术的项目开发。

本工作区包含前端DApp、后端API服务和智能合约三个核心模块，采用现代化的技术栈和最佳实践，专为AI助手和开发者设计，提供了清晰的项目结构和详细描述。

## 🎯 活动信息

### **0G Vibe Coding Day**
**📆 日期**: 2026年1月31日 (周六) 9:00-18:00
**🏙️ 地点**: 南山区华侨城创意园南区 E5栋 201 二楼 MindClub

### 🔆 活动日程
- **09:00 - 09:30** | 签到 & Networking
- **09:30 - 10:30** | 0G Tech Workshop
- **10:30 - 11:00** | 组队
- **11:00 - 17:00** | Vibe-coding
- **12:00 - 12:30** | 午餐
- **17:00** | 项目提交截止
- **17:00 - 18:00** | 项目展示 & 评审颁奖

### 🔥 Coding 内容（任选）
1. **Agent 原生支付基础设施**
2. **去中心化 AI Trading Arena**

### 🏁 项目要求
- 完成带基本功能的MVP
- 成功部署至0G测试网

### 🙋‍♂️ 参与要求
- 需自带笔记本电脑及充电器
- 欢迎带小伙伴组团参与

## 🏗️ 项目架构

```
0g-vibe-coding-session/
├── frontend/              # 前端DApp (React + TypeScript + Vite)
├── backend/              # 后端API服务 (Node.js + TypeScript)
├── contracts/            # 智能合约 (Solidity + Hardhat/Foundry)
├── docs/                 # 项目文档
├── scripts/              # 通用脚本
├── config/               # 配置文件
├── README.md             # 本文件
└── WORKSPACE_OVERVIEW.md # 详细工作区说明
```

## 🚀 快速开始

### 1. 克隆仓库
```bash
git clone https://github.com/ywj2/0g-vibe-coding-session.git
cd 0g-vibe-coding-session
```

### 2. 了解项目结构
- 查看 `WORKSPACE_OVERVIEW.md` 了解整体架构
- 阅读各项目的 `PROJECT_DESCRIPTION.md` 了解详细信息

### 3. 选择开发方向
根据活动要求，可以选择以下方向：
- **Agent原生支付基础设施**: 开发基于0G的支付协议和智能合约
- **去中心化AI Trading Arena**: 构建去中心化的AI交易竞技场

### 4. 开始开发
每个项目目录都提供了详细的技术栈说明和开发指南。

## 📁 详细文档

### 前端项目 (`frontend/`)
- **技术栈**: React 19 + TypeScript + Vite + Wagmi + Viem
- **功能**: 用户界面、钱包连接、合约交互
- **详细说明**: [frontend/PROJECT_DESCRIPTION.md](frontend/PROJECT_DESCRIPTION.md)

### 后端项目 (`backend/`)
- **技术栈**: Node.js + TypeScript + Express/Nest.js
- **功能**: API服务、区块链桥接、数据处理
- **详细说明**: [backend/PROJECT_DESCRIPTION.md](backend/PROJECT_DESCRIPTION.md)

### 智能合约项目 (`contracts/`)
- **技术栈**: Solidity + Hardhat/Foundry + OpenZeppelin
- **功能**: 区块链业务逻辑、代币、治理等
- **详细说明**: [contracts/PROJECT_DESCRIPTION.md](contracts/PROJECT_DESCRIPTION.md)

## 🛠️ 开发工具要求

### 必要工具
- **Node.js**: v18+ (推荐v20+)
- **npm** 或 **yarn**: 包管理
- **Git**: 版本控制
- **代码编辑器**: VS Code 或其他现代编辑器

### 区块链开发工具
- **Hardhat** 或 **Foundry**: 智能合约开发框架
- **MetaMask**: 以太坊钱包扩展
- **0G测试网节点**: 用于部署和测试

## 📝 项目提交要求

### MVP完成标准
1. 基本功能实现
2. 智能合约部署到0G测试网
3. 前端与合约交互正常
4. 后端服务运行正常（如适用）
5. 提供简单的用户界面

### 提交内容
1. 源代码（推送到GitHub）
2. 部署的合约地址
3. 简短的项目说明文档
4. 演示视频或截图（可选）

## 🤝 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- **GitHub**: [ywj2](https://github.com/ywj2)
- **仓库地址**: https://github.com/ywj2/0g-vibe-coding-session

---

**祝您在 Vibe Coding Day 中开发顺利，创造出优秀的区块链项目！🚀**