import { createSlice } from "@reduxjs/toolkit";
import { StateAuthSlice } from "../../../types/interface";

const initialState: StateAuthSlice = {
    status: 'no-authenticated', //checking, authenticated
    user: undefined,
    isLoadingAuth: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: ( state ) => {
            state.isLoadingAuth = false;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.isLoadingAuth = true;
        },
        onLogout: ( state ) => {
            state.status = 'no-authenticated';
            state.user = undefined;
            state.isLoadingAuth = true;
        },
        onResetAuth: ( state ) => {
            state.status = 'no-authenticated';
            state.user = undefined;
            state.isLoadingAuth = true;
        }
    }
});

export const { 
    onChecking,
    onLogin,
    onLogout,
    onResetAuth,
 } = authSlice.actions;