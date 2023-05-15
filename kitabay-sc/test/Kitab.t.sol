// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Kitab.sol";

contract KitabTest is Test {
    Kitab kitab;
    address public owner;
    uint256 public maxSupply = 10;
    uint256 public initialPrice = 1 ether;

    fallback() external payable {}
    receive() external payable {}

    function setUp() public {
        kitab = new Kitab(
            "Kitab",
            "KITAB",
            "https://example.com/",
            maxSupply,
            initialPrice
        );
        owner = address(this);
    }

    function testMint() public {
        address addr1 = address(0x1);
        uint256 counter = 0;
        kitab.safeMint{value: initialPrice}(addr1);
        counter++;
        assertTrue(kitab.balanceOf(addr1) == 1, "addr1 should own 1 token");
        assertTrue(address(kitab).balance == initialPrice, "contract should have 1 ether");
    }

    function testMintMaxSupply() public {
        address addr1 = address(0x1);
        uint256 counter = 0;
        while (counter < maxSupply) {
            kitab.safeMint{value: initialPrice}(addr1);
            counter++;
        }
        assertTrue(kitab.balanceOf(addr1) == maxSupply, "addr1 should own 10 tokens");
        assertTrue(address(kitab).balance == maxSupply * initialPrice, "contract should have 10 ether");
        vm.expectRevert();
        kitab.safeMint{value: initialPrice}(addr1);
    }

    function testMintInsufficientFunds() public {
        address addr1 = address(0x1);
        vm.expectRevert();
        kitab.safeMint{value: initialPrice - 1}(addr1);
    }

    function testWithdraw() public {
        address addr1 = address(0x1);
        uint256 counter = 0;
        while (counter < maxSupply) {
            kitab.safeMint{value: initialPrice}(addr1);
            counter++;
        }
        assertTrue(address(kitab).balance == maxSupply * initialPrice, "contract should have 10 ether");
        kitab.withdraw();
        assertTrue(address(kitab).balance == 0, "contract should have 0 ether");
    }
}
