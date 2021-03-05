import './App.css';
import { TransactionHistory } from './components/TransactionHistory';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [transactionData, setTransactionData] = useState([])
  const [walletBalance, setWalletBalance] = useState([])

  useEffect(() => {
    async function loadPastTransactionData() {
      let transactionAPI = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view'
      axios.defaults.headers.common = {
        "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
      };
      axios.post(transactionAPI, {
        "accountKey": "4cb6dbea-a84c-4b29-ad43-2c69182681ab"
      }).then(function (response) {
        setTransactionData(response.data)
      }).catch(function (error) {
        console.log(error);
      });
    }
    async function getWalletBalance() {
      let walletBalAPI = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance'
      axios.defaults.headers.common = {
        "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
      };
      axios.post(walletBalAPI, {
        "accountKey": "4cb6dbea-a84c-4b29-ad43-2c69182681ab"
      }).then(function (response) {
        setWalletBalance(response.data)
      }).catch(function (error) {
        console.log(error);
      });

    }
    loadPastTransactionData()
    getWalletBalance()
  }, [])
  return (
    <div className="App">
      <TransactionHistory transactionData={transactionData} walletBalance={walletBalance}></TransactionHistory>
    </div>
  );
}

export default App;
