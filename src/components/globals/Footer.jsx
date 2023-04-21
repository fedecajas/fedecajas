import Logo from '@elements/Logo';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FcCellPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';

import { logosFooter } from '@static/footer';

import main from '@styles/main.module.scss';

function Footer(props) {
    return (
        <footer className={main['footer']}>
            <div className={main['footer__column']}>
                <Logo
                    size={1.6}
                />
                <p style={{fontWeight: '700'}}>Federación Nacional de Cajas de Compensación Familiar</p>
            </div>
            <div className={main['footer__column']}>
                <h3>INFORMACION CONTACTO</h3>
                <p>Dirección: : Carrera 10 A N° 67- 58 Quinta Camacho, Bogotá D.C. Colombia. </p>
                <div className={main['footer__column-data']}>
                    <BsFillTelephoneFill color={'white'} size={15} />
                    <p> +57 315 219 7435 </p>
                </div>
                <div className={main['footer__column-data']}>
                    <FcCellPhone color={'white'} size={20} />
                    <p> +57 315 219 7435 </p>
                </div>
                <div className={main['footer__column-data']}>
                    <AiOutlineMail color={'white'} size={20} />
                    <div>
                        <p>contactenos@fedecajas.com</p>
                        <p>fedecajas@fedecajas.com</p>
                        <p>protecciondedatos@fedecajas.com</p>
                    </div>
                </div>
            </div>
            <div className={main['footer__column']}>
                <h3>NOTIFICACIONES JUDICIALES</h3>
                <p>contabilidad@fedecajas.com</p>
            </div>
            <div className={main['footer__column']}>
                <h3>Nuestros Aliados</h3>
                <div className={main['footer__column-logos']}>
                    {
                        logosFooter.map(({ img, key }) => (
                            <figure key={key}>
                                {
                                    img()
                                }
                            </figure>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;