import { getGifs } from "../../helpers/getGifs"

describe('test getGifs Fetch', () => {

    test('should retrieve 10 elements', async () => {
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);

    });

    test('should retrieve 0 elements', async () => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });
    
})
