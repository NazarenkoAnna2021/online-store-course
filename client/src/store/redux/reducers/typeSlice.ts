import { createSlice } from "@reduxjs/toolkit";
import { IType } from "../../../entities/IType";

interface ITypeState {
    types: IType[],
    selectedType: number | null,
    isLoading: boolean,
    error: string,
};

const initialState: ITypeState = {
    types: [{id: 0, name: 'холодильники'}, {id: 1, name: 'телефоны'}, {id: 2, name: 'пылесосы'}],
    selectedType: null,
    isLoading: false,
    error: "",
};

export const typeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setSelectedType(state, action){
            state.selectedType = action.payload;
        }
    },
});

export default typeSlice.reducer;