//* Custom Hook.
import { useAuthStore } from "../../../../hooks/useAuthStore";
import { useForm } from "../../../../hooks/useForm"
import { useUiStore } from "../../../../hooks/useUiStore";

//* React router.
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    
    //* Attributes.
    const { stateForm, onInputChange } = useForm({ email: '', password: '' });
    const { errorMessage, onHandleOpenErrorMessage } = useUiStore();
    const { onHandleLoginUser, isLoadingAuth } = useAuthStore();
    const navigate = useNavigate();

    //* Methods.
    const onHandleButtonLogin = (): void => {

        //* Revisando que los campos no vengan vacíos.
        if ( !stateForm.email ) {
            onHandleOpenErrorMessage('Field [email] is empty');
            return;
        } else if ( !stateForm.password ) {
            onHandleOpenErrorMessage('Field [password] is empty');
            return;
        }

        //* Ejecutando proceso de 
        onHandleLoginUser({ 
            email: stateForm.email, 
            password: stateForm.password 
        });
    
    }

    const onHandleButtonRegister = (): void => {
        navigate("/auth/register", {
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
        onHandleButtonLogin,
        onHandleButtonRegister,
    }

}
