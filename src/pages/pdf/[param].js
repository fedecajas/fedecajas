import { useRouter } from 'next/router';
import { pdfFiles } from '@static/pdfFiles';

/* Components */
import Limiter from '@containers/Limiter';
import Link from 'next/link';
import Image from 'next/image';

import main from '@styles/main.module.scss';

/* Assets */
import pdfIcon from '@images/icons/pdf-icon.png'

function Descargables(props) {
    const router = useRouter()
    const { param } = router.query

    return (
        <Limiter>
            {
                pdfFiles.map(({ ruta, name, pdf }) => {
                    if (param === ruta) {
                        return (
                            <section key={name} className={main['formularios-container']}>
                                <h1>Formularios de afiliación</h1>
                                <p>
                                    Caja de compensación {name}
                                </p>

                                <div>
                                    {
                                        pdf.map(({ title, archivo }) => {
                                            return (
                                                <div key={title}>
                                                    <a
                                                        download={'form-declaracion-cafaba.pdf'}
                                                        href={archivo}
                                                        target='_blank'
                                                    >
                                                        <figure>
                                                            <Image src={pdfIcon} alt="pdf logo" objectFit='cover' />
                                                        </figure>
                                                        <h3>{title}</h3>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </section>
                        )
                    }
                })
            }
        </Limiter>
    );
}

export default Descargables;