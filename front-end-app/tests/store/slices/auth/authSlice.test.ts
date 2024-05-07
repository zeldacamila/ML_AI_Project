import { authSlice, onChecking, onLogin, onLogout } from '../../../../src/store/slices/auth/authSlice';
import { authenticatedState, initialState, noAuthenticatedState } from '../../../__fixtures__/auth-states';
import { testUserCredentials } from '../../../__fixtures__/testUser';

describe('Tests to [ authSlice.ts]', () => {  

    test('Debe de regresar los valores del estado inicial', () => {  

        expect( authSlice.getInitialState() ).toEqual( initialState );

    });

    test('Debe de ejecutar el action [ onLogin ]', () => {

        const state = authSlice.reducer( initialState, onLogin( testUserCredentials ) );

        expect( state ).toEqual( authenticatedState );

    });

    test('Debe de ejecutar el action [ onLogout ] si el usuario está autenticado', () => { 

        const state = authSlice.reducer( authenticatedState, onLogout() );

        expect( state ).toEqual( noAuthenticatedState );

    });

    test('Debe de ejecutar el action [ onChecking ] para el estado de cargando', () => {

        const state = authSlice.reducer( initialState, onChecking() );

        expect( state.isLoadingAuth ).toBeFalsy();

    });

});