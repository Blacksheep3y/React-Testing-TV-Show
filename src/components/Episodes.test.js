// import dependencies
import React from 'react';
import renderer from 'react-test-renderer';

import Episodes from './Episodes';

// TESTING EPISODES.JS
describe('<Episodes />', () => {

    // SNAPSHOT TEST
    it('Episodes.js matches snapshot', () => {
        const tree = renderer.create(<Episodes />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    });

});