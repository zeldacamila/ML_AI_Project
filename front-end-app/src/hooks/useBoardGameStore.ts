import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores";

//* Actions Slice.
import { onUpdateContentChat } from "../store/slices/boardGames/boardGameSlice";
import { typeContextTextsChat } from "../types/type";

export const useBoardGameStore = () => {

    //* Attributes.
    const { 
        contentTextsChat,
        dataMachineLearningModel, 
        error, 
        isLoading 
    } = useSelector( (state: RootState) => state.boardGames );
    
    const dispatch = useDispatch();

    //* Methods.
    const onHandleAddResponseChat = ( content: typeContextTextsChat ): void => {
        dispatch( onUpdateContentChat( content ) );
    }
    
    return {
        //* Attributes.
        contentTextsChat,
        dataMachineLearningModel,
        error,
        isLoading,

        //* Methods.
        onHandleAddResponseChat,
    }

}
