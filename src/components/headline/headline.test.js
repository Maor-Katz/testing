import React from 'react';
import Headline from "./index";
import {findByTestAtr, checkProps} from '../../../Utils/index';
import {shallow} from "enzyme";

//shallow - render component deeper
const setUp = (props = {}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}

describe('headline component', () => {

    describe('checking our proptypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'test header',
                desc: 'test desc',
                tempArr: [{
                    fname: 'test fname',
                    lname: 'test lname',
                    email: ' test email@gmail.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBe(undefined)
        })
    })

    describe('have props', () => {

        let component;
        beforeEach(() => {
            const props = {
                header: 'test header',
                desc: 'test description'
            }
            component = setUp(props)
        })

        it('it should render, no errors', () => {
            // function that check if component have any div with data-test attribute of 'headlineComponent'
            let wrapper = findByTestAtr(component, 'headlineComponent')
            expect(wrapper.length).toBe(1)
        })

        it('it should render h1', () => {
            // function that check if component have any div with data-test attribute of 'header'
            let wrapper = findByTestAtr(component, 'header')
            expect(wrapper.length).toBe(1)
        })

        it('it should render desc', () => {
            let wrapper = findByTestAtr(component, 'description')
            expect(wrapper.length).toBe(1)
        })
    })


    describe('have NO props', () => {
        let component
        beforeEach(() => {
            component = setUp()
        })

        it('it shouldnt render', () => {
            let wrapper = findByTestAtr(component, 'headlineComponent')
            expect(wrapper.length).toBe(0)
        })
    })
})