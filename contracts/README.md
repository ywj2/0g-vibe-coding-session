## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/GoldPriceForecast.s.sol:GoldPriceForecastScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

生成随机密钥对
cast wallet new

查看 ETH 余额
使用 cast balance 命令。默认返回单位为 Wei。
bash
# 查看指定地址余额（默认 Wei）
cast balance $ADDRESS --rpc-url $RPC_URL

forge script script/GoldPriceForecast.s.sol:GoldPriceForecastScript --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast



