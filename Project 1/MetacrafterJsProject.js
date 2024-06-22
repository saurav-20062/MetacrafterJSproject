const nftCollection = [];

function mintNFT(name, birthYear, profession, hairColor, eyeColor, origin, mintDate) {
    const nft = {
        name: name,
        birthYear: birthYear,
        profession: profession,
        hairColor: hairColor,
        eyeColor: eyeColor,
        origin: origin,
        mintDate: mintDate
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Birth Year: " + nftCollection[i].birthYear);
        console.log("Profession: " + nftCollection[i].profession);
        console.log("Hair Color: " + nftCollection[i].hairColor);
        console.log("Eye Color: " + nftCollection[i].eyeColor);
        console.log("Origin: " + nftCollection[i].origin);
        console.log("Mint Date: " + nftCollection[i].mintDate);
        console.log("-------------------------");
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Rohit Sharma", 1995, "Graphic Designer", "Brown", "Hazel", "India", "2024-05-01");
mintNFT("Virat Kohli", 1992, "Architect", "Black", "Green", "Spain", "2024-05-02");
mintNFT("MS Dhoni", 1988, "Chef", "Black", "Brown", "China", "2024-05-03");

listNFTs();

console.log("Total Supply: " + getTotalSupply());
