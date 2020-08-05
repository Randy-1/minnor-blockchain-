const SHA256 = require('crypto-js/SHA256');
class Block{
    constructor (index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.Hash = '';
        this.calculateHash = this.calculateHash();
        this.newBlockchain = this.newBlockchain();
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + this.data + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock];
    }

    createGenesisBlock(){
        return new Block(0,"0/01/2017", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    ischainValid(){
        for(let i = 1; i< this.chain.length; i++){
            const currentBlock = this.chain[1];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !==currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !==previousBlock){
                return false;
            }
        }
        return true;
    }
}

let savjeecion = newBlockchain();
savjeecion.addBlock(new Block(1, "10/07/2017", { amount: 4}));
savjeecion.addBlock(new Block(2, "10/07/2017",  { amount: 10}));

console.log(JSON.stringify(savjeeCion, null, 4));