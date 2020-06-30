import React, { useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key.toLowerCase() === 'enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
    }
  }
 
  return (
    <div className="input-field mt2">
      <input 
        onKeyPress={keyPressHandler}
        ref={ref}
        type="text" 
        id="title" 
        placeholder="Enter the title" 
      />
      <label htmlFor="title" className="active">
        Enter the title
      </label>
    </div>
  )
}
