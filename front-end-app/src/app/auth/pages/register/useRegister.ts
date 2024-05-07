//* Custom hook.
import { useAuthStore } from "../../../../hooks/useAuthStore";
import { useForm } from "../../../../hooks/useForm"
import { useUiStore } from "../../../../hooks/useUiStore";

//* React router.
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  
    //* Attributes.
    const { stateForm, onInputChange, onInputReset } = useForm({  
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const { onHandleRegisterUser, isLoadingAuth } = useAuthStore();

    const { 
        errorMessage,
        onHandleOpenErrorMessage,
        onHandleCloseErrorMessage, 
    } = useUiStore();

    const navigate = useNavigate();

    //* Methods.
    const onHandleButtonRegister = (): void => {

        //* Revisando si las contraseñas no coinciden.
        if ( stateForm.password !== stateForm.repeatPassword ) {
            onHandleOpenErrorMessage( 'Passwords do not match' );
            return;
        }

        //* Revisando si viene alguna propiedad vacía del formulario.
        const attributesForm = Object.keys(stateForm);

        for ( const key of attributesForm ) {
            
            if ( stateForm[key as keyof typeof stateForm] === '' ) {
                onHandleOpenErrorMessage( `Attribute ${ key } is empty` );
                return;
            }

        }

        //* Aplicando proceso de registro usuario.
        onHandleRegisterUser({ 
            email: stateForm.email, 
            password: stateForm.password, 
            username: stateForm.username 
        });
        
    }

    const onHandleChangePageLogin = (): void => {
        onHandleCloseErrorMessage();

        navigate("/auth/login", {
            replace: true
        });
    }

    return {
        //* Attributes.
        stateForm,
        errorMessage,
        isLoadingAuth,

        //* Methods.
        onInputChange,
        onInputReset,
        onHandleButtonRegister,
        onHandleChangePageLogin
    }

}

