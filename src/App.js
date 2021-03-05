import './App.css';
import { TransactionHistory } from './components/TransactionHistory';
import axios from 'axios';
import moment from 'moment';
import  { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function loadTransactionData() {
        let transactionAPI = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view'
        axios.defaults.headers.common = {
            "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
        };
        axios.post(transactionAPI, {
            "accountKey": "4cb6dbea-a84c-4b29-ad43-2c69182681ab"
        }).then(function (response) {
            setData(response.data)
            // console.log(moment.unix(response.data[0]['timestamp']).format('dddd MMMM Do YYYY, h:mm:ss a'));
        }).catch(function (error) {
            console.log(error);
        });
    }
    loadTransactionData()
}, [])
  return (
    <div className="App">
      <TransactionHistory data={data} setData={setData}>
        
      </TransactionHistory>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
