/* Styles */
import main from '@styles/main.module.scss';
import Link from 'next/link';
import Image from 'next/image';

/* assets */
import confremLogo from '@images/afiliaciones/logos/confrem-logo.webp';
import cafamazLogo from '@images/afiliaciones/logos/cafamaz-logo.webp';
import cafabaLogo from '@images/afiliaciones/logos/cafaba-logo.webp';
import confaorienteLogo from '@images/afiliaciones/logos/confaoriente-logo.webp';

import afiliaciones from '@images/afiliaciones/icons/Afiliaciones.png';
import empresas from '@images/afiliaciones/icons/Empresas.png';
import trabajadores from '@images/afiliaciones/icons/Trabajadores.png';

function Index(props) {
    return (
        <>
            <section className={main["afiliaciones-container"]}>
                <h1>AFILIACIONES</h1>
                <p>
                    Si su empresa tiene sede en Bogotá y desea realizar la afiliación de trabajadores o empleadores a las
                    siguientes Cajas de Compensación Familiar, lo puede hacer a través de FEDECAJAS:
                </p>

                <div>
                    <div>
                        <figure>
                            <Image src={confremLogo} alt="Cofrem" />
                        </figure>
                        <h3>CAJA DE COMPENSACIÓN FAMILIAR DEL META COFREM</h3>
                    </div>
                    <div>
                        <figure><Image src={cafamazLogo} alt="Cafamaz" /></figure>
                        <h3>CAJA DE COMPENSACIÓN FAMILIAR DEL AMAZONAS- CAFAMAZ</h3>
                    </div>
                    <div>
                        <figure><Image src={cafabaLogo} alt="Confaoriente" /></figure>
                        <h3>CAJA DE COMPENSACIÓN FAMILIAR DEL ORIENTE COLOMBIANO – COMFAORIENTE</h3>
                    </div>
                    <div>
                        <figure><Image src={confaorienteLogo} alt="Cafaba" /></figure>
                        <h3>CAFA DE COMPENSACIÓN FAMILIAR DE BARRANCABERMEJA – CAFABA</h3>
                    </div>
                </div>

                <p>Para radicación de afiliaciones de otras Cajas de Compensación Familiar – CCF - Favor dirigirse al sitio
                    web de la CCF correspondiente y realizar el registro a través de las plataformas digitales para tal fin.
                </p>
            </section>

            <section className={main["requeriments-container"]}>
                <div>
                    <Link  href="/requisito-empresa">
                        <a>
                            <figure><Image src={empresas} alt="empresas icon" /></figure>
                            <h3>Requisitos para empresa</h3>
                        </a>
                    </Link>
                    <Link  href='/requisito-trabajadores'>
                        <a>
                            <figure><Image src={trabajadores} alt="trabajadores icon" /></figure>
                            <h3>Requisitos para trabajadores</h3>
                        </a>
                    </Link>
                    <Link  href="/formularios-de-afiliacion">
                        <a>
                            <figure><Image src={afiliaciones} alt="afiliaciones icon" /></figure>
                            <h3>Formularios de afiliación</h3>
                        </a>
                    </Link>
                </div>
            </section>

            <section className={main["requeriments-container"]}>
                <p style={{ fontWeight: "700; color: #04AA5D" }} className={main["paragraph"]}>RADICACIÓN DE AFILIACIONES</p>
                <p className={main["paragraph"]}>SEDE FEDECAJAS – BOGOTÁ D.C</p>
                <p className={main["paragraph"]}>CARRERA 10 A N° 67-58 BARRIO QUINTA CAMACHO</p>
                <p className={main["paragraph"]}><strong> DE LUNES A VIERNES DE </strong></p>
                <p className={main["paragraph"]}>9:00 A.M A 12:30 P.M Y DE 1:30 P.M A 4:00 P.M</p>
                <br />
                <p className={main["paragraph"]}>O A TRAVÉS DEL CORREO ELECTRÓNICO afiliacionesbogota@cofrem.com.co <br />
                    ENVIANDO LA DOCUMENTACIÓN COMPLETA, LEGIBLE Y EN ARCHIVO PDF.</p>
                <p style={{ fontWeight: "700; color: #04AA5D;" }} className={main["paragraph"]}>Linea de atención para afiliaciones Fedecajas
                </p>
                <p className={main["paragraph"]}>+57 317 399 9584</p>
            </section>
        </>
    );
}

export default Index;