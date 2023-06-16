import Link from 'next/link';
import { useState } from 'react';

import { cajas } from '@static/cajas';
import { redes, contact } from '@static/header.js';

/* Elements */
import { AiOutlineClose } from 'react-icons/ai'
import Contact from '@elements/Contact.jsx';
import Nav from '@elements/Nav.jsx';

import main from '@styles/main.module.scss';

const Header = (props) => {

    const [menu, setMenu] = useState(false);
    const [cajasMenu, setCajasMenu] = useState(false);
    const [academicoMenu, setAcademicoMenu] = useState(false);

    const handleContent = (key) => {
        if (key === 'cajas') {
            setCajasMenu(!cajasMenu)
        }
        if (key === 'academico') {
            setAcademicoMenu(academicoMenu)
        }
    }

    return (
        <>
            <header className={main['header']}>
                <Contact redes={redes} contact={contact} />
                <Nav menu={menu} setMenu={setMenu} />
            </header>
            {
                menu &&
                <div className={main['header__nav-menu']}>
                    <button onClick={() => setTimeout(() => { setMenu(!menu); setCajasMenu(false); setAcademicoMenu(false) }, 200)}>
                        <AiOutlineClose size={34} color='white' />
                    </button>
                    <nav>
                        {
                            cajasMenu &&
                            cajas.map(({ title, ruta }) => {
                                return (
                                    <Link key={ruta} href={`/cajas/${ruta}`}>
                                        <a onClick={() => setTimeout(() => { setMenu(!menu); setCajasMenu(!cajasMenu) }, 200)}>{title}</a>
                                    </Link>
                                )
                            }) ||
                            academicoMenu &&
                            <>
                                <Link href={'/gce'}>
                                    <a onClick={() => setTimeout(() => { setMenu(!menu); setAcademicoMenu(!academicoMenu) }, 200)}>GRUPO CONSULTOR EDUCATIVO GCE</a>
                                </Link>
                                <Link href={'/consultores'}>
                                    <a onClick={() => setTimeout(() => { setMenu(!menu); setAcademicoMenu(!academicoMenu) }, 200)}>NUESTROS CONSULTORES</a>
                                </Link>
                                <Link href={'/contenido'}>
                                    <a onClick={() => setTimeout(() => { setMenu(!menu); setAcademicoMenu(!academicoMenu) }, 200)}>CONTENIDO</a>
                                </Link>
                            </> ||
                            !cajasMenu && !academicoMenu &&
                            <>
                                <Link href={'/home'}>
                                    <a onClick={() => setTimeout(() => { setMenu(!menu) }, 200)}>Home</a>
                                </Link>
                                <Link href={'/nosotros'}>
                                    <a onClick={() => setTimeout(() => { setMenu(!menu) }, 200)}>Nosotros</a>
                                </Link>
                                <Link href={'#'}>
                                    <a onClick={() => handleContent('cajas')}>Cajas</a>
                                </Link>
                                <Link href={'/mapacajas'}>
                                    <a onClick={() => setTimeout(() => { setMenu(!menu) }, 200)}>Mapa Interactivo</a>
                                </Link>
                                <Link href={'#'}>
                                    <a onClick={() => handleContent('academico')}>Fedecajas Académico</a>
                                </Link>
                                <Link href={'/contacto'}>
                                    <a onClick={() => handleContent('academico')}>Contacto</a>
                                </Link>
                            </>
                        }
                    </nav>
                </div>
            }
        </>
    );
}

export default Header;