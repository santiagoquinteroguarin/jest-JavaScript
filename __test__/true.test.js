import { isFalse, isTrue, isUndefined, isNull } from '../true';

describe('Probar resultados nulos', () => {
    test('Null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultados undefined', () => {
    test('Undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Probar resultados verdaderos', () => {
    test('True', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados falsos', () => {
    test('False', () => {
        expect(isFalse()).toBeFalsy();
    });
});