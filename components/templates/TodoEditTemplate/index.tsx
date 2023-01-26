'use client'
import { useTodoContext } from '../../../contexts/TodoContext'
import { InputForm } from '../../atom/InputForm'
import { TextArea } from '../../atom/TextArea'
import { useEditTemplate } from './useEditTemplate'

export const TodoEditTemplate = ({ params }: any) => {
    const { originTodoList, updateTodo } = useTodoContext()
    const todo = originTodoList.find((todo) => String(todo.id) === params?.id)
    if (todo === undefined || todo === null) {
        throw new Error(`Expected 'todo' to be defined, but received ${todo}`)
    }
    const [{ newTitle, newContent }, { handleChangeTitle, handleChangeContent, handleUpdateTodo }] = useEditTemplate({
        updateTodo,
        params,
        todo,
    })
    return (
        <>
            <h1>Todo Edit</h1>
            {!!todo && (
                <form onSubmit={handleUpdateTodo}>
                    <div>
                        <InputForm
                            value={newTitle}
                            disabled={false}
                            placeholder={'title'}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div>
                        <TextArea value={newContent} disabled={false} onChange={handleChangeContent} />
                    </div>
                    <div>
                        <button type="submit" onClick={() => {}}>
                            変更
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}
