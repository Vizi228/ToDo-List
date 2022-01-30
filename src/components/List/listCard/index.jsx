import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import removeSvg from '../../../assets/img/remove.svg';
import { deleteListsItem } from '../../../redux/actions/listItemActions';


import Badge from '../../Badge';

import '../List.scss';

const ListCard = ({name, colorId, id, setCurrentListId, currentListId}) => {
  const dispatch = useDispatch();
  const {colors, tasks} = useSelector(store => ({
    colors: store.addListReducer.colors,
    tasks: store.tasksReducer.tasks,
  }))
  const getColor = () => {
      return colors.filter(color => color.id === colorId).map(item => item.name).join()
  }

  const removeCurrentItem = () => {
    dispatch(deleteListsItem(id, tasks))
    setCurrentListId('1')
  }

  return (

        <li className={id === currentListId ? 'active' : ''}>
          <i>{<Badge name={getColor()}  onClick={() => setCurrentListId(id)} />}</i>
          <span onClick={() => setCurrentListId(id)}>
            {name}
          </span>
          
            <img
              className="list__remove-icon"
              src={removeSvg}
              alt="Remove icon"
              onClick={() => removeCurrentItem()}
            />
          
        </li>
      
  );
};

export default ListCard;
