import React from 'react'
import Link from 'next/link'

const routes = [
    {key: "1", href: '/', title: 'Home'},
    {key: "2", href: '/about', title: 'About'}
]

const Nav = () => {

    // generate elements of routes as li
    const routesElements = routes.map(({href, title, key}) => (
        <li key={key}>
            <Link href={href} as={href}>
                <a>{title}</a>
            </Link>
        </li>
    ))

    return (
        <nav>
            <ul>
                {routesElements}
            </ul>
        </nav>
    )
}

export default Nav
