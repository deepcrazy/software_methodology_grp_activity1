import React from 'react';
import './App.css';

const ethers = require('ethers')

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
    sendTransaction(amount)
    setSent(true)
  }
  return (
    <div className="App">
      <header className="App-header">
      <p>Send Ether to yourself!</p>
      <p>a useless dApp that uses Metamask</p>
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

const sendTransaction = (value) => //return promise for async/await
  new Promise(async (resolve, reject) => {
    try {
      const accounts = await window.ethereum.enable()
      const provider = ethers.getDefaultProvider("ropsten")
      const gasPrice = await provider.getGasPrice()

      let transactionParameters = {
        to: accounts[0],
        from: accounts[0],
        value: ethers.utils.parseEther("1.0").toHexString(),
      }
      console.log('Sending transaction with params:', transactionParameters)
      const response = await window.ethereum.send('eth_sendTransaction', [
        transactionParameters,
      ])

      console.log(
        'Sent transaction: %o',
        `https://ropsten.etherscan.io/tx/${response.result}`,
      )
      resolve(true)
    } catch (e) {
      console.log(e)
      reject(false)
    }
  })

export default App;
