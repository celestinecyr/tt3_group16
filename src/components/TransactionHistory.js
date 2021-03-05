import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';

export const TransactionHistory = ({data, setData}) => {
    const test = [{'id':1},{'id':2}]
    return (
        <div>
            {data.map((t) => (
                <p key={t.transactionId}>{t.orderType}</p>
            ))}
        </div>


    )
}
