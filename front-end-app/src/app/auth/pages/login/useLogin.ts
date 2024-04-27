//* Custom Hook.
import { useForm } from "../../../../hooks/useForm"
import { useUiStore } from "../../../../hooks/useUiStore";

//* React router.
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    
    //* Attributes.
    const { stateForm, onInputChange } = useForm({ email: '', password: '' });
    const { errorMessage, onHandleOpenErrorMessage } = useUiStore();
    const navigate = useNavigate();

    //* Methods.
    const onHandleButtonLogin = (): void => {
        console.log( stateForm );
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

        //* Methods.
        onInputChange,
        onHandleButtonLogin,
        onHandleButtonRegister
    }

}
