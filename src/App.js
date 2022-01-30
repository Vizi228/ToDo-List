import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { List, AddList, Tasks } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getAddListItems } from './redux/actions/addListActions';
import { getListItems } from './redux/actions/listItemActions';
import { getTasksItem } from './redux/actions/tasksActions';



function App() {
  const dispatch = useDispatch()
  let { items, tasks } = useSelector(store => ({
    items: store.listsReducer.lists,
    tasks: store.tasksReducer.state
  })
  )
  const [currentListId, setCurrentListId] = useState('1');





  useEffect(() => {
    dispatch(getAddListItems());
    dispatch(getListItems());
    dispatch(getTasksItem());
  }, [dispatch])
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <div className="todo__all">
          Все задачи
        </div>
        {
          <List
            items={items}
            setCurrentListId={(id) => setCurrentListId(id)}
            currentListId={currentListId}
          />
        }
        <AddList />
      </div>
      <div className="todo__tasks">
        <Route exact path="/">
          {items.length > 0
            ?
            <Tasks currentListId={currentListId} lists={items} {...tasks} />
            :
            <><h2>Создайте свою цель!</h2></>
          }
        </Route>
      </div>
    </div>
  );
}

export default App;
