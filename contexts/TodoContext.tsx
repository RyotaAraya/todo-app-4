'use client'
import { FC, ReactNode, useContext, createContext } from 'react'
import { Todo } from '../types'
import { useTodo } from '../hooks/useTodo'

type Props = {
    children: ReactNode
}
interface ContextInterface {
    originTodoList: Todo[]
    handleDeleteTodo: (id: number) => void
}
const TodoContext = createContext({} as ContextInterface)

export const TodoProvider: FC<Props> = ({ children }) => {
    const { originTodoList, handleDeleteTodo } = useTodo()
    return <TodoContext.Provider value={{ originTodoList, handleDeleteTodo }}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext)
