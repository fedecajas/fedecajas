import Link from 'next/link';
import Image from 'next/image';

import { afiliaciones } from '@static/afiliaciones';

/* styles */
import main from '@styles/main.module.scss';

function Afiliacion(props) {
    return (
        <section className={main['afiliaciones']}>
            {
                afiliaciones.map(({ img, title, subtitle, desc, desc2, desc3, ancla }) => (
                    <div key={title}>
                        {
                            img &&
                            <figure>
                                <Image
                                    src={img}
                                    alt="Icon service"
                                    width={660}
                                    height={360}
                                    priority={true}
                                    loading="eager"
                                    objectFit='cover'
                                    objectPosition={'center'}
                                />
                            </figure>
                        }
                        <div>
                            <h1>{title}</h1>
                            <h3>{subtitle}</h3>
                            {desc && <p>- {desc}</p>}
                            {desc2 && <p>- {desc2}</p>}
                            {desc3 && <p>- {desc3}</p>}
                            {
                                title === 'Afiliaciones CCF' ?
                                    <Link  href={ancla}>
                                        Más información
                                    </Link> :
                                    <a href={ancla} target='_blank'>
                                        Más información
                                    </a>
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default Afiliacion;