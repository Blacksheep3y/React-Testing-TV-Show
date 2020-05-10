// import dependencies
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

// import files
import App from './App';

// TESTING APP.JS
describe('<App />', () => {

    //SNAPSHOT TEST
    it('App.js matches snapshot', () => {
        const tree = renderer.create(<App />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    });


    // MOCK TEST
    it('should call Dropdown', () => {
        const Dropdown = jest.fn();
        
        const { getByText } = render(<App Dropdown={Dropdown}/>);

        const DropdownMenu = getByText(/Dropdown/i);
        
        fireEvent.click(DropdownMenu);

        expect(Dropdown).toHaveBeenCalled();
    });

});