import {createSlice} from '@reduxjs/toolkit';

export const maxValue = createSlice({
    name:'maxValue',
    initialState:{ value:{
        max: 0
    }},
    reducers: {
        max : (state, action) => {
            state.value = action.payload
        },
    },
})


export const {max} = maxValue.actions
export default maxValue.reducer;
