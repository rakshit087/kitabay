// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Kitab.sol";

contract KitabTest is Test {

    Kitab kitab;
    address addr1 = address(0x1);
    address addr2 = address(0x2);
    address addr3 = address(0x3);

    function setUp() public {
        kitab = new Kitab("The Achemist", "ALC", "https://example.com/");
    }

    function testMint() public {
        kitab.safeMint(addr1);
        assertEq(kitab.balanceOf(addr1), 1);
    }
}
