import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores"
import { onCloseErrorMessage, onOpenErrorMessage } from "../store/slices/ui/uiSlice";

export const useUiStore = () => {

    //* Attributes.
    const { errorMessage, contentErrorMessage } = useSelector(( state: RootState ) => state.ui );
    const dispatch = useDispatch();

    //* Methods.
    const onHandleOpenErrorMessage = ( message: string ): void => {
        dispatch( onOpenErrorMessage( message ) );
    }

    const onHandleCloseErrorMessage = (): void => {
        dispatch( onCloseErrorMessage() );
    }

    return {
        //* Attributes.
        errorMessage,
        contentErrorMessage,

        //* Methods.
        onHandleOpenErrorMessage,
        onHandleCloseErrorMessage
    }

}
