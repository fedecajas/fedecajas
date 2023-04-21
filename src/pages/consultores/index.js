import Presentation from "@components/cajas/Presentation";

import main from '@styles/main.module.scss';

function Index(props) {
    return (
        <section className={main['container__cosultores']}>
            <Presentation title={'Nuestros consultores - Diplomado CCF'} subtitle={'Fedecajas'} className={'container__presentation'} />

            <div>
                <h3>William Alzate Rincón</h3>
                <p>Abogado de la Universidad Libre de Bogotá, con Especialización en Derecho Administrativo y Constitucional de la Universidad Católica de Colombia; conciliador externo de la Cámara de Comercio de Bogotá, vinculado al Sistema de Compensación Familiar desde 1985, ha ocupado diferentes cargos en la Caja de Compensación Familiar de Córdoba- COMFACOR, asesor jurídico de la Caja de Compensación Familiar de Amazonas - CAFAMAZ, y en la Federación Nacional de Cajas de Compensación Familiar - FEDECAJAS ocupa la Presidencia Ejecutiva desde octubre de 2021 hasta la fecha. Adicionalmente, ha tenido importantes logros jurídicos en defensa del Sistema de Compensación Familiar.</p>

                <h3>Karina Arias M</h3>
                <p>Ingeniera en multimedia experta en el desarrollo de material interactivo y productos multimediales, para distintos campos especialmente en la educación en linea ó E-learning. </p>

                <h3>Carlos Calderón S</h3>
                <p>Magíster en Administración de Empresas MBA Universidad Externado, Especialización en Finanzas Universidad de los Andes, Contador Público Titulado Universidad Javeriana. Catedrático Especializaciones y MBA en las universidades: Javeriana, Rosario, Sabana, Externado, Universidad Católica, ICESI, Salle, UNAB, Tecnológica de Bolívar.-Conferencista FORUM Universidad de la Sabana, FENALCO, Cámara de Comercio de Bogotá </p>

                <h3>Sandra Mercedes Adames Prada</h3>
                <p>Psicóloga. Especialista Gerencia en Salud Ocupacional y Recursos Humanos. Consultor de empresas como ARL Alfa, ARL Liberty, Beneficios Integrales Oportunos, Flota la Macarena, Ciudad Móvil, Paison, Endepa, SYAC, Nabors Drilling, Ecopetrol, Petroworks Avianca, Fiduciaria Popular, BBVA Horizonte, Avesco, Pimpollo, Crown Colombiana, Papelsa, , Dvinni, Funeraria Gaviria, Colompack, Creaciones Pachicas, Frito lay,Contaduría General de la Nación. Directora de Gestión Humana y Asesora en Salud en el Trabajo – Educasalud.</p>

                <h3>Frey Augusto González</h3>
                <p>Ingeniero Industrial. Especialista en Higiene y Salud Ocupacional. Auditor Líder HSEQ. Consultor Cámara de Comercio de Bogotá - Consultoría Especializada. Consultor Banco Interamericano de Desarrollo (BID) Consultor Programa de las Naciones Unidas para el Desarrollo (PNUD) – Programa de Desarrollo de Proveedores. Director de Proyectos de Gestión de Calidad - Fundes Colombia</p>

                <h3>Rodrigo Suárez</h3>
                <p>Experto colombiano en gestión de riesgos, crédito, cartera y cobranzas. Economista – especialista en Banca de la Universidad de los Andes. Magister Business Administration – ISEAD – Univ. Complutense de Madrid. Ejecutivo de entidades bancarias colombianas como: Banrepública, Bancolombia, Davivienda, BBVA y FEN en las que se ha desempeñado en cargos de vicepresidente financiero, vicepresidente técnico, director de Crédito, de Cartera, de Planeación y de Análisis Financiero.</p>

                <h3>Daniel Caicedo Ortiz</h3>
                <p>Comunicador Social, especializado en Tecnologías de Información y Comunicación, TIC, diseñando y desarrollando contenidos educativos para plataformas virtuales de los sectores académico y corporativo. Diseñó y estructuró la Facultad de Medios Audiovisuales de la Universidad Politécnico Grancolombiano. Fue decano de la misma durante 7 años y de la Facultad de Mercadeo, Comunicación y Artes. CEO del Grupo Consultor Estratégico en Comunicaciones, Presidente del Centro Internacional de Petróleo y Energía, CIPE Colombia. Ex-miembro de la Junta Directiva de la Empresa de Telecomunicaciones de Bogotá SA, ESP., ETB. Consultor de la USAID para el Programa de Gobernabilidad Regional (RGA) en el desarrollo de contenidos virtuales Vías Regionales y de Planeación Territorial conEnfoque de Género (DNP, INVÏAS, MINTRANSPORTE Y COLOMBIA COMPRAEFICIENTE).</p>
            </div>
        </section>
    );
}

export default Index;