// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract GoldPriceForecast {
    uint256 public number;
    address public owner;
    
    event Deposited(address indexed depositor, uint256 amount);
    event Withdrawn(address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // 接收ETH存款，要求至少0.01 ETH
    receive() external payable {
        require(msg.value >= 0.01 ether, "Minimum deposit is 0.01 ETH");
        emit Deposited(msg.sender, msg.value);
    }

    // 提取合约中的所有ETH，仅限owner调用
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        
        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Withdrawal failed");
        
        emit Withdrawn(owner, balance);
    }

    // 获取合约ETH余额
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
