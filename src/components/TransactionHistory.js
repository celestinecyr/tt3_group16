import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';


export const TransactionHistory = ({ data, setData }) => {
    const test = [{ 'id': 1 }, { 'id': 2 }]
    return (
        <div>
            <table class="table">
                <tr>
                    <th>Transaction ID</th>
                    <th>Order Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Asset Symbol</th>
                    <th>Asset Price</th>
                    <th>Asset Amount</th>
                    <th>Cash Amount</th>
                </tr>

                {data.map((d) => (
                    <tr key={d.transactionId}>
                        <td>{d.transactionId}</td>
                        <td>{d.orderType}</td>
                        <td>{moment.unix(d.timestamp).format('MMMM do YYYY')}</td>
                        <td>{moment.unix(d.timestamp).format('h:mm:ss a')}</td>
                        <td>{d.assetSymbol}</td>
                        <td>{d.assetPrice}</td>
                        <td>{d.assetAmount}</td>
                        <td>{d.cashAmount}</td>
                    </tr>
                ))}
            </table>
        </div>


    )
}
