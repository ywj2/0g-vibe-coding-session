// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {GoldPriceForecast} from "../src/GoldPriceForecast.sol";

contract GoldPriceForecastScript is Script {
    GoldPriceForecast public counter;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        counter = new GoldPriceForecast();

        vm.stopBroadcast();
    }
}
