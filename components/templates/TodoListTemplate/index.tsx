'use client'
import { useTodoContext } from '../../../contexts/TodoContext'
import { TodoList } from '../../organisms/TodoList'
import { useTodoTemplate } from './useTodoListTemplate'
import { InputForm } from "../../atom/InputForm";

export const TodoListTemplate = () => {
    const { originTodoList, handleDeleteTodo } = useTodoContext()
    const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] = useTodoTemplate({ originTodoList })
    return (
        <>
            <h1>Todos</h1>
            <InputForm value={searchKeyword} placeholder="searchKeyword" handleChange={handleChangeSearchKeyword} />
            <div>
                <TodoList todoList={showTodoList} handleDeleteTodo={handleDeleteTodo} />
            </div>
        </>
    )
}
