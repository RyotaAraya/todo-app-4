import { useState, useCallback } from 'react'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data'

export const useTodo = () => {
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST)
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)

    const updateTodo = (id: number, title: string, content: string) => {
        const updatedTodo = originTodoList.map((todo) => {
            if (todo.id === id) {
                return {
                    id: todo.id,
                    title: title,
                    content: content,
                }
            }
            return todo
        })
        setOriginTodoList(updatedTodo)
    }

    const handleDeleteTodo = (id: number) => {
        const newTodoList = originTodoList.filter((todo) => todo.id !== id)
        setOriginTodoList(newTodoList)
    }

    return {
        originTodoList,
        updateTodo,
        handleDeleteTodo,
    }
}
