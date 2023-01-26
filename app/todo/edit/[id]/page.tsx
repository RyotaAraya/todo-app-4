import { TodoEditTemplate } from '../../../../components/templates/TodoEditTemplate'
type Params = {
    params: { slug: string }
}
const Page = ({ params }: Params) => {
    return <TodoEditTemplate params={params} />
}

export default Page
