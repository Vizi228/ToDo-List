let initialState = {
    colors: [],
}

const addListReducer = (state = initialState, action) => {
    if (action.type === 'addItemToAddList') {
        return (
            state,
            { colors: action.payload }
        )
    }

    return state
}
export default addListReducer