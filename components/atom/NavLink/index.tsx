import { FC } from 'react'
import Link from 'next/link'

type Props = {
    title: string
    linkPath: string
}
export const NavLink: FC<Props> = ({ title, linkPath }) => {
    return (
        <li>
            <Link href={linkPath}>{title}</Link>
        </li>
    )
}
