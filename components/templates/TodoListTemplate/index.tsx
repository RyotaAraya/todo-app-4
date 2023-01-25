'use client'
import { useTodoContext } from '../../../contexts/TodoContext'
import { TodoList } from "../../organisms/TodoList";

export const TodoListTemplate = () => {
    const { originTodoList, handleDeleteTodo } = useTodoContext()
    return (
        <>
            <h1>Todos</h1>
            <div>
                <TodoList todoList={originTodoList} handleDeleteTodo={handleDeleteTodo} />
            </div>
        </>
    )
}
