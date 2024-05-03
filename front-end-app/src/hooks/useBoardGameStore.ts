import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores";

//* Actions Slice.
import { 
    onLoadRecommendations,
    onResetBoardGameSlice, 
    onUpdateContentChat 
} from "../store/slices/boardGames/boardGameSlice";

//* Types.
import { typeContextTextsChat, typeRecommendation } from "../types/type";

//* API.
import boardGamesApi from "../api/boardGamesApi";

export const useBoardGameStore = () => {

    //* Attributes.
    const { 
        contentTextsChat,
        dataMachineLearningModel, 
        recommendationsGames,
        error, 
        isLoading 
    } = useSelector( (state: RootState) => state.boardGames );
    
    const dispatch = useDispatch();

    //* Methods.
    const onHandleAddResponseChat = ( content: typeContextTextsChat ): void => {
        dispatch( onUpdateContentChat( content ) );
    }

    const onHandleResetBoardGames = (): void => {
        dispatch( onResetBoardGameSlice() );
    }

    const onHandleLoadRecommendations = async( recommendations: typeRecommendation[] ) => {
        dispatch( onLoadRecommendations( recommendations ) );
    }

    const onHandleSaveRecommendation = async( recommendation: typeRecommendation, idUser: string ) => {
        
        try {
            
            //* Consumiendo endpoint para guardar recomendación.
            const { data } = await boardGamesApi.post( `/recommendations?user_id=${ idUser }`, { ...recommendation } );

            //* Ejecutando acción para guardar nueva recomendación en el arreglo.
            dispatch( onLoadRecommendations( [data] ) );

        } catch (error) {
            
        }

    }
    
    return {
        //* Attributes.
        contentTextsChat,
        dataMachineLearningModel,
        error,
        isLoading,
        recommendationsGames,

        //* Methods.
        onHandleAddResponseChat,
        onHandleResetBoardGames,
        onHandleLoadRecommendations,
        onHandleSaveRecommendation,
    }

}
