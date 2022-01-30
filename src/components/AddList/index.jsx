import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from '../List';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg';

import './AddList.scss';
import { useSelector } from 'react-redux';
import { postListItems } from '../../redux/actions/listItemActions';
import { useDispatch } from 'react-redux';
import { postTasksItem } from '../../redux/actions/tasksActions';

const AddList = () => {
  const dispatch = useDispatch()
  const colors = useSelector(store => store.addListReducer.colors)
  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState();
  /////
  /////
  /////
  const openClickButton = () => {
    setIsActive(!isActive)
  }
  const closeClickButton = () => {
    setIsActive(true)
  }
  /////
  /////
  /////
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
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
  const addListItem = () => {
    if(inputValue && color){
      dispatch(postListItems({name: inputValue, colorId: color}));
      setColor();
      setInputValue('');
      setIsActive(true);
    } else {
      alert('Введите название и выберите цвет')
    }
    
  }
  
  return (
    <div className="add-list">
        { isActive 
          ? 
          <><button className='add-list__button' onClick={() => openClickButton()}>Добавить список</button></>
          :
          <div className="add-list__popup">
          <img
            src={closeSvg}
            alt="Close button"
            className="add-list__popup-close-btn"
            onClick={() => closeClickButton()}
          />

          <input

            className="field"
            type="text"
            onChange={(e) => onChangeInput(e)}
            placeholder="Название списка"
          />

          <div className="add-list__popup-colors" >
            {colors.map(item => (
              <Badge
                key={item.id}
                {...item}
                colorId={color}
                onClick={() => onClickBadge(item.id)}
              />
            ))}
          </div>
          <button onClick={() => addListItem()} className="button">
            Добавить
          </button>
        </div>
        }

        
      
    </div>
  );
};

export default AddList;
