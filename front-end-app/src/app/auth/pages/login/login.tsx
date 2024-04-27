import "./_login.scss";

//* Importing layout. 
import { AuthLayout } from "../../layout/authLayout";

//* Importing components.
import { Textfield } from "../../components/textfield/textfield";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";

//* CustomHook.
import { useLogin } from "./useLogin";

export const Login = () => {
  
    const { 
        stateForm,
        errorMessage,
        onInputChange, 
        onHandleButtonLogin, 
        onHandleButtonRegister 
    } = useLogin();

    return (
        <AuthLayout>

            <div className="loginPage">

                { /* Div que contiene el título */ }
                <div className="loginPage__titles">

                    <h3>Welcome Back!</h3>
                    <p>Enter your details to log in</p>

                </div>

                { /* Div que contiene el mensaje de error */ }
                { errorMessage && <ErrorMessage/> }

                { /* Div que contiene los inputs */ }
                <div className="loginPage__inputs">

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

                </div>

                { /* Div que contiene los botones */ }
                <div className="loginPage__buttons">

                    <button type="button" onClick={ onHandleButtonRegister }>
                        Register
                    </button>

                    <button type="button" onClick={ onHandleButtonLogin }>
                        Login
                    </button>

                </div>

            </div>

        </AuthLayout>
    );

}
