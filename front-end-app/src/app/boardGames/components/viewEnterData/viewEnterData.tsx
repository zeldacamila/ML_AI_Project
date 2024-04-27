import "./_viewEnterData.scss";

//* Importing components
import { InputSelect } from "./inputSelect";

//* Custom hook.
import { useViewEnterData } from "./useViewEnterData";

export const ViewEnterData = () => {
  
    const { dataInputSelects, onInputChangeSelect, onHandleStart } = useViewEnterData();

    return (
        <div className="viewEnterData">
            
            <h1>Enter data to interact <span>with AI</span></h1>

            { /* Div que contiene los inputs */ }
            <div className="viewEnterData__containerInputs">

                {
                    dataInputSelects.map( ({ data, title, name }) => 
                        <InputSelect
                            key={ title } 
                            title={ title } 
                            dataOptions={ data }
                            nameInput={ name }
                            onInputChange={ onInputChangeSelect }
                        /> 
                    )
                }

            </div>

            { /* Div que contiene el botón para ejecutar */ }
            <div className="viewEnterData__containerButton">

                <button onClick={ onHandleStart }>
                    Start
                </button>
                
            </div>

        </div>
    );

}
