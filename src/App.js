import './App.css';
//import { PriceData } from './components/PriceData';
import axios from 'axios';
import  { useState, useEffect } from 'react'

function App() {

  const[price, setPrice] = useState('');
  const[assetSymbol, setAssetSymbol] = useState('');
  const[timestamp, setTimestamp] = useState('');

  function loadTransactionData() {
    
  }
  useEffect(() => {
    async function loadTransactionData() {
        let priceAPI = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current'
        axios.defaults.headers.common = {
            "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
        };
        axios.post(priceAPI, {}).then(function (response) {
            setPrice(JSON.stringify(response.data.price));
            setAssetSymbol(JSON.stringify(response.data.assetSymbol));
            setTimestamp(JSON.stringify(response.data.timestamp));
            console.log(response.data);
            //return response.data; //return this Object instead of printing

        }).catch(function (error) {
            console.log(error);
        });
    }
    loadTransactionData()
}, [])
  return (
    <div className="App">
          <button onClick="window.location.reload();">Get updated price</button>
          <h3>Asset Symbol : {assetSymbol}</h3>
          <h3>Asset Price : {price}</h3>
          <h3>Timestamp : {timestamp}</h3>
    </div>
  );
}

export default App;
