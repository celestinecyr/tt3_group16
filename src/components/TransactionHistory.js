import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';


export const TransactionHistory = ({ data, setData }) => {
    const test = [{ 'id': 1 }, { 'id': 2 }]
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">Buy</div>
                        <div class="card-body">
                            <table class="table table-sm">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Date & Time</th>
                                        <th>Asset Symbol</th>
                                        <th>Asset Price</th>
                                        <th>Asset Amount</th>
                                        <th>Cash Amount</th>
                                    </tr>
                                </thead>

                                {data.map((d) => (d.orderType == 'BUY' ?
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
                <div class="col">
                    <div class="card">
                        <div class="card-header">Sell</div>
                        <div class="card-body">
                            <table class="table table-sm">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Date & Time</th>
                                        <th>Asset Symbol</th>
                                        <th>Asset Price</th>
                                        <th>Asset Amount</th>
                                        <th>Cash Amount</th>
                                    </tr>
                                </thead>

                                {data.map((d) => (d.orderType == 'SELL' ?
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
