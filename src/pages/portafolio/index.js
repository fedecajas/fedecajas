import main from '@styles/main.module.scss';

function Index(props) {
    return (
        <section className={main["portafolio-container"]}>
            <h1 className={main["Estilo2"]}>PORTAFOLIO CCF</h1>
            <ol>
                <li>Educación: Programas de formación integral.</li>
                <li>Recreación: Centros vacacionales y recreativos.</li>
                <li>Vivienda FOVIS: Subsidio Familiar de Vivienda.</li>
                <li>Vivienda nueva.</li>
                <li>Construcción en sitio propio.</li>
                <li>Mejoramiento.</li>
                <li>Bibliotecas: Red de información para acceder al conocimiento mediante sistemas automatizados.</li>
                <li>Capacitación: Formación para el trabajo y generación de empleo.</li>
                <li>Créditos de fomento: para vivienda, educación, salud, recreación, libre inversión y fomento empresarial, con tasas muy flexibles y competitivas.
                </li>
                <li>Salud</li>
                <li>Turismo Social</li>
                <li>Fondo de solidaridad FOSFEC</li>
                <li>Jornada Escolar Complementaria</li>
                <li>Mercadeo</li>
            </ol>
        </section>
    );
}

export default Index;