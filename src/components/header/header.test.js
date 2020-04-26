import React from 'react'
import {shallow} from 'enzyme'
import Header from "./index";
import {findByTestAtr} from '../../../Utils/index'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props}/>);
    return component
}

describe('header component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })
    it('it should render without error', () => {
        const wrapper = findByTestAtr(component,'headerComponent');
        expect(wrapper.length).toBe(1)
    });
    it('should render logo', () => {
        const logo = findByTestAtr(component,'logoImg');
        expect(logo.length).toBe(1)
    })
})