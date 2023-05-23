// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Kitab is ERC721Royalty, Ownable {
    using Counters for Counters.Counter;

    string private _baseTokenURI;
    uint256 public MAX_SUPPLY = 0;
    uint256 public INITIAL_PRICE = 0;

    Counters.Counter private _tokenIdCounter;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        uint256 maxSupply,
        uint256 initialPrice,
        address newOwner
    ) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
        MAX_SUPPLY = maxSupply;
        INITIAL_PRICE = initialPrice;
        _setDefaultRoyalty(address(this), 1000);
        transferOwnership(newOwner);
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function safeMint(address to) public payable {
        require(_tokenIdCounter.current() < MAX_SUPPLY, "Max supply reached");
        require(msg.value >= INITIAL_PRICE, "Insufficient funds");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}
