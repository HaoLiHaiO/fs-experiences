import * as api from '../api';

// Action creators: fns which return actions

export const getPosts = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {

    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error)
    }
}
// @ts-ignore
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
    }
}