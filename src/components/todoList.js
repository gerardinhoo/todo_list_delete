import React from 'react';

const TodoList = (props) => {
  console.log(props)
   return (
     <li 
       onClick={() => {
         props.onDelete(props.id)
       }}>
       {props.item}
     </li>
  )
}

export default TodoList;
