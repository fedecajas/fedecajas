import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import main from '@styles/main.module.scss';

export default function FourOhFour() {
    const router = useRouter()

    useEffect(() => {
        router.replace('/home')
    }, [])

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '40px 20px',
            minHeight: '80vh',
        }}>
            <span className={main['loader']}></span>
            <h2 style={{
                margin: '20px 0'
            }}>Cargando...</h2>
        </section>
    )
}