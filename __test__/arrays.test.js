import { arrayColors, arrayFruits } from '../arrays';

describe('Comprobar que existe un elemento', () => {
    test('¿Contiene una manzana?', () => {
        expect(arrayFruits()).toContain('🍎');
    });

    test('¿No Contiene un aguacate?', () => {
        expect(arrayFruits()).not.toContain('🥑');
    });

    test('Comprobar el tamaño de un array', () => {
        expect(arrayColors()).toHaveLength(9);
    });
    
    test('Negacion - el tamaño de un array', () => {
        expect(arrayColors()).not.toHaveLength(15);
    });
});
