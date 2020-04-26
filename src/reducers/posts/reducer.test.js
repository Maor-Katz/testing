import {types} from '../../actions/types'
import {posts} from './reducer'


describe('POSTS Reducer', () => {
    it('should return default state', () => {
        const newState = posts(undefined,{})
        expect(newState).toEqual([])
    })

    it('should return new state if recieving type', () => {
        const postsDetails = [{title: 'test1'}, {title: 'test2'}, {title: 'test3'}]
        const newState = posts(undefined, {
            type: types.GET_POSTS,
            payload: postsDetails
        })
        expect(newState).toEqual(postsDetails)

    })
})