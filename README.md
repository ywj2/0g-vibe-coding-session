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

### 整体架构
```
0g-vibe-coding-session/
├── frontend/              # 前端DApp (React + TypeScript + Vite)
├── backend/              # 后端API服务 (Node.js + TypeScript)
├── contracts/            # 智能合约 (Solidity + Hardhat/Foundry)
├── docs/                 # 项目文档
├── scripts/              # 通用脚本
├── config/               # 配置文件
└── LICENSE               # 许可证文件
```

### 组件间关系
```
前端 (Frontend) ← HTTP/WebSocket → 后端 (Backend) ← RPC/Web3 → 区块链网络
    ↓                                      ↓
用户界面                             业务逻辑层
    ↓                                      ↓
钱包交互                             数据存储
    ↖                                ↗
      智能合约 (Contracts)
```

## 📁 各项目详细说明

### 1. 前端项目 (`frontend/`)
- **技术栈**: React 19 + TypeScript + Vite
- **功能**: 用户界面、钱包连接、合约交互
- **详细说明**: [frontend/README.md](frontend/README.md)

### 2. 后端项目 (`backend/`)
- **技术栈**: Node.js + TypeScript + Express/Nest.js
- **功能**: API服务、区块链桥接、数据处理
- **详细说明**: [backend/README.md](backend/README.md)

### 3. 智能合约项目 (`contracts/`)
- **技术栈**: Solidity + Hardhat/Foundry
- **功能**: 区块链业务逻辑、代币、治理等
- **详细说明**: [contracts/README.md](contracts/README.md)

## 🚀 开发工作流

### 1. 智能合约开发流程
```
编写合约 → 编译测试 → 部署到测试网 → 前端集成
```

### 2. 后端开发流程
```
设计API → 实现业务逻辑 → 连接数据库 → 集成区块链交互
```

### 3. 前端开发流程
```
设计UI → 实现组件 → 集成Web3 → 连接后端API
```

## ⚙️ 环境配置要求

### 必要工具
- **Node.js**: v18+ (推荐v20+)
- **npm** 或 **yarn**: 包管理
- **Git**: 版本控制
- **Docker** (可选): 容器化部署
- **区块链工具**: Hardhat/Foundry, MetaMask等

### 开发工具要求
- **代码编辑器**: VS Code 或其他现代编辑器
- **区块链开发工具**: Hardhat 或 Foundry
- **以太坊钱包**: MetaMask 扩展
- **0G测试网节点**: 用于部署和测试

### 环境变量
每个子项目都有自己的 `.env` 配置文件，需要根据具体需求配置：
- 数据库连接字符串
- 区块链RPC节点URL
- API密钥和秘钥
- 合约地址

## 🤖 AI开发指南

### 快速开始
1. **了解需求**: 阅读本文件和各项目的README.md
2. **选择技术栈**: 根据项目描述选择具体技术 (如选择Express还是Nest.js)
3. **创建基础结构**: 按照目录结构创建必要的文件和文件夹
4. **实现核心功能**: 按照功能描述实现具体逻辑
5. **测试集成**: 确保各组件能够正确交互

### 常见开发任务
- **添加新功能**: 在相应项目的目录结构中添加模块
- **修改现有功能**: 参考现有架构进行修改
- **调试问题**: 检查组件间接口和数据流
- **优化性能**: 针对区块链交互、数据库查询等进行优化

### 注意事项
1. 保持各项目间的接口一致性
2. 遵循区块链安全最佳实践
3. 确保错误处理和日志记录
4. 考虑Gas优化和交易成本

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

## 📈 扩展建议

### 可选组件
1. **监控系统**: 应用性能监控
2. **分析工具**: 区块链数据分析
3. **管理面板**: 后台管理系统
4. **移动端应用**: React Native或Flutter

### 部署选项
1. **传统部署**: VPS/云服务器
2. **容器化**: Docker + Kubernetes
3. **Serverless**: AWS Lambda, Vercel等
4. **去中心化**: IPFS, Arweave等

## 🤝 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式与维护

- **GitHub**: [ywj2](https://github.com/ywj2)
- **仓库地址**: https://github.com/ywj2/0g-vibe-coding-session
- **项目状态**: 初始创建阶段
- **最后更新**: 2026年1月31日
- **维护者**: AI开发助手
- **更新方式**: 根据需求迭代更新描述文件

---

**祝您在 Vibe Coding Day 中开发顺利，创造出优秀的区块链项目！🚀**