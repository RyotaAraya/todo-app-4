'use client'
import { useTodoContext } from '../../../contexts/TodoContext'

export const TodoListTemplate = () => {
    const { originTodoList } = useTodoContext()
    return (
        <>
            <h1>Todos</h1>
            <div>
                {originTodoList.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </div>
        </>
    )
}
