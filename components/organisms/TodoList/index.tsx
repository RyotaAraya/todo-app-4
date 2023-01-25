import { FC } from 'react'
import { Todo } from '../../../types'

type Props = {
    todoList: Todo[]
    handleDeleteTodo: (id: number) => void
}

export const TodoList: FC<Props> = ({ todoList, handleDeleteTodo }) => {
    return (
        <ul>
            {todoList.map((todo) => (
                <li key={todo.id}>{todo.title}
                <button>編集</button>
                <button>更新</button>
                <button onClick={()=>handleDeleteTodo(todo.id)}>削除</button>
                </li>
            ))}
        </ul>
    )
}
