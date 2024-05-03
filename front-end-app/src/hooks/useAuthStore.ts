import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores"

//* Slices.
import { onChecking, onLogin, onLogout, onResetAuth } from "../store/slices/auth/authSlice";
import { onOpenErrorMessage } from "../store/slices/ui/uiSlice";

//* API with AXIOS.
import axios from "axios";
import boardGamesApi from "../api/boardGamesApi";

//* Types or interfaces.
import { typeDataLogin, typeDataRegister } from "../types/type";
import { useBoardGameStore } from "./useBoardGameStore";

export const useAuthStore = () => {
  
    //* Attributes.
    const { status, user, isLoadingAuth } = useSelector( ( state: RootState ) => state.auth );
    const dispatch = useDispatch();

    const { onHandleLoadRecommendations } = useBoardGameStore();

    //* Methods.
    const onHandleLoginUser = async( dataLogin: typeDataLogin ): Promise<void> => {

        //* Invocando proceso de espera.
        dispatch( onChecking() );

        try {
            
            //* Consumiendo endpoint. 
            const { data } = await boardGamesApi.post( '/user/login/', { ...dataLogin } );

            //* Pasándo datos al Redux de Auth para logear al usuario.
            dispatch( onLogin( { username: data.username, email: data.email, id: data.id } ) );

            //* Pasándo arreglo de recomendaciones que trae el usuario al iniciar sesión.
            onHandleLoadRecommendations( data.recommendations );

        } catch (error) {
            
            if ( axios.isAxiosError(error) ) {
                const { response } = error;
                dispatch( onLogout() );
                dispatch( onOpenErrorMessage( response?.data.detail ) );
            }

        }

    }

    const onHandleRegisterUser = async( dataRegister: typeDataRegister ): Promise<void> => {

        //* Invocando proceso de espera.
        dispatch( onChecking() );

        try {
            
            //* Consumiendo endpoint.
            const { data } = await boardGamesApi.post( '/user/register/', { ...dataRegister } );

            //* Pasando datos al Redux de Auth para logear al usuario.
            dispatch( onLogin( { username: data.username, email: data.email, id: data.id } ) );

        } catch (error) {
            
            if ( axios.isAxiosError(error) ) {
                const { response } = error;
                dispatch( onLogout() );
                dispatch( onOpenErrorMessage( response?.data.detail ) );

                //* Limpiando el error después de un tiempo
                //setTimeout(() => {
                //    dispatch( onClearErrorMessage() );
                //}, 10);
            }

        }

    }

    const onHandleResetAuth = () => {
        dispatch( onResetAuth() )
    }

    return {
        //* Attributes.
        status,
        user,
        isLoadingAuth,

        //* Methods.
        onHandleLoginUser,
        onHandleRegisterUser,
        onHandleResetAuth
    }

}
