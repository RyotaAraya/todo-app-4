import { FC } from 'react'
import { Todo } from '../../../types'
import { useTodoList } from './useTodoList'

type Props = {
    todoList: Todo[]
    handleDeleteTodo: (id: number) => void
}

export const TodoList: FC<Props> = ({ todoList, handleDeleteTodo }) => {
    const [{ handleMoveDetailPage, handleMoveEditPage }] = useTodoList()
    return (
        <ul>
            {todoList.map((todo) => (
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => handleMoveDetailPage(todo.id)}>詳細</button>
                    <button onClick={() => handleMoveEditPage(todo.id)}>編集</button>
                    <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
                </li>
            ))}
        </ul>
    )
}
