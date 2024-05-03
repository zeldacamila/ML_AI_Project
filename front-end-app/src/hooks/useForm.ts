import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialStateForm: T ) => {
  
    //* Attributes.
    const [stateForm, setStateForm] = useState( initialStateForm );

    //* Methods.
    const onInputChange = ( { target }: ChangeEvent<HTMLInputElement> ): void => {
        const { name, value } = target;
        setStateForm({ ...stateForm, [name]: value });
    }

    const onInputChangeSelect = ( event: { value: string, name: string } ): void => {
        const { name, value } = event;
        setStateForm({ ...stateForm, [name]: value });
    }

    const onInputReset = (): void => {
        setStateForm({ ...initialStateForm });
    }

    return {
        //* Attributes.
        stateForm,

        //* Methods.
        onInputChange,
        onInputReset,
        onInputChangeSelect
    }

}
