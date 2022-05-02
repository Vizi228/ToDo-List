import axios from "axios";
export const addItemToAddList = (action) => ({
    type: 'addItemToAddList',
    payload: action,
});
export const getAddListItems = () => (dispatch) => {
    axios.get('https://61252c323c91fb0017e729af.mockapi.io/Colors').then(data => {
        dispatch(addItemToAddList(data.data));
    });

}
