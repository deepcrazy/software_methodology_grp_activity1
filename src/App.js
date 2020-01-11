import React from 'react';
import './App.css';

const ethers = require('ethers')
const url = "http://127.0.0.1:8545";	//	URL on which ganache is running
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")  //	URL on which ganache is running

const privateKey = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d'   // private key picked up from ganache-cli -d
const wallet = new ethers.Wallet(privateKey, provider)     //  Creating a new wallet

const from_address = "0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0"
const to_address = "0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b"

function App() {
  const [amount, setAmount] = React.useState("")
  const [sent, setSent] = React.useState(false)
  const changeAmount = event => {
    if (Number(event.target.value) || event.target.value === "") {
      setAmount(event.target.value)
      setSent(false)
    }
  }
  const sendAmount = () => {
    setSent(true)
  }
  return (
    <div className="App">
      <header className="App-header">
      <label>
        Amount:
        <input type="text" name="name" value={amount} onChange={changeAmount}/>
      </label>
      <button onClick={sendAmount} disabled={amount === "" || sent}>Send</button>
      {sent && <p>Transaction Sent!</p>}
      </header>
    </div>
  );
}

function backend (amount) {

  wallet.sendTransaction({
    to: "0x3E5e9111Ae8eB78Fe1CC3bb8915d5D461F3Ef9A9",
    value: ethers.utils.parseEther(amount)
  }).then((response) => {
    console.log(response)
  })

  window.onload = () => {
    provider = new ethers.providers.JsonRpcProvider(url);
  };

  return(
    <div>
      <h4> Ether transferred..!!</h4>
    </div>
  )
}

export default App;
