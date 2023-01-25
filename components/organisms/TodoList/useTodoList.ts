import { useRouter } from 'next/navigation'
import { NAVIGATION_PATH } from '../../../constants/navigations'

export const useTodoList = () => {
    const router = useRouter()
    const handleMoveDetailPage = (id: number) => {
        router.push(`${NAVIGATION_PATH.DETAIL}${id}`)
    }
    const handleMoveEditPage = (id: number) => {
        router.push(`${NAVIGATION_PATH.EDIT}${id}`)
    }
    const actions = {
        handleMoveDetailPage,
        handleMoveEditPage,
    }
    return [actions] as const
}
