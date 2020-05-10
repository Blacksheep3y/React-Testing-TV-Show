// import dependencies
import React from 'react';
import renderer from 'react-test-renderer';

// import files
import App from './App';

//SNAPSHOT TEST
describe('<App />', () => {
    it('App.js matches snapshot', () => {
        const tree = renderer.create(<App />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
