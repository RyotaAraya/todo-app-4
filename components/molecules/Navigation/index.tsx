import { NavLink } from '../../atom/NavLink'
import { NAVIGATION_PATH } from '../../../constants/navigations'
import { FC } from 'react'

export const Navigation: FC = () => {
    return (
        <nav>
            <ul>
                <NavLink title="TOP" linkPath={NAVIGATION_PATH.TOP} />
                <NavLink title="CREATE" linkPath={NAVIGATION_PATH.CREATE} />
            </ul>
        </nav>
    )
}
