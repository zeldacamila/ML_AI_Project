import { useBoardGameStore } from "../../../../hooks/useBoardGameStore";
import { useForm } from "../../../../hooks/useForm";

export const useChat = () => {
    
    //* Attributes.
    const { contentTextsChat, onHandleAddResponseChat } = useBoardGameStore();
    const { onInputChange, stateForm } = useForm({ text: '' });

    //* Methods.
    const onHandleSendTextChat = (): void => {

        //* Detiene el envío si el campo está vacío o tiene cierta cantidad de carácteres
        if ( !stateForm.text ) return;
        if ( stateForm.text.length < 3 ) return;

        onHandleAddResponseChat({ 
            content: stateForm.text, 
            nameEntity: 'Usuario', 
            type: 'user' 
        });
        
    }

    return {
        //* Attributes.
        contentTextsChat,
        stateForm,
        
        //* Methods.
        onHandleSendTextChat,
        onInputChange
    }

}
