import React from 'react';
import './List.scss';
import ListCard from './listCard';

const List = ({items, currentListId,  setCurrentListId})  => {
  
  
  return (
    <ul  className="list">
      {items.map((item, index) => <ListCard setCurrentListId={setCurrentListId} currentListId={currentListId} key={`${item.name + index}`} {...item} />)}
    </ul>
  );
};

export default List;
