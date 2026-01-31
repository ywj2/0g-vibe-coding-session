# 智能合约项目 - Blockchain Smart Contracts

## 项目概述
这是一个基于Solidity的智能合约项目，包含多个可部署到EVM兼容区块链的合约。项目采用现代智能合约开发最佳实践，包含安全审计、测试和部署工具。

## 技术栈
- **编程语言**: Solidity 0.8.x
- **开发框架**: Foundry
- **测试框架**: Foundry测试
- **安全工具**: Slither, MythX, Echidna
- **代码质量**: Solhint, Prettier
- **部署工具**: Foundry部署脚本 / 可升级合约代理
- **标准库**: OpenZeppelin Contracts
- **网络**: Ethereum, Polygon, Arbitrum, Optimism 或本地测试网

## 目录结构
```
contracts/
├── contracts/              # 智能合约源文件
│   ├── interfaces/        # 接口定义
│   ├── tokens/           # 代币合约 (ERC20, ERC721, ERC1155)
│   ├── defi/             # DeFi相关合约
│   ├── governance/       # 治理合约
│   ├── utils/           # 工具合约
│   ├── libraries/       # 库合约
│   └── upgradable/      # 可升级合约
├── scripts/              # 部署和管理脚本
│   ├── deploy/          # 部署脚本
│   ├── upgrade/         # 升级脚本
│   └── tasks/           # Foundry任务
├── test/                # 测试文件
│   ├── unit/           # 单元测试
│   ├── integration/    # 集成测试
│   └── fuzz/          # 模糊测试 (Foundry)
├── artifacts/           # 编译产物 (自动生成)
├── cache/              # 缓存文件 (自动生成)
├── docs/               # 文档
│   ├── specifications/ # 合约规范
│   └── audits/        # 审计报告
└── config/             # 配置文件
```

## 合约类型
1. **核心业务合约**: 主要业务逻辑实现
2. **代币合约**: ERC20, ERC721, ERC1155标准实现
3. **治理合约**: DAO治理、投票、提案系统
4. **DeFi合约**: 流动性池、借贷、交易等
5. **工具合约**: 工具函数、数学库、安全合约
6. **可升级合约**: 使用代理模式的可升级合约
7. **工厂合约**: 部署其他合约的工厂模式

## 核心功能
1. **安全的合约设计**: 遵循最佳安全实践
2. **完整的测试覆盖**: 单元测试、集成测试、模糊测试
3. **Gas优化**: 优化合约执行成本
4. **可升级性**: 支持合约升级和迁移
5. **事件系统**: 完善的日志和事件
6. **权限控制**: 基于角色的访问控制
7. **紧急机制**: 暂停、恢复、紧急提款等

## 开发说明
- 使用 `npm run compile` 或 `forge build` 编译合约
- 使用 `npm run test` 或 `forge test` 运行测试
- 使用 `npm run deploy` 或部署脚本部署合约
- 需要配置网络环境 (foundry.toml)
- 支持本地测试网 (Foundry本地节点) 和公共测试网

## 依赖关系
- 依赖于OpenZeppelin合约库
- 需要连接到区块链节点 (本地或远程)
- 可能需要预言机服务 (Chainlink等)
- 为前端提供合约ABI和地址
- 与后端服务交互处理链下逻辑