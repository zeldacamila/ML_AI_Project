import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores"

//* Slices.

export const useAuthStore = () => {
  
    //* Attributes.
    const { error, status, user } = useSelector( ( state: RootState ) => state.auth );
    const dispatch = useDispatch();

    //* Methods.

    return {
        //* Attributes.
        error,
        status,
        user,

        //* Methods.
    }

}
