import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('test hook useFetchGifs', () => {
    
    test('should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect( data ).toEqual( [] );
        expect( loading ).toEqual( true );

    });

    test('should return state with data and loading flag false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toEqual( false );

    });
    
})
