# NFT Collection Project

## Overview
This project demonstrates a simple NFT (Non-Fungible Token) collection using JavaScript. The project includes functions to mint new NFTs, list all minted NFTs, and get the total supply of NFTs in the collection.

## Project Structure

- **mintNFT(name, birthYear, profession, hairColor, eyeColor, origin, mintDate)**: This function creates a new NFT with the given attributes and adds it to the `nftCollection` array.
- **listNFTs()**: This function logs all the NFTs in the collection to the console, displaying their attributes.
- **getTotalSupply()**: This function returns the total number of NFTs in the collection.

## Mint Function

To mint a new NFT, use the `mintNFT` function with the following parameters:
- `name`: Name of the NFT.
- `birthYear`: Birth year of the NFT.
- `profession`: Profession of the NFT.
- `hairColor`: Hair color of the NFT.
- `eyeColor`: Eye color of the NFT.
- `origin`: Origin of the NFT.
- `mintDate`: Date when the NFT was minted.

Example:
```javascript
mintNFT("Rohit Sharma", 1995, "Graphic Designer", "Brown", "Hazel", "India", "2024-05-01");

