import Image from 'next/image';
import main from '@styles/main.module.scss';

/* Assets */
import empresaIcon from '@images/icons/empresa-requisitos.webp';
import cumplidoIcon from '@images/icons/cumplido-icon.png'

function Index(props) {
    return (
        <>
            <section className={main['requisitos-container']}>
                <h1>REQUISITOS PARA EMPRESA</h1>
                <p>
                    Señor empresario para realizar el proceso de afiliación de su empresa a una CCF, debe tener en cuenta la
                    siguiente información:
                </p>

                <div>
                    <div>
                        <figure><Image src={empresaIcon} alt="Empresa icon" /></figure>
                    </div>
                    <p>Diligencie completamente el formulario de afiliación sin enmendaduras, con información clara completa
                        y letra legible.</p>
                </div>

                <p>Tenga en cuenta las siguientes indicaciones:</p>

            </section>

            <section className={main['pasos-container']}>
                <div>
                    <figure><Image src={cumplidoIcon} alt="cumplido icon" /></figure>
                    <h3>SI ES UNA PERSONA NATURAL</h3>
                    <ul>
                        <li>Formulario Afiliación de Empleador diligenciado.</li>
                        <li>Fotocopia de la Cédula de ciudadanía del empleador.</li>
                        <li>Copia de la cámara de comercio (Si la tiene).</li>
                        <li>Copia del R.U.T.</li>
                        <li>Nomina o relación de empleados con sus respectivos salarios.</li>
                    </ul>
                </div>
                <div>
                    <figure><Image src={cumplidoIcon} alt="cumplido icon" /></figure>
                    <h3>SI ES UNA PERSONA JURÍDICA</h3>
                    <ul>
                        <li>Formulario de Afiliación de Empleador diligenciado.</li>
                        <li>Certificado de existencia y representación legal:</li>
                        <ul>
                            <li>Si se trata de una entidad sin ánimo de lucro, fotocopia de la personería jurídica</li>
                            <li>Si es una Cooperativa, Certificado de la Superintendencia de Economía Solidaria</li>
                            <li>Si es un Consorcio o unión Temporal, Documento de constitución o conformación</li>
                        </ul>
                        <li>Nomina o relación de empleados con sus respectivos salarios.</li>
                        <li>Fotocopia de la Cédula de ciudadanía del empleador.</li>
                        <li>Copia del R.U.T.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Index;