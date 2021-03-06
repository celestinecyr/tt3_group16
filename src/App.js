import './App.css';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ViewUserDetails from './components/services/ViewUserDetails';
import TransactionHistory  from './components/TransactionHistory';



function App() {

  function DrawBuySell() {
    const [userAssetInput, setuserAssetInput] = React.useState("")
    const [transID, settransID] = React.useState('')
    const [orderType, setorderType] = React.useState('')
    const [timestamp, settimestamp] = React.useState('')
    const [assetSymbol, setassetSymbol] = React.useState('')
    const [assetAmount, setassetAmount] = React.useState('')
    const [assetPrice, setassetPrice] = React.useState('')
    const [cashAmount, setcashAmount] = React.useState('')
    const [assetBalance, setassetBalance] = React.useState('')
    const [cashBalance, setcashBalance] = React.useState('')
    const [transacSuccess, settransacSuccess] = React.useState(false)
    
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
        settransID(JSON.stringify(response.data.transactionId));
        setorderType(JSON.stringify(response.data.orderType));
        settimestamp(JSON.stringify(response.data.timestamp));
        setassetSymbol(JSON.stringify(response.data.assetSymbol));
        setassetAmount(JSON.stringify(response.data.assetAmount));
        setassetPrice(JSON.stringify(response.data.assetPrice));
        setcashAmount(JSON.stringify(response.data.cashAmount));
        setassetBalance(JSON.stringify(response.data.assetBalance));
        setcashBalance(JSON.stringify(response.data.cashBalance));
        settransacSuccess(true);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    function handleConfirmTransaction(e){
      e.preventDefault()
      settransacSuccess(false)
    }

    function handleSellSubmit(e){
      e.preventDefault()
      axios.post(transactionAPI, {
          "accountKey" : "4cb6dbea-a84c-4b29-ad43-2c69182681ab",
          "orderType" : "SELL",
          "assetAmount" : userAssetInput
      }).then(function (response) {
        settransID(JSON.stringify(response.data.transactionId));
        setorderType(JSON.stringify(response.data.orderType));
        settimestamp(JSON.stringify(response.data.timestamp));
        setassetSymbol(JSON.stringify(response.data.assetSymbol));
        setassetAmount(JSON.stringify(response.data.assetAmount));
        setassetPrice(JSON.stringify(response.data.assetPrice));
        setcashAmount(JSON.stringify(response.data.cashAmount));
        setassetBalance(JSON.stringify(response.data.assetBalance));
        setcashBalance(JSON.stringify(response.data.cashBalance));
        settransacSuccess(true);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return (
      <>
      <h1 class="display-2">Purchase assets</h1>
      <div className="input-group mb-3 container-sm">
      
        <input 
         type="number" class="form-control"
        placeholder='Enter the amount of assets you wish to transact'
        ref={buySellField}
        value={userAssetInput}
        onChange = {(e) => setuserAssetInput(e.target.value)}
      />
      </div>
      <div class="container">
      <button onClick={handlePurchaseSubmit} className='btn btn-success'> Purchase {userAssetInput} assets</button> 
      <button onClick={handleSellSubmit} className='btn btn-outline-danger'>Sell {userAssetInput} assets</button>
      </div>

      <div className={"transactionDetail" + ((transacSuccess) ? " overlay--show" : "")}>
       <h3>Transaction ID: {transID}</h3>
          <p>You have {orderType} {assetAmount} of asset {assetSymbol} for the price of {cashAmount}</p>
          <p>Each unit cost: {assetPrice}</p>
          <p>Remaining Cash balance: {cashBalance}</p>   
          <button onClick={handleConfirmTransaction}>Confirm</button>
      </div>

      </>
    );
  }


  return (

      <Router>
      
        <Switch>
          <Route path="/" exact component={Login}/>

          <ProtectedRoute path="/user-details" exact component={ViewUserDetails} />
          <ProtectedRoute path="/buyandsell" exact component={DrawBuySell} />
          <ProtectedRoute path="/pastTransaction" exact component={TransactionHistory}/>

        </Switch>
      </Router>
  );

  function getCurrentPriceFunction() {

    const[price, setPrice] = useState('');
    const[assetSymbol, setAssetSymbol] = useState('');
    const[timestamp, setTimestamp] = useState('');
  
    function loadTransactionData() {
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
  
    render(); {
      return (
        <div className="App">
              <button onClick="history.go(0)">Get updated price</button>
              <h3>Asset Symbol : {assetSymbol}</h3>
              <h3>Asset Price : {price}</h3>
              <h3>Timestamp : {timestamp}</h3>
        </div>
      );
    }
  }
}

export default App;