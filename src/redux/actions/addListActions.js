import axios from "axios";
export const addItemToAddList = (action) => ({
    type: 'addItemToAddList',
    payload: action,
});
export const getAddListItems = () => (dispatch) => {
    axios.get('http://localhost:3001/colors').then(data => {
        dispatch(addItemToAddList(data.data));
    });

}
