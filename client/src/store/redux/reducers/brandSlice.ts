import { createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../entities/IBrand";

interface IBrandState {
    brands: IBrand[],
    selectedBrand: number | null,
    isLoading: boolean,
    error: string,
};

const initialState: IBrandState = {
    brands: [],
    selectedBrand: null,
    isLoading: false,
    error: "",
};

export const brandSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setBrands(state, action){
            state.brands = action.payload;
        },
        setSelectedBrand(state, action) {
            state.selectedBrand = action.payload;
        }
    },
});

export default brandSlice.reducer;