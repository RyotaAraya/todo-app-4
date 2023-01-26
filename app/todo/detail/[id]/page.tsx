import { TodoDetailTemplate } from '../../../../components/templates/TodoDetailTemplate'

type Prams = {
    params: { slug: string }
}
const Page = ({ params }: Prams) => {
    return <TodoDetailTemplate params={params} />
}

export default Page
