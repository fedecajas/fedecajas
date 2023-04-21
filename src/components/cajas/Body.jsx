import Image from "next/image";
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

import main from '@styles/main.module.scss';

function Body(props) {
    const { content, logo, title } = props;
    return (
        <section className={main['container__body']}>
            {
                logo &&
                <div className={main['container__body-logo']}>
                    <figure>
                        <Image
                            src={logo}
                            alt={`${title} logo`}
                            objectFit="cover"
                            loading="lazy"
                        />
                    </figure>
                </div>
            }
            <div className={main['container__body-info']}>
                <h1>Información de contacto</h1>
                {
                    content.gerente != '' &&
                    <div>
                        <h3>Gerente:</h3>
                        <p>{content.gerente}</p>
                    </div>
                }
                <div>
                    <h3>Télefonos de contacto:</h3>
                    {
                        content.telefonos.tel1 &&
                        <p>{content.telefonos.tel1}</p>
                    }
                    {
                        content.telefonos.tel2 &&
                        <p>{content.telefonos.tel2}</p>
                    }
                    {
                        content.telefonos.tel3 &&
                        <p>{content.telefonos.tel3}</p>
                    }
                    {
                        content.telefonos.tel4 &&
                        <p>{content.telefonos.tel4}</p>
                    }
                </div>
                <div>
                    <h3>Website:</h3>
                    <p>{content.website}</p>
                </div>
                {
                    content.email != undefined &&
                    <div>
                        <h3>Email:</h3>
                        <p>{content.email}</p>
                    </div>
                }
                <div>
                    <h3>Redes sociales:</h3>
                    <div>
                        <a target="_blank" href={content.redes.facebook}><BsFacebook size={40} /></a>
                        <a target="_blank" href={content.redes.instagram}><AiFillInstagram size={50} /></a>
                        <a target="_blank" href={content.redes.twitter}><AiFillTwitterCircle size={50} /></a>
                    </div>
                </div>
                <div>
                    <h2>Nosotros:</h2>
                    <p>{content.nosotros}</p>
                </div>
            </div>
        </section>
    );
}

export default Body;