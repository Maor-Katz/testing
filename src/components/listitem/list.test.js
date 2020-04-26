import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAtr} from '../../../Utils/index'
import ListItem from './list'
import PropTypes from "prop-types";
import ShardButton from "../button";

describe('ListItem component', () => {

    describe('check proptypes', () => {
        it('should NOT throw warning', () => {
            const expectedProps = {
                title: 'example test',
                desc: 'description example'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('component renders!', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: 'example test',
                desc: 'description example'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('list comp rendered without error', () => {
            let component = findByTestAtr(wrapper, 'listitemComp')
            expect(component.length).toBe(1)
        })

        it('list comp rendered title', () => {
            let title = findByTestAtr(wrapper, 'titleItem')
            expect(title.length).toBe(1)
        })

        it('list comp rendered description', () => {
            let desc = findByTestAtr(wrapper, 'descItem')
            expect(desc.length).toBe(1)
        })
    })

    describe('should NOT render', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                desc: 'description example'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        it('item did NOT render', () => {
            let component = findByTestAtr(wrapper, 'titleItem')
            expect(component.length).toBe(0)
        })
    })

})
