import { useAuthStore } from "../../../../hooks/useAuthStore";
import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";

export const useResponse = ( content: string[] | string ) => {
  
    //* Attributes.
    const { onHandleSaveRecommendation } = useBoardGameStore();
    const { user } = useAuthStore();

    //* Methods.
    const onButtonSaveRecommendation = () => {

       if ( Array.isArray( content ) ) {

            const dataRecommendation = {
                description: content.join("-"),
                title: `${content[0]}-${ content[1] }`,
            };

            //* Guardando recomendación en la base de datos y el arreglo del front end.
            onHandleSaveRecommendation( dataRecommendation, user!.id );

       }

    }

    return {
        //* Attributes.

        //* Methods.
        onButtonSaveRecommendation,
    };

}
