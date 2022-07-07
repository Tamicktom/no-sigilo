import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar';
import GlobalHead from '../../components/GlobalHead/GlobalHead';

type Props = {}

export default function index({ }: Props) {

    return (
        <div>
            <GlobalHead />
            <NavBar />
            <main style={{ color: 'white', marginTop: '75px' }}>

                <p>MARCA DO PRODUTO</p>
                <p>Código: <span>xxxxxx</span></p>
                <p><span>Nome do Produto</span> - Descrição Curta, Descrição Curta, Descrição Curta, Descrição Curta, Descrição Curta.</p>

                {/* parte com as fotos do produto */}
                <div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </div>
    )
}