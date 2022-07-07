import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar';
import GlobalHead from '../../components/GlobalHead/GlobalHead';

type Props = {}

export default function index({ }: Props) {
    return (
        <div>
            <GlobalHead />
            <NavBar />
            <main>
                
            </main>
        </div>
    )
}