import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/stores";

//* Actions Slice.
import { 
    onErrorBoardGame,
    onLoadRecommendations,
    onLoadingBoardGames,
    onLoadingRecommendation,
    onResetBoardGameSlice, 
    onUpdateContentChat 
} from "../store/slices/boardGames/boardGameSlice";

//* Types.
import { typeContextTextsChat, typeDataMachineLearning, typeRecommendation } from "../types/type";

//* API.
import boardGamesApi from "../api/boardGamesApi";

export const useBoardGameStore = () => {

    //* Attributes.
    const { 
        contentTextsChat,
        dataMachineLearningModel, 
        recommendationsGames,
        error, 
        isLoading,
        isLoadingRecommendation, 
    } = useSelector( (state: RootState) => state.boardGames );
    
    const dispatch = useDispatch();

    //* Methods.
    const onHandleSendDataModelAI = async( dataModelAI: typeDataMachineLearning ): Promise<void> => {
        
        dispatch( onLoadingBoardGames() );

        try {
            
            //* Consumiendo endpoint para enviar datos al modelo y la IA.
            const { data } = await boardGamesApi.post( '/games/recommend-boardgames', dataModelAI );

            //* Acomodando los datos que envía la IA desde el backend.
            const dataResponseAI = {
                type: data.type, 
                nameEntity: "BoardGamesAI", 
                content: data.content,
            };

            dispatch( onUpdateContentChat( dataResponseAI ) );

        } catch (error) {
            dispatch( onErrorBoardGame() );
        }

    }

    const onHandleAddResponseChatAI = ( content: typeContextTextsChat ): void => {

        dispatch( onUpdateContentChat( content ) );

    }

    const onHandleResetBoardGames = (): void => {
        dispatch( onResetBoardGameSlice() );
    }

    const onHandleLoadRecommendations = async( recommendations: typeRecommendation[] ) => {
        dispatch( onLoadRecommendations( recommendations ) );
    }

    const onHandleSaveRecommendation = async( recommendation: typeRecommendation, idUser: string ) => {
        
        dispatch( onLoadingRecommendation() );

        try {
            
            //* Consumiendo endpoint para guardar recomendación.
            const { data } = await boardGamesApi.post( `/recommendations?user_id=${ idUser }`, { ...recommendation } );

            //* Ejecutando acción para guardar nueva recomendación en el arreglo.
            dispatch( onLoadRecommendations( [data] ) );

        } catch (error) {
            dispatch( onErrorBoardGame() );
        }

    }
    
    return {
        //* Attributes.
        contentTextsChat,
        dataMachineLearningModel,
        error,
        isLoading,
        isLoadingRecommendation,
        recommendationsGames,

        //* Methods.
        onHandleSendDataModelAI,
        onHandleResetBoardGames,
        onHandleLoadRecommendations,
        onHandleSaveRecommendation,
        onHandleAddResponseChatAI
    }

}
