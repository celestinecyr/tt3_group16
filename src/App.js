import logo from './logo.svg';
import './App.css';
import React from 'react'
import axois from 'axios'
import axios from 'axios';

function App() {

  function DrawBuySell() {
    const [assetItem, setAssetItem] = React.useState(0)
    const [userAssetInput, setuserAssetInput] = React.useState("")
    const buySellField = React.useRef(null)

    let transactionAPI = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add'

    axios.defaults.headers.common = {
      "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
    };


    function handlePurchaseSubmit(e){
      e.preventDefault()
      axios.post(transactionAPI, {
          "accountKey" : "4cb6dbea-a84c-4b29-ad43-2c69182681ab",
          "orderType" : "BUY",
          "assetAmount" : userAssetInput
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    return (
      <>
      <form><input
        ref={buySellField}
        value={userAssetInput}
        onChange = {(e) => setuserAssetInput(e.target.value)}
      /></form>
      <button onClick={handlePurchaseSubmit}> Purchase {userAssetInput} assets</button> <button>Sell {userAssetInput} assets</button>
      </>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <DrawBuySell />
      </header>
    </div>
  );
}


export default App;
