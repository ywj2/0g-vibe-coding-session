// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {GoldPriceForecast} from "../src/GoldPriceForecast.sol";

contract GoldPriceForecastTest is Test {
    GoldPriceForecast public counter;
    address public owner = address(0x123);
    address public user1 = address(0x456);
    address public user2 = address(0x789);

    function setUp() public {
        vm.startPrank(owner);
        counter = new GoldPriceForecast();
        vm.stopPrank();
    }

    function test_OwnerIsSet() public view {
        assertEq(counter.owner(), owner);
    }

    function test_DepositEth() public {
        vm.deal(user1, 1 ether);
        vm.startPrank(user1);
        
        // 存款0.01 ETH
        (bool success, ) = address(counter).call{value: 0.01 ether}("");
        require(success, "Deposit failed");
        
        assertEq(address(counter).balance, 0.01 ether);
        assertEq(counter.getBalance(), 0.01 ether);
    }

    function test_DepositLessThanMinimumShouldFail() public {
        vm.deal(user1, 1 ether);
        vm.startPrank(user1);
        
        // 尝试存款少于0.01 ETH
        (bool success, ) = address(counter).call{value: 0.009 ether}("");
        require(!success, "Deposit should have failed");
        
        assertEq(address(counter).balance, 0);
    }

    function test_WithdrawByOwner() public {
        // 先存款
        vm.deal(user1, 1 ether);
        vm.startPrank(user1);
        (bool depositSuccess, ) = address(counter).call{value: 0.02 ether}("");
        require(depositSuccess, "Deposit failed");
        vm.stopPrank();
        
        uint256 contractBalanceBefore = address(counter).balance;
        uint256 ownerBalanceBefore = owner.balance;
        
        // owner提款
        vm.startPrank(owner);
        counter.withdraw();
        vm.stopPrank();
        
        assertEq(address(counter).balance, 0);
        assertEq(owner.balance, ownerBalanceBefore + contractBalanceBefore);
    }

    function test_WithdrawByNonOwnerShouldFail() public {
        // 先存款
        vm.deal(user1, 1 ether);
        vm.startPrank(user1);
        (bool depositSuccess, ) = address(counter).call{value: 0.02 ether}("");
        require(depositSuccess, "Deposit failed");
        vm.stopPrank();
        
        // 非owner尝试提款
        vm.startPrank(user2);
        vm.expectRevert("Only owner can call this function");
        counter.withdraw();
        vm.stopPrank();
    }

    function test_WithdrawWhenNoBalanceShouldFail() public {
        vm.startPrank(owner);
        vm.expectRevert("No ETH to withdraw");
        counter.withdraw();
        vm.stopPrank();
    }
}
