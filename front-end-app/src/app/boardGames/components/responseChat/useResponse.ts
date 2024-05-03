import { useAuthStore } from "../../../../hooks/useAuthStore";
import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";

export const useResponse = () => {
  
    //* Attributes.
    const { onHandleSaveRecommendation } = useBoardGameStore();
    const { user } = useAuthStore();

    //* Methods.
    const onButtonSaveRecommendation = () => {

        const dataRecommendation = {
            description: "1. Catan: Juego de Tronos\n2. Zombicide: Black Plague\n3. Blood Rage\n4. Star Realms\n5. 7 Wonders: Duel",
            title: "Juego test 5"
        };

        //* Guardando recomendación en la base de datos y el arreglo del front end.
        onHandleSaveRecommendation( dataRecommendation, user!.id );

    }

    return {
        //* Attributes.

        //* Methods.
        onButtonSaveRecommendation,
    };

}
