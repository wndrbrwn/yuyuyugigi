// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MintNft is ERC721Enumerable, Ownable {
    string public name;
    string public symbol;
    
    string metadataUri;
    string unrevealedUri;

    bool isRevealed;

    constructor(string memory _name, string memory _symbol, string memory _metadataUri, string memory _unrevealedUri) ERC721(_name, _symbol) Ownable(msg.sender) {
        name = _name;
        symbol = _symbol;
        metadataUri = _metadataUri;
        unrevealedUri = _unrevealedUri;
    }

    function mintNft(uint _tokenId, uint _amount) public onlyOwner {
     require(_tokenId < 17, "Not exist token.");

        _mint(msg.sender, _tokenId, _amount, "");

    }

    function tokenURI(uint _tokenId) public view override returns (string memory) {
        if(isRevealed) {
            return string(abi.encodePacked(metadataUri, Strings.toString(_tokenId), ".json")); 
        } else {
            return unrevealedUri;
        }
    }

    function setIsReveal() public onlyOwner {
        isRevealed = true;
    }
}