'use client'
import { FC, ReactNode, useContext, createContext } from 'react'
import { Todo } from '../types'
import { useTodo } from '../hooks/useTodo'

type Props = {
    children: ReactNode
}
interface ContextInterface {
    originTodoList: Todo[]
    createTodo: (title: string, content: string) => void
    updateTodo: (id: number, title: string, content: string) => void
    handleDeleteTodo: (id: number) => void
}
const TodoContext = createContext({} as ContextInterface)

export const TodoProvider: FC<Props> = ({ children }) => {
    const { originTodoList, createTodo, updateTodo, handleDeleteTodo } = useTodo()
    return (
        <TodoContext.Provider value={{ originTodoList, createTodo, updateTodo, handleDeleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext)
