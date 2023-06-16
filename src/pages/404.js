import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function FourOhFour() {
    const router = useRouter()
    useEffect(() => {
        router.push('/home')
    }, [])

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '40px 20px'
        }}>
            {/* <Link href="/home">
                <a style={{
                    color: 'black',
                    marginTop: '20px',
                    backgroundColor: '#04AA5D',
                    padding: '8px 10px'
                }}>
                    Go back home
                </a>
            </Link> */}
        </section>
    )
}