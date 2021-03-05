import React from 'react'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TransactionHistory = ({ transactionData, walletBalance }) => {
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
