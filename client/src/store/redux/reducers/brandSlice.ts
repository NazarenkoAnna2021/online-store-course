import { createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../entities/IBrand";

interface IBrandState {
    brands: IBrand[],
    selectedBrand: number | null,
    isLoading: boolean,
    error: string,
};

const initialState: IBrandState = {
    brands: [{ id: 0, name: 'apple' }, { id: 1, name: 'salmsung' }, { id: 2, name: 'panasoic' }],
    selectedBrand: null,
    isLoading: false,
    error: "",
};

export const brandSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setSelectedBrand(state, action) {
            state.selectedBrand = action.payload;
        }
    },
});

export default brandSlice.reducer;