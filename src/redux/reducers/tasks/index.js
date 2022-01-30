let initialState = {
    tasks: [],
    isLoaded: false,
}

const tasksReducer = (state = initialState, action) => {
    if (action.type === 'getTasksItem') {
        return ({
            ...state,
            tasks: action.payload,
            isLoaded: true,
        })
    }
    if (action.type === 'postTasksItem') {
        return ({
            ...state,
            tasks: [...state.tasks, action.payload]
        })
    }
    if (action.type === 'changeTaskItem') {
        let item = state.tasks.map(item => {
            if (item.id === action.payload.id && item.UID === action.payload.UID) {
                return action.payload
            } else {
                return item
            }
        })
        return {
            ...state,
            tasks: item,
        }
    }
    if (action.type === 'deleteTaskItem') {
        let item = state.tasks.filter(item => item.id !== action.payload)
        return {
            ...state,
            tasks: item,
        }
    }
    return state
}
export default tasksReducer