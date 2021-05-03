import React from 'react'

const ToDoItem = ({ idx, name, isChecked, toggleCheckedToDo }) => {
	return (
		<div className='todo-item' onClick={() => toggleCheckedToDo(idx)}>
			<input type='checkbox' checked={isChecked} readOnly />
			<span className='name'>{name}</span>
		</div>
	)
}

export default ToDoItem
