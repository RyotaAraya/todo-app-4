'use client'
import { useTodoContext } from '../../../contexts/TodoContext'
import { useRouter } from 'next/navigation'
import { InputForm } from '../../atom/InputForm'
import { TextArea } from '../../atom/TextArea'

export const TodoDetailTemplate = ({ params }: any) => {
    const { originTodoList, handleDeleteTodo } = useTodoContext()
    const todo = originTodoList.find((todo) => String(todo.id) === params?.id)
    return (
        <>
            <h1>Todo Detail</h1>
            {!!todo && (
                <div>
                    <div>
                        <InputForm value={todo.title} disabled={true} />
                    </div>
                    <div>
                        <TextArea value={todo.content} disabled={true} />
                    </div>
                </div>
            )}
        </>
    )
}
