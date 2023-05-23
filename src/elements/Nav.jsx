import { useState } from 'react';

import { BiWorld } from 'react-icons/bi'
import { AiOutlineMenuUnfold, AiOutlineMenu, AiFillHome } from 'react-icons/ai'

import Link from 'next/link';
import Logo from './Logo';

/* Cajas */
import { cajas } from '@static/cajas';

/* Styles */
import main from '@styles/main.module.scss';

export default function Nav(props) {
    const { menu, setMenu } = props;

    const [dropDown, setDropDown] = useState(false);
    const [dropDown2, setDropDown2] = useState(false);

    const handleHover = () => {
        setTimeout(() => { setDropDown(false) }, 200)
    }

    const handleHover2 = () => {
        setTimeout(() => { setDropDown2(false) }, 500)
    }

    const handleMouseEnter = (key) => {
        if (key === 'cajas') {
            setDropDown(true)
            setDropDown2(false)
        }

        if (key === 'academico') {
            setDropDown(false)
            setDropDown2(true)
        }
    }

    const handleAcademico = () => {
        setDropDown2(!dropDown2)
        setDropDown(false)
    }

    return (
        <>
            <nav className={main['header__nav']}>
                <Link href={'/'}>
                    <a>
                        <Logo size={1.4} />
                    </a>
                </Link>

                <ul className={main['header__nav-links']}>
                    <li><Link href={'/'}><a><AiFillHome size={15} /> INICIO </a></Link></li>
                    <li><Link href={'/nosotros'}><a> NOSOTROS </a></Link></li>
                    <li
                        onMouseEnter={() => handleMouseEnter('cajas')}
                    >
                        <Link href={'/mapacajas'}>
                            <a> CAJAS </a>
                        </Link>
                    </li>
                    <li onClick={() => handleAcademico()}><Link href={'#'}><a><BiWorld size={15} />FEDECAJAS ACADÉMICO</a></Link></li>
                    <li><Link href={'/contacto'}><a>Contacto</a></Link></li>
                </ul>

                <button onClick={() => setMenu(!menu)}>
                    <AiOutlineMenu size={32} color='white' />
                </button>
            </nav>
            {
                dropDown &&
                <div onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => handleHover()} className={main['header__dropDown']}>
                    <ul>
                        {
                            cajas.map(({ ruta, title }) => {
                                return (
                                    <li key={ruta} onClick={() => setDropDown(!dropDown)}>
                                        <Link href={`/cajas/${ruta}`}>
                                            {title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            {
                dropDown2 &&
                <div className={main['header__dropDown']} onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => handleHover2()}>
                    <ul>
                        <li><Link href={'/gce'}>GRUPO CONSULTOR EDUCATIVO GCE</Link></li>
                        <li><Link href={'/consultores'}>NUESTROS CONSULTORES</Link></li>
                        <li><Link href={'/contenido'}>CONTENIDO</Link></li>
                    </ul>
                </div>
            }
        </>
    );
}