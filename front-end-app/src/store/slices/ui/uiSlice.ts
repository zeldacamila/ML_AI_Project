import { createSlice } from "@reduxjs/toolkit"; 

//* Types.
import { stateUiSlice } from "../../../types/interface";

const initialState: stateUiSlice = {
    errorMessage: false,
    contentErrorMessage: ''
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onOpenErrorMessage: ( state, { payload } ) => {
            state.errorMessage = true;
            state.contentErrorMessage = payload;
        },
        onCloseErrorMessage: ( state ) => {
            state.errorMessage = false;
            state.contentErrorMessage = '';
        }
    }
});

export const { 
    onOpenErrorMessage,
    onCloseErrorMessage
 } = uiSlice.actions;