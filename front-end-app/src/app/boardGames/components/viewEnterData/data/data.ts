const dataInputs = {
    max_players: [
        '0',   '1',   '2',   '3',   '4',   '5',
        '6',   '7',   '8',   '9',   '10',  '11',
        '12',  '13',  '14',  '15',  '16',  '17',
        '18',  '20',  '21',  '22',  '24',  '25',
        '30',  '31',  '32',  '33',  '34',  '36',
        '38',  '40',  '41',  '42',  '47',  '50',
        '52',  '61',  '64',  '68',  '75',  '99',
        '100', '104', '127', '200', '362', '999'
    ],
    max_playtime: [
        '0',    '1',    '2',    '3',     '4',     '5',     '6',
        '10',   '11',   '12',   '13',    '15',    '19',    '20',
        '23',   '25',   '30',   '32',    '33',    '35',    '39',
        '40',   '42',   '45',   '50',    '55',    '60',    '68',
        '70',   '75',   '80',   '90',    '95',    '100',   '105',
        '108',  '115',  '120',  '125',   '130',   '135',   '140',
        '150',  '160',  '165',  '180',   '200',   '210',   '222',
        '240',  '270',  '290',  '300',   '340',   '360',   '400',
        '420',  '480',  '500',  '540',   '600',   '700',   '720',
        '750',  '900',  '960',  '1000',  '1200',  '1440',  '1500',
        '1800', '2400', '2480', '2880',  '3000',  '3600',  '4320',
        '4500', '5400', '6000', '12000', '17280', '60000'
    ],
    min_playtime: [
        '0',     '1',     '2',    '3',    '4',    '5',
        '6',     '8',     '10',   '11',   '12',   '13',
        '15',    '16',    '20',   '23',   '25',   '30',
        '33',    '35',    '39',   '40',   '42',   '45',
        '50',    '55',    '60',   '68',   '70',   '75',
        '80',    '90',    '95',   '100',  '105',  '120',
        '135',   '140',   '150',  '160',  '180',  '200',
        '210',   '240',   '270',  '300',  '340',  '360',
        '400',   '420',   '450',  '480',  '500',  '600',
        '720',   '750',   '900',  '960',  '1000', '1200',
        '1440',  '1500',  '1800', '2480', '2880', '3000',
        '3600',  '4320',  '4500', '5400', '6000', '12000',
        '17280', '60000'
    ],
    playtime: [
        '0',    '1',    '2',    '3',     '4',     '5',     '6',
        '10',   '11',   '12',   '13',    '15',    '19',    '20',
        '23',   '25',   '30',   '32',    '33',    '35',    '39',
        '40',   '42',   '45',   '50',    '55',    '60',    '68',
        '70',   '75',   '80',   '90',    '95',    '100',   '105',
        '108',  '115',  '120',  '125',   '130',   '135',   '140',
        '150',  '160',  '165',  '180',   '200',   '210',   '222',
        '240',  '270',  '290',  '300',   '340',   '360',   '400',
        '420',  '480',  '500',  '540',   '600',   '700',   '720',
        '750',  '900',  '960',  '1000',  '1200',  '1440',  '1500',
        '1800', '2400', '2480', '2880',  '3000',  '3600',  '4320',
        '4500', '5400', '6000', '12000', '17280', '60000'
    ],
    year_published: [
        '1950', '1951', '1952', '1953', '1954', '1955',
        '1956', '1957', '1958', '1959', '1960', '1961',
        '1962', '1963', '1964', '1965', '1966', '1967',
        '1968', '1969', '1970', '1971', '1972', '1973',
        '1974', '1975', '1976', '1977', '1978', '1979',
        '1980', '1981', '1982', '1983', '1984', '1985',
        '1986', '1987', '1988', '1989', '1990', '1991',
        '1992', '1993', '1994', '1995', '1996', '1997',
        '1998', '1999', '2000', '2001', '2002', '2003',
        '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015',
        '2016'
    ],
    avg_rating: [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9'
    ],
    youngest_player_age: [
        '0',  '2',  '3',  '4',  '5',
        '6',  '7',  '8',  '9',  '10',
        '11', '12', '13', '14', '15',
        '16', '17', '18', '21', '25',
        '26', '42'
    ],
    min_players: [
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9'
    ]
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