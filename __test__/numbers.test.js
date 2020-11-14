import { numbers } from '../numbers';

describe('Comparación de numeros', () => {
    test('Mayor que', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });

    test('Mayor que o igual', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });

    test('Menor que', () => {
        expect(numbers(5,5)).toBeLessThan(15);
    });

    test('Menor que o igual', () => {
        expect(numbers(10,10)).toBeLessThanOrEqual(20);
    });

    test('Numeros flotantes', () => {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
});
