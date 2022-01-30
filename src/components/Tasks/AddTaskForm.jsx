import React, { useState } from 'react';

import closeSvg from '../../assets/img/close.svg';
import addSvg from '../../assets/img/add.svg';
import { Badge } from '..';
import { useDispatch } from 'react-redux';
import { postTasksItem } from '../../redux/actions/tasksActions';
const AddTaskForm = ({ colors, currentListId}) => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(true)
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState();
  /////
  /////
  /////
  const onClickNewTasks = (value) => {
    setIsVisible(value)
  }
  /////
  /////
  /////
  const onClickBadge = (item) => { 
    setColor(item);
  }
  /////
  /////
  /////
  const postTaskItem = (item) => {
    if(inputValue && color){
      dispatch(postTasksItem(item))
      setIsVisible(true);
      setColor();
      setInputValue('')
    } else {
      alert('Выберите цвет и введите название')
    }
  }
  return (
    
    <div className="tasks__form">
      {isVisible ? 
      <div className="tasks__form-new" onClick={() => onClickNewTasks(!isVisible)}>
          <img src={addSvg} alt="Add icon" />
          <span>Новая задача</span>
      </div>  :
      <div className="add-list__popup">
      <img
        src={closeSvg}
        alt="Close button"
        className="add-list__popup-close-btn"
        onClick={() => onClickNewTasks(true)}
      />

      <input
        className="field"
        type="text"
        placeholder="Название списка"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="add-list__popup-colors">
        {colors.map(item => (
          <Badge
            key={item.id}
            {...item}
            colorId={color}
            name={item.name}
            onClick={() => onClickBadge(item.id)}
          />
        ))}
      </div>
      <button className="button" onClick={() => postTaskItem({UID: currentListId, name: inputValue,  checked: false , colorId: color})}>
         Добавить
      </button>
    </div>
      }
        

        
    </div>
  );
};

export default AddTaskForm;
