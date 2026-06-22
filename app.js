const contractAddress =
"0x5a58e4f10f38743b3073a677d9bbd2d03a36141b";

const abi = [

  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }

];

const web3 =
    new Web3("http://127.0.0.1:7545");

const contract =
    new web3.eth.Contract(
        abi,
        contractAddress
    );

async function donate() {

    const accounts =
        await web3.eth.getAccounts();

    const name =
        document.getElementById("name").value;

    const amount =
        document.getElementById("amount").value;

    try {

        await contract.methods
            .donate(name)
            .send({
                from: accounts[0],
                value:
                web3.utils.toWei(amount, "ether")
            });

        document.getElementById("status").innerHTML =
            "Donation Successful";

    }

    catch(error) {

        console.log(error);

        document.getElementById("status").innerHTML =
            "Transaction Failed";
    }
}