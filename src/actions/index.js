import {types} from "./types";
import React from 'react'
export const fetchPost = () => async (dispatch) => {
        let response = await window.fetch('http://jsonplaceholder.typicode.com/posts?_limit=10',{mode: 'cors'})
        let data = await response.json()
        dispatch({
            type: types.GET_POSTS,
            payload: data
        })

}