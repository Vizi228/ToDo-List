import { act } from "react-dom/cjs/react-dom-test-utils.production.min"

let initialState = {
    lists: [],
}

const listsReducer = (state = initialState, action) => {
    if (action.type === 'getListItem') {
        return (
            state,
            { lists: action.payload }
        )
    }
    if (action.type === 'postListItem') {
        return (
            state,
            { lists: [...state.lists, action.payload] }
        )
    }
    if (action.type === 'changeListsItem') {
        let item = state.lists.map(item => {
            if (item.id === action.payload.id) {
                return item = action.payload
            } else {
                return item
            }
        })
        return {
            ...state,
            lists: item,
        }
    }
    if (action.type === 'deleteListsItem') {
        let item = state.lists.filter(item => item.id !== action.payload)
        return {
            ...state,
            lists: item,
        }
    }
    return state
}
export default listsReducer