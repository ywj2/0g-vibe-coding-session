# 后端项目 - Blockchain API Server

## 项目概述
这是一个基于Node.js + TypeScript的区块链应用后端服务。提供RESTful API和WebSocket服务，处理业务逻辑、数据存储、以及与区块链节点的交互。

## 技术栈
- **运行时**: Node.js 20+ 
- **框架**: Express.js 或 Nest.js (待选)
- **语言**: TypeScript
- **数据库**: PostgreSQL / MongoDB (待选)
- **ORM/ODM**: Prisma / Mongoose (待选)
- **缓存**: Redis
- **消息队列**: RabbitMQ / Bull (待选)
- **区块链交互**: Web3.js / Ethers.js / Viem
- **身份验证**: JWT + Web3签名验证
- **API文档**: Swagger/OpenAPI

## 目录结构
```
backend/
├── src/
│   ├── controllers/   # 控制器层 (处理HTTP请求)
│   ├── services/      # 业务逻辑层
│   ├── repositories/  # 数据访问层
│   ├── models/        # 数据模型定义
│   ├── middleware/    # 中间件 (认证、日志等)
│   ├── utils/         # 工具函数
│   ├── config/        # 配置文件
│   ├── types/         # TypeScript类型定义
│   ├── tasks/         # 后台任务/定时任务
│   ├── blockchain/    # 区块链相关模块
│   │   ├── providers/ # RPC提供商
│   │   ├── listeners/ # 区块链事件监听器
│   │   └── utils/     # 区块链工具
│   └── app.ts         # 应用入口
├── tests/             # 测试文件
└── scripts/           # 部署/管理脚本
```

## 核心功能
1. **用户管理**: 用户注册、登录、资料管理
2. **API服务**: 提供RESTful API供前端调用
3. **区块链桥接**: 与区块链节点交互，监控链上事件
4. **交易处理**: 处理链下交易逻辑，生成交易数据
5. **数据索引**: 索引区块链数据到数据库
6. **通知服务**: 推送交易状态、事件通知
7. **文件存储**: 处理IPFS或其他去中心化存储
8. **WebSocket服务**: 实时数据推送

## 开发说明
- 需要配置数据库连接和区块链RPC节点
- 支持环境变量配置 (.env)
- 提供完整的API文档
- 包含单元测试和集成测试

## 依赖关系
- 依赖于数据库 (PostgreSQL/MongoDB)
- 依赖于Redis缓存
- 依赖于区块链节点 (本地或远程RPC)
- 可依赖于消息队列服务
- 为前端提供API接口