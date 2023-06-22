import {createSlice} from '@reduxjs/toolkit';

export const totalAmount = createSlice({
    name:'total',
    initialState:{ value:{
        total: 0,
    }},
    reducers: {
        total : (state, action) => {
            state.value = action.payload
        },
    },
})


export const {total} = totalAmount.actions
export default totalAmount.reducer;
