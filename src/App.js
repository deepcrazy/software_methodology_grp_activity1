import React from 'react';
import './App.css';

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

export default App;
