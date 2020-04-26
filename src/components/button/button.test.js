import React from 'react';
import {findByTestAtr, checkProps} from '../../../Utils/index'
import ShardButton from './index'
import {shallow} from 'enzyme'

describe('Shared button component', () => {
    describe('checking proptypes ', () => {
        it('shouldnt throw warning', () => {
            const expectedProps = {
                buttonText: 'Example text btn',
                emitEvent: () => {
                }
            }
            const propsError = checkProps(ShardButton, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Btn render', () => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
                mockFunc = jest.fn();
                const props = {
                    buttonText: 'Example text btn',
                    emitEvent: mockFunc
                }
                wrapper = shallow(<ShardButton {...props}/>)
            }
        )
        it('should render btn', () => {
            const btn = findByTestAtr(wrapper, 'btnComponent')
            expect(btn.length).toBe(1)
        })
        it('should emit call back on click event', () => {
            const btn = findByTestAtr(wrapper, 'btnComponent');
            btn.simulate('click');
            const callback = mockFunc.mock.calls.length
            expect(callback).toBe(1)
        })
    })


})