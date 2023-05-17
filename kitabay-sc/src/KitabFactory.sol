// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./Kitab.sol";

contract KitabFactory {
    event KitabCreated(address indexed kitabAddress, address indexed owner);

    function createKitab(
        string memory _name,
        string memory _symbol,
        string memory _baseURI,
        uint256 _maxSupply,
        uint256 _initialPrice
    ) external returns (address) {
        Kitab kitab = new Kitab(_name, _symbol, _baseURI, _maxSupply, _initialPrice);
        emit KitabCreated(address(kitab), msg.sender);
        return address(kitab);
    }
}