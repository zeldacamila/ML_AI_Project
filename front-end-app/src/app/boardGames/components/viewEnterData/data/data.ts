const dataInputs = {
    max_players: [ "4", "5", "7", "8", "9" ],
    min_players: [ "3", "4", "2", "3", "4", "5" ],
    max_time: [ "40", "100", "12" ],
    min_time: [ "56", "12", "120" ],
    time_play: [ "20", "10" ],
    publisher: [ "2020", "2021", "2022" ],
    average: [ "8", "7", "9" ],
    min_age: [ "12", "15", "16" ]
}

type DataInputKeys = keyof typeof dataInputs;

export class InputSelect {

    public static convertFormatData( title: string, referenceData: DataInputKeys ) {

        //* Buscando la data que tendrá el input select.
        const dataSelect = dataInputs[ referenceData ];

        //* Transformanda la data del select al formato que acepta.
        const dataTransform = dataSelect.map( item => ({ value: item, label: item }) );

        //* Regresando objeto.
        return {
            title,
            name: referenceData,
            data: dataTransform
        }

    }

}