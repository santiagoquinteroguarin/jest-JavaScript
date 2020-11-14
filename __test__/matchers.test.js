describe('Comparadores comunes', () => {
    
    const user = {
        name: 'Santiago',
        job: 'dev'
    }

    const user2 = {
        name: 'Santiago',
        job: 'dev'
    }

    const fruit1 = '🍓';
    const fruit2 = '🍒';

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    })

    test('Negación - Igualdad de elementos', () => {
        expect(fruit1).not.toEqual(fruit2);
    })
});
