import "./_chat.scss";

//* Components.
import { ResponseChat } from "../responseChat/response";

//* Custom hook.
import { useChat } from "./useChat";

export const ChatAI = () => {
  
    const { 
        contentTextsChat, 
        onHandleSendTextChat, 
        onInputChange, 
        stateForm, 
    } = useChat();

    return (
        <div className="chatAI">

            { /* Div donde aparecen los mensajes del chat */ }
            <div className="chatAI__chat">

                {
                    contentTextsChat.map( ({ content, nameEntity, type }) => 
                        <ResponseChat 
                            key={ type } 
                            content={ content } 
                            nameEntity={ nameEntity } 
                            type={ type }
                        /> 
                    )
                }

            </div>

            { /* Div que contiene el botón e input para enviar mensaje */ }
            <div className="chatAI__button">

                <input 
                    type="text"
                    name="text"
                    value={ stateForm.text }
                    onChange={ onInputChange } 
                    placeholder="Ask from boardGamesAI"
                />

                <button onClick={ onHandleSendTextChat }>
                    Send
                </button>
                
            </div>

        </div>
    );

}
