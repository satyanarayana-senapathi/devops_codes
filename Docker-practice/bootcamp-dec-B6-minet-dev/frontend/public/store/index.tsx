import {  configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './features/cryptoData'
import maxValue from './features/maxValue'
import transactionFee from './features/transaction';
import totalAmount from './features/totalAmount';
import remainingAmount from './features/remaining';
import WatchSlice from './features/WatchList'


export const store:any = configureStore({
  reducer: {
    WatchSlice:WatchSlice,
    cryptoData: cryptoReducer,
    maxValue: maxValue,
    transaction : transactionFee,
    totalAmountDetails : totalAmount,
    remainingAmountDetails: remainingAmount
  }
})



