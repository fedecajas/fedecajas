import Form from '@components/globals/Form';
import Mapa from '@components/globals/Mapa';
import main from '@styles/main.module.scss';

import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

function Index() {
    return (
        <section className={main['contact__container']}>
            <Form />
            <div className={main['contact__container-contact']}>
                <h2>Información de contacto</h2>

                <div>
                    <h3>Dirección</h3>
                    <p>Carrera 10A No 67-58 Quinta Camacho, Bogotá D.C., Colombia</p>
                </div>
                <div>
                    <h3>Teléfonos</h3>
                    <p> <BsFillTelephoneInboundFill size={13} /> AFILIACIONES  317 399 9584</p>
                    <p> <BsFillTelephoneInboundFill size={13} /> ATENCIÓN AL USUARIO  315 219 7435</p>
                </div>
                <div>
                    <h3>Correos:</h3>
                    <p> <MdMarkEmailUnread size={20} />contactenos@fedecajas.com</p>
                    <p> <MdMarkEmailUnread size={20} />fedecajas@fedecajas.com </p>
                </div>
                <div>
                    <h3>Redes sociales:</h3>
                    <a href='https://www.facebook.com/FedecajasCol/' target='_blank'><AiFillFacebook color='black' size={40} /></a>
                    <a href='https://twitter.com/fedecajas/' target='_blank'><AiFillTwitterSquare color='black' size={40} /></a>
                    <a href='https://www.instagram.com/fedecajas/?hl=es' target='_blank'><AiFillInstagram color='black' size={40} /></a>
                </div>
            </div>
            <Mapa />
        </section>
    );
}

export default Index;