import './App.css';
//import { TransactionHistory } from './components/TransactionHistory';
import axios from 'axios';
import moment from 'moment';
import  { useState, useEffect } from 'react'

function App() {
  
  const [data, setData] = useState()
  let assetSymbol = null;
  let price = null;
  let timestamp = null;

  useEffect(() => {
    async function loadTransactionData() {
        let priceAPI = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current'
        axios.defaults.headers.common = {
            "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
        };
        axios.post(priceAPI, {}).then(function (response) {
            // setData(response.data)
            //console.log(moment.unix(response.data[0]['timestamp']).format('dddd MMMM Do YYYY, h:mm:ss a'));
            assetSymbol = response.data.assetSymbol;
            price = response.data.price;
            timestamp = response.data.timestamp;
            console.log(response.data);

            //return response.data; //return this Object instead of printing

        }).catch(function (error) {
            console.log(error);
        });
    }
    //loadTransactionData()
}, [])
  return (
    <div>
          <button onClick="loadTransactionData()">Get Asset Price.</button>
          <h1>{`${this.assetSymbol} ${this.price} ${this.timestamp}`}</h1>
	</div>
  );
}

export default App;
