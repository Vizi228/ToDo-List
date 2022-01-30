import axios from "axios";
export const addListItem = (action) => ({
    type: 'getListItem',
    payload: action,
})
export const postItemToList = (action) => ({
    type: 'postListItem',
    payload: action,
})
export const changeItemToLists = (action) => ({
    type: 'changeListsItem',
    payload: action,
})
export const deleteItemToLists = (action) => ({
    type: 'deleteListsItem',
    payload: action,
})
export const getListItems = () => (dispatch) => {
    axios.get('https://61252c323c91fb0017e729af.mockapi.io/Lists').then(data => {
        dispatch(addListItem(data.data));
    });
}
export const postListItems = (obj) => (dispatch) => {
    axios.post('https://61252c323c91fb0017e729af.mockapi.io/Lists', obj).then(data => {
        dispatch(postItemToList(data.data));
    });
}
export const changeListsItem = (obj, lists) => (dispatch) => {
    let changeId = lists.find(item => item.id === obj.id).id
    axios.put(`https://61252c323c91fb0017e729af.mockapi.io/Lists/${changeId}`, obj).then(data => dispatch(changeItemToLists(data.data)))
}
export const deleteListsItem = (id, tasks) => (dispatch) => {
    let taskId = tasks.filter(item => item.UID === id).map(item => item.id)
    axios.delete(`https://61252c323c91fb0017e729af.mockapi.io/Lists/${id}`).then(data => dispatch(deleteItemToLists(id)))
    taskId.forEach(element => {
        axios.delete(`https://61252c323c91fb0017e729af.mockapi.io/tasks/${element}`)
    });
}

