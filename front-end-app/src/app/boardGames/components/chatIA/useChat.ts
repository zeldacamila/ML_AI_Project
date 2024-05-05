import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";

export const useChat = () => {
    
    //* Attributes.
    const { isLoading, contentTextsChat } = useBoardGameStore();

    //* Methods.

    return {
        //* Attributes.
        contentTextsChat,
        isLoading,
        
        //* Methods.
    }

}
