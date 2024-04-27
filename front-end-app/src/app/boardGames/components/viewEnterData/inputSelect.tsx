import "./_inputSelect.scss";

//* Importing react select.
import Select from 'react-select';

//* Type.
import { InputSelectOptions } from "../../../../types/interface";

export const InputSelect = ( optionsProps: InputSelectOptions ) => {
  
    const { dataOptions, title, onInputChange, nameInput } = optionsProps;

    return (
        <div className="inputSelect">

            <h1>{ title }</h1>
            <Select 
                options={ dataOptions }
                placeholder=""
                isSearchable={ false }
                onChange={ ( selected ) => 
                    onInputChange( { value: selected!.value, name: nameInput } ) 
                } 
                styles={{  
                    control: ( styles ) => {
                        return {
                            ...styles,
                            borderRadius: 5,
                            border: "1px solid #393A42",
                            backgroundColor: "transparent",
                            width: "6em"
                        }
                    },
                    menu: ( styles ) => {
                        return {
                            ...styles,
                            maxHeight: "8em",
                            overflowY: "auto"
                        }
                    },
                    option: ( styles ) => {
                        return {
                            ...styles,
                            fontFamily: 'Poppins',
                            fontSize: '0.8em',
                            '&:hover': {
                                backgroundColor: '#a26de7',
                            },
                        }
                    },
                    singleValue: ( styles ) => {
                        return {
                            ...styles,
                            color: "#FFFFFF",
                            fontFamily: "Poppins",
                            fontSize: "0.9em"
                        }
                    },
                    indicatorSeparator: ( styles ) => { //* Propiedades línea separador
                        return {
                            ...styles,
                            backgroundColor: "#393A42"
                        }
                    },
                    dropdownIndicator: ( styles ) => { //* Propiedades flecha
                        return {
                            ...styles,
                            color: "#FFFFFF"
                        }
                    }
                }}
            />

        </div>
    );

}
