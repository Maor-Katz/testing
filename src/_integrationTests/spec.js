// import moxios from 'moxios'
// import {testStore} from '../../Utils/index'
// import {fetchPost} from "../actions/index";
// import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'
//
// describe('fetchPosts action', () => {
//     beforeEach(() => {
//         enableFetchMocks();
//         fetchMock.doMock();
//     })
//
//     afterEach(() => {
//         fetchMock.dontMock()
//     })
//
//     test('store is update correctly', () => {
//         const expectedState = [{
//             title: 'example title 1',
//             body: 'some text'
//         },
//             {
//                 title: 'example title 2',
//                 body: 'some text'
//             },
//             {
//                 title: 'example title 3',
//                 body: 'some text'
//             }];
//         const store = testStore();
//         fetch.mockResponse(JSON.stringify({ access_token: '12345' }))
//     })
// })