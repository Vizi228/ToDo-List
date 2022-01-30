import React, { useEffect, useState } from 'react';

import editSvg from '../../assets/img/edit.svg';

import './Tasks.scss';

import AddTaskForm from './AddTaskForm';
import Task from './Task';
import { useSelector } from 'react-redux';
import { changeListsItem } from '../../redux/actions/listItemActions';
import { useDispatch } from 'react-redux';

const Tasks = ({lists, currentListId }) => {
  const {colors, tasks, isLoaded} = useSelector(store => ({
    colors: store.addListReducer.colors,
    tasks: store.tasksReducer.tasks,
    isLoaded: store.tasksReducer.isLoaded,
  }))
  const dispatch = useDispatch()
  const [items, setItems] = useState([]);
  const [changeIsActive, setchangeIsActive] = useState(true)
  const [changeValue, setChangeValue] = useState('')
  const getColor = () => {
      let newColorId = Number(lists.filter(obj => obj.id === currentListId).map(obj => obj.colorId).join());
      return colors.filter(color => color.id === newColorId).map(item => item.hex).join()
  }

  const changeListName = (e) => {
    setChangeValue(e.target.value)
  }
  const setListName = () => {
    let item = lists.filter(item => item.id === currentListId)[0];
    if(changeValue){
      dispatch(changeListsItem({id: item.id, name: changeValue, colorId: item.colorId }, lists));
      setchangeIsActive(!changeIsActive);
      setChangeValue('')
    } else {
      setchangeIsActive(!changeIsActive)
    }
  }
  useEffect(() => {
    setItems(tasks.filter(task => task.UID === currentListId));
  }, [currentListId, isLoaded, tasks])
  return (
    <div className="tasks">

        <h2 style={{ color: getColor()}} className="tasks__title">
          {lists && lists.filter(obj => obj.id === currentListId).map(obj => obj.name)}
          {changeIsActive 
          ? 
          <img src={editSvg} alt="Edit icon" onClick={() => setchangeIsActive(!changeIsActive)} /> 
          : <>
          <input type="text" onChange={changeListName} value={changeValue}/>
          <button onClick={() => setListName()}>Изменить</button>
          </>
            
          }
        </h2>


      <div>

       {items && items.map(obj => <Task colors={colors} key={obj.id} currentListId={currentListId} tasks={tasks}  {...obj}/>)}
            

        <AddTaskForm colors={colors} currentListId={currentListId}/>
      </div>
    </div>
  );
};

export default Tasks;
