import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducstHomeThunk=createAsyncThunk("home/products",async ()=>{
    const response=await axios.get("http://localhost:5800/products/")
    return response.data
})
export const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[]

    },
    reducer:[],
    extraReducers:builder=>
        builder
    .addCase(getProducstHomeThunk.fulfilled,(state,action)=>{
        state.loading=false
        state.products=action.payload
    })
    .addCase(getProducstHomeThunk.pending,(state)=>{
        state.loading=true
    })
    .addCase(getProducstHomeThunk.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
})
export default productSlice.reducer