import Image from "next/image";
/* Components */
import Presentation from "@components/cajas/Presentation";
/* Assets */
import trabajadorIcon from '@images/icons/trabajadores-requisitos.webp';

import main from '@styles/main.module.scss';

function Index(props) {
    return (
        <section>
            <Presentation
                title={'Requisitos para trabajadores'}
                className={'container__trabajadores'} />
            <section className={main['trabajadores-container']}>
                <div>
                    <div>
                        <figure><Image src={trabajadorIcon} alt="Empresa icon" layout={'intrinsic'} loading={'eager'} /></figure>
                    </div>
                    <p>Es necesario que tenga en cuenta que si su empresa tiene sede en Bogotá, pero sus trabajadores prestan sus servicios en otras ciudades, estos últimos deberán afiliarse a la Caja de Compensación Familiar (CCF) donde se encuentren radicados.</p>
                </div>

                <ul className={main['trabajadores-container_list']}>
                    <li>De manera consecuente siga las siguientes indicaciones para la afiliación de sus trabajadores:</li>
                    <li>Defina la CCFR de la región en donde el trabajador va a prestar sus servicios.</li>
                    <li>Una vez identificada la CCF, descarga y diligencie los formularios que esta exige, atendiendo las siguientes directrices:</li>
                </ul>

                <p>1. Para trabajador en general</p>

                <ul className={main['trabajadores-container_list2']}>
                    <li>Formato Afiliación del trabajador totalmente diligenciado, con información clara y completa y en letra legible, firmado por el trabajador y su empresa.</li>
                    <li>Fotocopia del documento de identidad actualizado del trabajador, legible, clara, completa y ampliada al 150% y sin enmendaduras.</li>
                </ul>

                <p>2. Trabajador casado o en unión libre</p>

                <ul className={main['trabajadores-container_list2']}>
                    <li>Copia del Registro civil de matrimonio y/o partida de matrimonio eclesiástica o fotocopia simple en las mismas condiciones.</li>
                    <li>Formato declaración juramentada Ministerio de Trabajo.</li>
                    <li>Copia del Registro civil de nacimiento de cada uno de los hijos con parentesco, copia legible, sin tachaduras, sin enmendaduras con información veraz, clara y completa.</li>
                    <li>Certificado de escolaridad a partir de los 12 años hasta los 18 años, expedido por establecimiento docente debidamente aprobado por la Secretaria de educación.</li>
                    <li>Constancia laboral del cónyuge o compañero(a) permanente donde indique su salario; en el caso de no trabajar constancia indicando no estar vinculado(a) a ninguna Empresa.</li>
                    <li>Fotocopia del documento de identidad actualizado del cónyuge o compañero permanente, legible, clara, completa y ampliada al 150% y sin enmendaduras.</li>
                    <li>
                        Fotocopia del documento de Identidad actualizado de los hijos a partir de los siete (7) años, ampliado al 150%, legible, completo y sin enmendaduras.
                        <span> HIJASTROS (HIJOS APORTADOS AL MATRIMONIO O UNIÓN LIBRE) (Documentos legibles)</span>
                    </li>

                    <ul>
                        <li>Si usted tiene hijos aportados o Hijastros debe tener en cuenta las siguientes indicaciones:</li>
                        <li>Acta de custodia expedida por la entidad legal competente sobre la guarda del hijo o los hijos. (art. 26 Ley 21/82 Circular 0002/2012 SSF).</li>
                        <li>Fotocopia del documento de Identidad actualizado de los hijos o hijastros a partir de los siete (7) años, ampliado al 150%, legible, completo y sin enmendaduras.</li>
                        <li>Fotocopia del documento de identidad de la madre o padre biológico (a) cuando no presenta custodia.</li>
                    </ul>
                </ul>

                <p>3. Padres mayores de 60 años (Documentos legibles)</p>

                <ul className={main['trabajadores-container_list2']}>
                    <li>Copia Registro civil de nacimiento del trabajador que demuestre parentesco, legible, sin tachaduras, sin enmendaduras con información veraz, clara y completa que expidan la Registraduría Nacional del Estado Civil.</li>
                    <li>Fotocopia del documento de identidad actualizado delos padres, legible, clara y completa, ampliada al 150% y sin enmendaduras.</li>
                    <li>Formato de la Declaración juramentada acreditando la dependencia económica.</li>
                    <li>Certificado de COLPESIONES, donde conste que no recibe pensión.</li>
                </ul>
            </section>
        </section>
    );
}

export default Index;