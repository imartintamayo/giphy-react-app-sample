import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        const getImages = async () => {
            const gifs = await getGifs(category);
            setState({
                data: gifs,
                loading: false
            });
        };
        getImages();
    }, [category]);

    return state;
}