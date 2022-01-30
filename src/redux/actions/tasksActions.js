import axios from "axios"

export const postItemToTasks = (action) => ({
    type: 'postTasksItem',
    payload: action,
})
export const getItemToTasks = (action) => ({
    type: 'getTasksItem',
    payload: action,
})
export const changeTaskItem = (action) => ({
    type: 'changeTaskItem',
    payload: action,
})
export const deleteTaskItem = (action) => ({
    type: 'deleteTaskItem',
    payload: action,
})
export const postTasksItem = (obj) => (dispatch) => {
    axios.post(`https://61252c323c91fb0017e729af.mockapi.io/tasks/`, obj).then(data => dispatch(postItemToTasks(data.data)))
}
export const getTasksItem = () => (dispatch) => {
    axios.get(`https://61252c323c91fb0017e729af.mockapi.io/tasks/`).then(data => dispatch(getItemToTasks(data.data)))
}
export const changeCheckTasksItem = (obj, tasks) => (dispatch) => {
    let changeId = tasks.find(item => item.id === obj.id && item.UID === obj.UID).id
    axios.put(`https://61252c323c91fb0017e729af.mockapi.io/tasks/${changeId}`, obj).then(data => dispatch(changeTaskItem(data.data)))
}
export const changeTasksItemName = (obj, tasks) => (dispatch) => {
    let changeId = tasks.find(item => item.id === obj.id && item.UID === obj.UID).id
    axios.put(`https://61252c323c91fb0017e729af.mockapi.io/tasks/${changeId}`, obj).then(data => dispatch(changeTaskItem(data.data)))
}
export const deleteTasksItem = (id) => (dispatch) => {
    axios.delete(`https://61252c323c91fb0017e729af.mockapi.io/tasks/${id}`).then(data => dispatch(deleteTaskItem(id)))
}

