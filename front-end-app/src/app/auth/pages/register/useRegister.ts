//* Custom hook.
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

    const { 
        errorMessage,
        onHandleOpenErrorMessage 
    } = useUiStore();

    const navigate = useNavigate();

    //* Methods.
    const onHandleButtonRegister = (): void => {

        //* Revisando si las contraseñas no coinciden.
        if ( stateForm.password !== stateForm.repeatPassword ) {
            onHandleOpenErrorMessage( 'Passwords do not match' );
            return;
        }

        //* Revisando si viene alguna propiedad vacía del formulario
        const attributesForm = Object.keys(stateForm);

        for ( const key of attributesForm ) {
            
            if ( stateForm[key as keyof typeof stateForm] === '' ) {
                onHandleOpenErrorMessage( `Attribute ${ key } is empty` );
                return;
            }

        }

        
    }

    const onHandleChangePageLogin = (): void => {
        navigate("/auth/login", {
            replace: true
        });
    }

    return {
        //* Attributes.
        stateForm,
        errorMessage,

        //* Methods.
        onInputChange,
        onInputReset,
        onHandleButtonRegister,
        onHandleChangePageLogin
    }

}
