import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'user',
    initialState: "edward",
    reducers: {
        changeUser:(state,action)=>{
            return action.payload
        }
    }
})

export const { changeUser } = mySlice.actions;

export default mySlice.reducer;
