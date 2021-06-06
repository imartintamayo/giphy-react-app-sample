import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('test <GifGrid />', () => {
    const category = 'some category';

    test('should be displayed correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should display items when useFetchGifs has resolved data', () => {
        const gifs = [{
            id: 'someId',
            url: 'someUrl',
            title: 'someTitle'
        }, {
            id: 'someId2',
            url: 'someUrl2',
            title: 'someTitle2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
