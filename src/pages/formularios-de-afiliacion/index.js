import main from '@styles/main.module.scss';
import Link from 'next/link';
import Image from 'next/image';

/* assets */
import confremLogo from '@images/afiliaciones/logos/confrem-logo.webp';
import cafamazLogo from '@images/afiliaciones/logos/cafamaz-logo.webp';
import cafabaLogo from '@images/afiliaciones/logos/cafaba-logo.webp';
import confaorienteLogo from '@images/afiliaciones/logos/confaoriente-logo.webp';

function Index(props) {
    return (
        <>
            <section className={main["logos-container"]}>
                <h1>Formularios de afiliación</h1>
                <p>
                    Seleccione la caja de compensación de su interés:
                </p>

                <div>
                    <div>
                        <Link  href="/pdf/cofremform">
                            <a>
                                <figure><Image src={confremLogo} alt="Cofrem" /></figure>
                                <h3>CAJA DE COMPENSACIÓN FAMILIAR DEL META COFREM</h3>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link  href="/pdf/cafamazform">
                            <a>
                                <figure><Image src={cafamazLogo} alt="Cafamaz" /></figure>
                                <h3>CAJA DE COMPENSACIÓN FAMILIAR DEL AMAZONAS- CAFAMAZ</h3>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link  href="/pdf/cafabaform">
                            <a>
                                <figure><Image src={cafabaLogo} alt="Confaoriente" /></figure>
                                <h3>CAJA DE COMPENSACIÓN FAMILIAR DEL ORIENTE COLOMBIANO – COMFAORIENTE</h3>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link  href="/pdf/comfaorienteform">
                            <a>
                                <figure><Image src={confaorienteLogo} alt="Cafaba" /></figure>
                                <h3>CAFA DE COMPENSACIÓN FAMILIAR DE BARRANCABERMEJA – CAFABA</h3>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;