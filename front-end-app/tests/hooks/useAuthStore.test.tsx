import React from "react";

import { act, renderHook } from '@testing-library/react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../../src/store/slices/auth/authSlice';
import { StateAuthSlice } from '../../src/types/interface';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { boardGameSlice } from '../../src/store/slices/boardGames/boardGameSlice';
import { authenticatedState, initialState } from "../__fixtures__/auth-states";
import boardGamesApi from "../../src/api/boardGamesApi";

//* Creando un mock del store de REDUX para colocar sólo lo que se necesita para AuthSlice.
const getMockStore = ( initialState: StateAuthSlice ) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer,
            boardGames: boardGameSlice.reducer,
        },
        preloadedState: {
            auth: { ...initialState },
            boardGames: {
                isLoading: false,
                isLoadingRecommendation: false,
                dataMachineLearningModel: {}, 
                recommendationsGames: [], 
                contentTextsChat: [],
                error: undefined,
            }
        }
    });
}

describe('Tests to custom hook [ useAuthStore.ts ]', () => {  

    test('Debe de regresar los valores por defecto que están en el return', () => {

        const mockStore = getMockStore( initialState );

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => 
            <React.StrictMode> 
                <Provider store={ mockStore }>{ children }</Provider> 
            </React.StrictMode>
        });

        expect( result.current ).toEqual({
            status: 'no-authenticated',
            user: undefined,
            isLoadingAuth: true,
            onHandleLoginUser: expect.any( Function ),       
            onHandleRegisterUser: expect.any( Function ), 
            onHandleResetAuth: expect.any( Function )
        });

    });
    
    test('El método [ onHandleLoginUser ] debe ejecutar el login correctamente', async() => {  

        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => 
            <React.StrictMode> 
                <Provider store={ mockStore }>{ children }</Provider> 
            </React.StrictMode>
        });

        //* Ejecutando función para iniciar sesión.
        await act(async() => {
            await result.current.onHandleLoginUser({ email: "test1@gmail.com", password: "password" });
        });

        const { status, user, isLoadingAuth } = result.current;

        expect({ status, user, isLoadingAuth }).toEqual({
            status: 'authenticated',
            user: { ...authenticatedState.user, id: expect.any( String ) },
            isLoadingAuth: true
        });

    });

    test('El método [ onHandleLoginUser ] debe ejecutar un error por credenciales incorrectas', async() => {

        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => 
            <React.StrictMode> 
                <Provider store={ mockStore }>{ children }</Provider> 
            </React.StrictMode>
        });

        //* Ejecutando función para iniciar sesión.
        await act(async() => {
            await result.current.onHandleLoginUser({ email: "test1@gmail.com", password: "password2" });
        });

        const { status, user, isLoadingAuth } = result.current;

        expect({ status, user, isLoadingAuth }).toEqual({
            status: 'no-authenticated',
            user: undefined,
            isLoadingAuth: true
        });

    });  

    test('El método [ onHandleRegisterUser ] debe de crear un usuario', async() => {

        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => 
            <React.StrictMode> 
                <Provider store={ mockStore }>{ children }</Provider> 
            </React.StrictMode>
        });

        const newUser = { username: "test2", email: "test2@gmail.com", password: "password2" };

        //* Creando un mock para simular el post para registrar y simular los datos regresados en la petición.
        const spy = jest.spyOn( boardGamesApi, 'post' ).mockReturnValue(
            Promise.resolve({
                data: {
                    username: newUser.username,
                    email: newUser.email,
                    id: "ID prueba",
                }
            })
        );

        //* Ejecutando función para registrar un usuario.
        await act(async() => {
            await result.current.onHandleRegisterUser(newUser);
        });

        const { status, user, isLoadingAuth } = result.current;

        expect({ status, user, isLoadingAuth }).toEqual({
            status: 'authenticated',
            user: {
                username: newUser.username,
                email: newUser.email,
                id: "ID prueba",
            },
            isLoadingAuth: true
        });

        //* Elimiando spy para no alterar o afectar las otras pruebas.
        spy.mockRestore();

    });

    test('El método [ onHandleRegisterUser ] debe fallar en la creación de usuario', async() => {

        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => 
            <React.StrictMode> 
                <Provider store={ mockStore }>{ children }</Provider> 
            </React.StrictMode>
        });

        const newUser = { username: "test1", email: "test1@gmail.com", password: "password" };

        //* Ejecutando función para registrar un usuario.
        await act(async() => {
            await result.current.onHandleRegisterUser( newUser );
        });

        const { status, user, isLoadingAuth } = result.current;

        expect({ status, user, isLoadingAuth }).toEqual({
            status: 'no-authenticated',
            user: undefined,
            isLoadingAuth: true
        });

    });

});