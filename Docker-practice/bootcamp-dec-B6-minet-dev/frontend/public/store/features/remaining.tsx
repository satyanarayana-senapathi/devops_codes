import {createSlice} from '@reduxjs/toolkit';

export const remainingAmount = createSlice({
    name:'Remaining',
    initialState:{ value:{
        remaining: 34000,
    }},
    reducers: {
        remaining : (state, action) => {
            state.value = action.payload
        },
    },
})


export const {remaining} = remainingAmount.actions
export default remainingAmount.reducer;
