import {useEffect} from 'react'
import { useRouter } from 'next/router';

function Limiter(props) {
    const router = useRouter()

    useEffect(() => {
    }, [])

    return (
        <>
            {props.children}
        </>
    );
}

export default Limiter;