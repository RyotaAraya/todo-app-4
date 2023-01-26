'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NAVIGATION_PATH } from '../../../constants/navigations'

type Props = {
    createTodo: (title: string, content: string) => void
}
export const useCreateTemplate = ({ createTodo }: Props) => {
    const router = useRouter()
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')

    const handleChangeTitle = (e: any) => {
        setNewTitle(e.target.value)
    }
    const handleChangeContent = (e: any) => {
        setNewContent(e.target.value)
    }
    const handleAddTodo = (e: any) => {
        e.preventDefault()
        if (newTitle === '' && newContent === '') return
        createTodo(newTitle, newContent)
        router.push(NAVIGATION_PATH.TOP)
        setNewTitle('')
        setNewContent('')
    }
    const states = { newTitle, newContent }
    const actions = { handleChangeTitle, handleChangeContent, handleAddTodo }
    return [states, actions] as const
}
