import { add, subtract, multiply, division } from '../maths.js';

describe('Calculos matematicos', () => {
    test('Prueba de suma', () => {
        expect(add(1,2)).toBe(3);
    });

    test('Prueba de negación suma', () => {
        expect(add(1,2)).not.toBe(5);
    });

    test('Prueba de restar', () => {
        expect(subtract(10,5)).toBe(5);
    });

    test('Prueba de multiplicar', () => {
        expect(multiply(5,5)).toBe(25);
    });

    test('Prueba de dividir', () => {
        expect(division(10,2)).toBe(5);
    });
});


