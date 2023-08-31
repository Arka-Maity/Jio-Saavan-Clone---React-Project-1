import { createSlice } from "@reduxjs/toolkit";

let searchSlice=createSlice({
    name:"search",
    initialState:{
        text:""
    },
    reducers:{
        searchText:(state,action)=>{
            state.text=action.payload
        }
    }
})

export const{searchText}=searchSlice.actions;
export default searchSlice.reducer

