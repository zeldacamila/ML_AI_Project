import "./_chat.scss";

//* Components.
import { ResponseChat } from "../responseChat/response";

//* Custom hook.
import { useChat } from "./useChat";
import { Loading } from "../../../components/loading/loading";

export const ChatAI = () => {
  
    const { 
        contentTextsChat,
        isLoading, 
    } = useChat();

    return (
        <div className="chatAI">

            { /* Div donde aparecen los mensajes del chat */ }
            <div className="chatAI__chat">

                {
                    ( isLoading )
                    ? <Loading/>
                    : contentTextsChat.map( ({ content, nameEntity, type }) => 
                        <ResponseChat 
                            key={ type } 
                            content={ content } 
                            nameEntity={ nameEntity } 
                            type={ type }
                        /> 
                    )
                }

            </div>

        </div>
    );

}


/* Div que contiene el botón e input para enviar mensaje
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
*/ 