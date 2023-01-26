export type NavList = {
    TOP: string
    DETAIL: string
    CREATE: string
    EDIT: string
}

export type Todo = {
    id: number
    title: string
    content: string
}

export type Todos = Todo[]

export type Params = {
    params: { slug: string }
}
