import "./_textfield.scss";

//* Types.
import { TextFieldOptions } from "../../../../types/interface";

export const Textfield = ( options: TextFieldOptions ) => {
    
    const { typeInput, nameInput, placeHolder, valueInput, onChange } = options;

    return (
        <div className="textfield">
            <input 
                type={ typeInput }
                placeholder={ placeHolder }
                name={ nameInput }
                value={ valueInput }
                onChange={ onChange }
            />
        </div>
    );

}
