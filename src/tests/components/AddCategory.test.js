import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('test <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    
    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello World!';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('should not POST data onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should call setCategories and clean input text', () => {
        const value = 'Hello World!';
        wrapper.find('input').simulate('change', { target: { value } });        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
