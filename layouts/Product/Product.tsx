import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar';

type Props = {
    children: React.ReactNode
}

export default function Product({ children }: Props) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}