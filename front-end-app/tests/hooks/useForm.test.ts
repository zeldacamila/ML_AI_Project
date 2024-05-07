import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';

describe('Tests to custom hook [useForm.ts]', () => {  

    const initialFormTest ={
        email: "",
        password: ""
    };

    test('Debe de regresar los valores por defecto que están en el return', () => {  

        const { result } = renderHook( () => useForm( initialFormTest ) );
        
        //* Revisando que vengan los elementos en el objeto que regresa el customHook.
        expect( result.current ).toEqual({
            stateForm: initialFormTest,
            onInputChange: expect.any( Function ),
            onInputReset: expect.any( Function ),
            onInputChangeSelect: expect.any( Function )   
        });

    });

    test('Debe de modificar el valor de [email] del [stateForm] con la función onInputChange()', () => {  

        const { result } = renderHook( () => useForm( initialFormTest ) );
        const { onInputChange } = result.current;

        const newValueEmail = "mateo.olaya@gmail.com";

        act(() => {
            const inputEvent = { target: { name: "email", value: newValueEmail } } as React.ChangeEvent<HTMLInputElement>;
            onInputChange( inputEvent );
        });

        //* Revisando que el valor haya sido modificado.
        expect( result.current.stateForm.email ).toBe( newValueEmail );

    });

    test('Debe resetear los valores del [stateForm] por los iniciales', () => {  

        const { result } = renderHook( () => useForm( initialFormTest ) );
        const { onInputChange, onInputReset } = result.current;

        const newValueEmail = "mateo.olaya@gmail.com";

        act(() => {
            const inputEvent = { target: { name: "email", value: newValueEmail } } as React.ChangeEvent<HTMLInputElement>;
            onInputChange( inputEvent );

            onInputReset();
        });

        //* Revisando que el stateForm vuelva a su estado inicial.
        expect( result.current.stateForm ).toEqual( initialFormTest );

    });

});