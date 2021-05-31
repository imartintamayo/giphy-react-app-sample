import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('test <GifGridItem /> component', () => {

    const title = 'some title';
    const url = 'http://localhost/some_url.png';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('should render GifGridItem', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should display <p>title</p>', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('<img> should have src=url and alt=title', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('should have animate__fadeInTopLeft class efect', () => {
        
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeInTopLeft')).toBe(true);

    });
    

});