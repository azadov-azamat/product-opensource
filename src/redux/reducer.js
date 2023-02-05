import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {toast} from "react-toastify"
import {http_no_auth} from "../utils/api"

export const createProduct = createAsyncThunk('reducer/createProduct', async (data, {rejectWithValue}) => {
    try {
        const response = await http_no_auth.post('/product', data)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const updateProduct = createAsyncThunk('reducer/updateProduct', async (data, {rejectWithValue}) => {
    try {
        const response = await http_no_auth.put('/product', data)
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getProductList = createAsyncThunk('reducer/getProductList', async (data, {rejectWithValue}) => {
    try {
        const response = await http_no_auth.get(`/product`, {
            params: data
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getProductTypeList = createAsyncThunk('reducer/getProductTypeList', async (data, {rejectWithValue}) => {
    try {
        const response = await http_no_auth.get(`/product/get-product-types`, {
            params: data
        })
        if (response.data?.data === null) return rejectWithValue(response.data.message)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteProductById = createAsyncThunk('reducer/deleteProductById', async (byId,{rejectWithValue}) => {
    try {
        const response = await http_no_auth.delete(`/product/${byId}`)
        return response.data
    } catch (error) {
        toast.error(error.message)
        console.log(error)
        return rejectWithValue(error.message)
    }
})

export const reducerSlice = createSlice({
    name: 'reducer',
    initialState: {
        products: [],
        proTypes: [],
        byId: null,

        currentPage: 0,
        countItem: 0,
        totalItem: 0,
        totalCount: 0,
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [getProductList.fulfilled]: (state, action) => {
            state.products = action.payload
            state.isLoading = false
        },
        [getProductList.pending]: (state) => {
            state.isLoading = true
        },
        [getProductList.rejected]: (state) => {
            toast.error("Error")
            state.isLoading = false
        },

        [getProductTypeList.fulfilled]: (state, actions) => {
            state.proTypes = actions.payload
            state.isLoading = false
        },
        [getProductTypeList.pending]: (state) => {
            state.isLoading = true
        },
        [getProductTypeList.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const {} = reducerSlice.actions
export default reducerSlice.reducer