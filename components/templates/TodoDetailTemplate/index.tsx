'use client'
import { useTodoContext } from '../../../contexts/TodoContext'
import { useRouter } from 'next/router'
import { TodoList } from '../../organisms/TodoList'
import { InputForm } from '../../atom/InputForm'

export const TodoDetailTemplate = () => {
    const { originTodoList, handleDeleteTodo } = useTodoContext()
    const router = useRouter()
    console.log(router)
    return (
        <>
            <h1>Todo Detail</h1>
        </>
    )
}
