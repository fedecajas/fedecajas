import Link from 'next/link'

export default function FourOhFour() {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '40px 20px'
        }}>
            <h1>No existe esta página, crea una página</h1>
            <Link href="/home">
                <a style={{
                    color: 'black',
                    marginTop: '20px',
                    backgroundColor: '#04AA5D',
                    padding: '8px 10px'
                }}>
                    Go back home
                </a>
            </Link>
        </section>
    )
}