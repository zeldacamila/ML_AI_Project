import "./_errorMessage.scss";

//* Importing multimedia content.
import iconError from "../../../../images/advertencia.png";

//* Custom Hook.
import { useUiStore } from "../../../../hooks/useUiStore";

export const ErrorMessage = () => {

    const { contentErrorMessage, onHandleCloseErrorMessage } = useUiStore();

    return (
        <div className="errorMessage">
            <div>
                <img src={ iconError } alt="" />
                <h2>{ contentErrorMessage }</h2>
            </div>
            <button onClick={ onHandleCloseErrorMessage }> Close </button>
        </div>
    );

}
