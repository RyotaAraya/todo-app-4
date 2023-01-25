import { useState, useCallback } from 'react'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data'

export const useTodo = () => {
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST)
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)
    return {
        originTodoList,
    }
}
