import "./_register.scss";

//* Layout.
import { AuthLayout } from "../../layout/authLayout";

//* Components.
import { Textfield } from "../../components/textfield/textfield";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";
import { Loading } from "../../../components/loading/loading";

//* Custom hook.
import { useRegister } from "./useRegister";

export const Register = () => {
  
    const { 
        stateForm,
        errorMessage,
        isLoadingAuth, 
        onInputChange, 
        onHandleButtonRegister, 
        onHandleChangePageLogin 
    } = useRegister();

    //* Pantalla de carga.
    if ( !isLoadingAuth ) {

        return (
            <AuthLayout>

                <Loading/>

            </AuthLayout>
        );

    }

    return (
        <AuthLayout>

            <div className="registerPage">

                { /* Div que contiene el título */ }
                <div className="registerPage__titles">

                    <h3>Register Now!!</h3>
                    <p>Enter your details to register</p>

                </div>

                { /* Div que contiene el mensaje de error */ }
                { errorMessage && <ErrorMessage/> }

                { /* Div que contiene los inputs */ }
                <div className="registerPage__inputs">

                    <Textfield 
                        typeInput="text"
                        placeHolder="Username"
                        nameInput="username"
                        valueInput={ stateForm.username }
                        onChange={ onInputChange }
                    />

                    <Textfield 
                        typeInput="text"
                        placeHolder="Email"
                        nameInput="email"
                        valueInput={ stateForm.email }
                        onChange={ onInputChange }
                    />
                    
                    <Textfield 
                        typeInput="password"
                        placeHolder="Password"
                        nameInput="password"
                        valueInput={ stateForm.password }
                        onChange={ onInputChange }
                    />

                    <Textfield 
                        typeInput="password"
                        placeHolder="Repeat password"
                        nameInput="repeatPassword"
                        valueInput={ stateForm.repeatPassword }
                        onChange={ onInputChange }
                    />

                </div>

                { /* Div que contiene los botones */ }
                <div className="registerPage__buttons">

                    <button type="button" onClick={ onHandleChangePageLogin }>
                        Login
                    </button>

                    <button type="button" onClick={ onHandleButtonRegister }>
                        Register
                    </button>

                </div>

            </div>

        </AuthLayout>
    );

}
