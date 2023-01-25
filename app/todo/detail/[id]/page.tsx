import { TodoDetailTemplate } from '../../../../components/templates/TodoDetailTemplate'
const Page = ({ params, searchParams }: { params: { slug: string }; searchParams: { id: string } }) => {
    return <TodoDetailTemplate params={params} />
}

export default Page
