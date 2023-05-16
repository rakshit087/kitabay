// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/KitabFactory.sol";
import "../src/Kitab.sol";


contract KitabFactoryTest is Test {
    KitabFactory kitabFactory;
    address public owner;
    string public name = "Kitab";
    string public symbol = "KITAB";
    string public baseURI = "https://example.com/";
    uint256 public maxSupply = 10;
    uint256 public initialPrice = 1 ether;

    fallback() external payable {}
    receive() external payable {}

    function setUp() public {
        kitabFactory = new KitabFactory();
        owner = address(this);
    }

    function testCreateKitab() public {
        uint256 counter = 0;
        address kitab = kitabFactory.createKitab(name, symbol, baseURI, maxSupply, initialPrice);
        Kitab(kitab).safeMint{value: initialPrice}(address(0x1));
        counter++;
        assertTrue(Kitab(kitab).balanceOf(address(0x1)) == 1, "addr1 should own 1 token");
    }
}