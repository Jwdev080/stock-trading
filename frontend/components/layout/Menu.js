'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MainMenu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
            <li className={`menu-item ${pathname === "/markets" ? "current-menu-item" : ""}`}>
                <Link href="/markets">Markets </Link>
            </li>
                <li className="trading">
                    <Link href="/trading">Trading</Link>
                </li>
                <li className="deposit">                               
                    <Link href="/deposit">Deposit</Link>
                </li>
                <li className="withdraw">
                    <Link href="/withdraw">Withdraw</Link>
                </li>
                <li className="faq">
                    <Link href="/faq">FAQ</Link>
                </li>
                <li className="contact">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

