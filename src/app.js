const { ethers } = require("ethers");
const url = "https://eth-mainnet.alchemyapi.io/v2/p8fmc7YnHzLbd4CppeL39aWJemv5kpqe";
const provider = new ethers.providers.JsonRpcProvider(url);

async function findBlock() {

    const latestNum = await provider.getBlockNumber()
    const latest = await provider.getBlockWithTransactions(latestNum);
    
    document.getElementById("blockHash").innerHTML = latest.hash;
    document.getElementById("blockNumber").innerHTML = latest.number;
    document.getElementById("blockNonce").innerHTML = latest.nonce;  
    let transactions = document.getElementById("transactions");

    transactions.innerHTML = latest.transactions.length;

    console.log(latest);
}

const blockButton = document.getElementById("currentBlock");
blockButton.addEventListener("click", findBlock, false);