import { SetStateAction, useState, useMemo } from 'react'
import { Todo } from '../../../types'

type Props = {
    originTodoList: Todo[]
}
export const useTodoTemplate = ({ originTodoList }: Props) => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const handleChangeSearchKeyword = (e: { target: { value: SetStateAction<string> } }) => {
        setSearchKeyword(e.target.value)
    }
    const showTodoList = useMemo(() => {
        const regexp = new RegExp('^' + searchKeyword, 'i')
        return originTodoList.filter((todo) => {
            return todo.title.match(regexp)
        })
    }, [originTodoList, searchKeyword])
    const states = { searchKeyword, showTodoList }
    const actions = { handleChangeSearchKeyword }

    return [states, actions] as const
}
