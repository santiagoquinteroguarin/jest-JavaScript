import { getDataFromApi } from '../promise';

describe('Probar Async/Await', () => {
    test('Realiza una petición a una API', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        
        const data = await getDataFromApi(api);
        expect(data.results.length).toBeGreaterThan(0);
        
        const data2 = await getDataFromApi(getRick);
        expect(data2.name).toEqual('Rick Sanchez');

        try {
            const data3 = await getDataFromApi(`http://httpstat.us/500`);
        } catch(error) {
            expect(error).toEqual(new Error('Request failed with status code 500'));
        }

        try {
            const data4 = await getDataFromApi(`http://httpstat.us/404`);
        } catch(error) {
            expect(error).toEqual(new Error('Request failed with status code 404'));
        }
    });
});
