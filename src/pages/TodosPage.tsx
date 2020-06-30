import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfases'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => {
      return prev.map(prevTodo => {
        const todo = {...prevTodo}
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

	return (
		<>
			<TodoForm onAdd={addHandler}/>
      <TodoList 
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
		</>
	)
}
