import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Instantánea con algunas Excepciones en sus paths', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Santiago Quintero',
            profesion: 'JavaScript Development',
            createdAt: new Date
        };
    
        // A excepción de los campos id y createdAt, los cuales se espera que reciban cualquier Numero y Fecha respectivamente
        expect(user).toMatchSnapshot({
            id: expect.any(Number),
            createdAt: expect.any(Date)
        });
    });
});
