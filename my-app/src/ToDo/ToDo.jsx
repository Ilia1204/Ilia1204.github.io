import React, { useState } from 'react'
import './index.css'
import ToDoItem from './ToDoItem'

const ToDo = () => {
	const [name, setName] = useState('')
	const [todos, setTodos] = useState([
		{
			_id: 0,
			name: 'Купить хлеб',
			isChecked: true,
		},
	])

	const onKeyPressNameHandler = e => {
		if (e.key === 'Enter') {
			e.preventDefault()
			setTodos(prev => [...prev, { _id: todos.length, name, isChecked: false }])
			setName('')
		}
	}

	const toggleCheckedToDo = idx => {
		const newArray = [].concat(todos)
		newArray[idx].isChecked = !newArray[idx].isChecked
		setTodos(newArray)
	}

	return (
		<>
			<h1>ToDo приложение</h1>
			{todos &&
				todos.map((todo, idx) => (
					<ToDoItem
						key={`_todo_${todo._id}`}
						idx={idx}
						name={todo.name}
						isChecked={todo.isChecked}
						toggleCheckedToDo={toggleCheckedToDo}
					/>
				))}

			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				onKeyPress={onKeyPressNameHandler}
				placeholder='Название..'
				toggleCheckedToDo={toggleCheckedToDo}
			/>
		</>
	)
}

export default ToDo
