import App from './App'
import {shallow, mount} from 'enzyme'
import {findByTestAtr, testStore} from '../Utils/index'
import React from 'react'
import {store} from "./createStore";

const setUp = (intialState = {}) => {
    const store = testStore(intialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    //dive is enzyme function that shows lower level component

    return wrapper;
}

describe('app component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = [
            {title: 'example title 1', body: 'some text'},
            {title: 'example title 1', body: 'some text'},
            {title: 'example title 1', body: 'some text'}
        ]
        wrapper = setUp(initialState);

    })
    it('should render without error', () => {
        let component = findByTestAtr(wrapper, 'appComponent')
        expect(component.length).toBe(1)
    })

})