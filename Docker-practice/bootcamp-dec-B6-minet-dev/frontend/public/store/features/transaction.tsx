import {createSlice} from '@reduxjs/toolkit';

export const transactionFee = createSlice({
    name:'TransactionFee',
    initialState:{ value:{
        fee: 0.01
    }},
    reducers: {
        fee : (state, action) => {
            state.value = action.payload
        },
    },
})


export const {fee} = transactionFee.actions
export default transactionFee.reducer;
