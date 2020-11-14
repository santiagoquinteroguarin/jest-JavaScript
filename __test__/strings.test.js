describe('Comprobar cadenas de texto', () => {

    const text = 'Hola Mundo!';

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/Mundo/);
    });
    
    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/Mundito/);
    });

    test('Comprobar el tamaño del texto', () => {
        expect(text).toHaveLength(11);
    });
});
