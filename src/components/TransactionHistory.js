import React from 'react'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TransactionHistory() {
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
        <div class="container">
            <div class="row">
                <div class="col">
                    Asset Balance: {walletBalance.assetBalance}
                </div>
                <div class="col">
                    Cash Balance: {walletBalance.cashBalance}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header text-white bg-dark">Asset Bought</div>
                        <div class="card-body">
                            <table class="table table-sm">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Trans ID</th>
                                        <th>Date & Time</th>
                                        <th>Symbol</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        <th>Cash Amount</th>
                                    </tr>
                                </thead>

                                {transactionData.map((d) => (d.orderType == 'BUY' ?
                                    <tr key={d.transactionId}>
                                        <td>{d.transactionId}</td>
                                        <td>{moment.unix(d.timestamp).format('d/M/yy HH:mm')}</td>
                                        <td>{d.assetSymbol}</td>
                                        <td>{d.assetPrice}</td>
                                        <td>{d.assetAmount}</td>
                                        <td>{d.cashAmount}</td>
                                    </tr> : null
                                ))}
                                <tfoot></tfoot>
                            </table>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-header text-white bg-dark">Asset Sold</div>
                        <div class="card-body">
                            <table class="table table-sm">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Trans ID</th>
                                        <th>Date & Time</th>
                                        <th>Symbol</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        <th>Cash Amount</th>
                                    </tr>
                                </thead>

                                {transactionData.map((d) => (d.orderType == 'SELL' ?
                                    <tr key={d.transactionId}>
                                        <td>{d.transactionId}</td>
                                        <td>{moment.unix(d.timestamp).format('d/M/yy HH:mm')}</td>
                                        <td>{d.assetSymbol}</td>
                                        <td>{d.assetPrice}</td>
                                        <td>{d.assetAmount}</td>
                                        <td>{d.cashAmount}</td>
                                    </tr> : null
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
