'use client'
import { InputForm } from '../../atom/InputForm'
import { TextArea } from '../../atom/TextArea'
import { useCreateTemplate } from './useCreateTemplate'
import { useTodoContext } from '../../../contexts/TodoContext'

export const TodoCreateTemplate = () => {
    const { createTodo } = useTodoContext()
    const [{ newTitle, newContent }, { handleChangeTitle, handleChangeContent, handleAddTodo }] = useCreateTemplate({
        createTodo,
    })
    return (
        <>
            <h1>Create</h1>
            <form onSubmit={handleAddTodo}>
                <div>
                    <InputForm value={newTitle} disabled={false} placeholder={'title'} onChange={handleChangeTitle} />
                </div>
                <div>
                    <TextArea value={newContent} disabled={false} onChange={handleChangeContent} />
                </div>
                <div>
                    <button type="submit">登録</button>
                </div>
            </form>
        </>
    )
}
