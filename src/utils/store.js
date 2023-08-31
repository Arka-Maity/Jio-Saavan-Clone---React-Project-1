import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import loginSlice from "./loginSlice";

let store=configureStore({
    reducer:{
        search:searchSlice,
        login:loginSlice

    }
});

export default store;