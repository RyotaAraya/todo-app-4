import { useState, useCallback, useMemo } from 'react'
import { Todo } from '../../../types'
import { useRouter } from 'next/navigation'
import { NAVIGATION_PATH } from '../../../constants/navigations'

type Props = {
    updateTodo: (id: number, title: string, content: string) => void
    params: any
    todo: Todo
}
export const useEditTemplate = ({ updateTodo, params, todo }: Props) => {
    const router = useRouter()
    //params.idがundefinedだった場合はエラーとする
    if (params.id === undefined || params.id === null) {
        throw new Error(`Expected 'todo' to be defined, but received ${params.id}`)
    }
    if (todo === undefined || todo === null) router.push(NAVIGATION_PATH.TOP)
    const [newTitle, setNewTitle] = useState(todo.title)
    const [newContent, setNewContent] = useState(todo.content)

    const handleChangeTitle = useCallback((e: any) => setNewTitle(e.target.value), [])
    const handleChangeContent = useCallback((e: any) => setNewContent(e.target.value), [])

    const handleUpdateTodo = useCallback(
        (e: any) => {
            e.preventDefault()
            if (todo?.title === newTitle && todo.content === newContent) return
            updateTodo(todo.id, newTitle, newContent)
            router.push(NAVIGATION_PATH.TOP)
        },
        [router, todo.id, todo.title, todo.content, newTitle, newContent, updateTodo]
    )

    const states = { newTitle, newContent }
    const actions = { handleChangeTitle, handleChangeContent, handleUpdateTodo }
    return [states, actions] as const
}
