import Image from "next/image"

/* Assets */
import logoCer from '@logosAliados/logo-CER.png'
import logoGce from '@logosAliados/logo-GCE.png'
import logoCorpensar from '@logosAliados/Logo-CORPENSAR.png'
import logoUnipamplona from '@logosAliados/logo-Upamplona.png'
import logoCun from '@logosAliados/logo-CUN.png'
import logoRSB from '@logosAliados/logo-RSB.png'

export const logosFooter = [
    {
        key: '01',
        img: () => (
            <a href='https://www.cerexperiencia.com/' target={'_blank'}>
                <Image
                    src={logoCer}
                    alt="CER logo"
                    width={150 / 2}
                    height={150 / 2}
                    priority={false}
                    loading="lazy"
                />
            </a>
        )
    },
    {
        key: '02',
        img: () => (
            <a href='https://www.grupoconsultoreducativo.com/' target={'_blank'}>
                <Image
                    src={logoGce}
                    alt="GCE logo"
                    width={150 / 2}
                    height={150 / 2}
                    priority={false}
                    loading="lazy"
                />
            </a>
        )
    },
    {
        key: '03',
        img: () => (
            <a href='https://www.corpensar.com/' target={'_blank'}>
                <Image
                    src={logoCorpensar}
                    alt="Corpensar logo"
                    width={150 / 2}
                    height={150 / 2}
                    priority={false}
                    loading="lazy"
                />
            </a>
        )
    },
    {
        key: '04',
        img: () => (
            <a href='https://www.unipamplona.edu.co/' target={'_blank'}>
                <Image
                    src={logoUnipamplona}
                    alt="Unipamplona logo"
                    width={150 / 2}
                    height={150 / 2}
                    priority={false}
                    loading="lazy"
                />
            </a>
        )
    },
    {
        key: '05',
        img: () => (
            <a href='https://cun.edu.co/' target={'_blank'}>
                <Image
                    src={logoCun}
                    alt="CUN logo"
                    width={150 / 2}
                    height={150 / 2}
                    priority={false}
                    loading="lazy"
                />
            </a>
        )
    },
    {
        key: '06',
        img: () => (
            <a href='https://rsbabogados.com.co/' target={'_blank'}>
                <Image
                    src={logoRSB}
                    alt="RSB logo"
                    width={150 / 2}
                    height={150 / 2}
                    priority={false}
                    loading="lazy"
                />
            </a>
        )
    },
]