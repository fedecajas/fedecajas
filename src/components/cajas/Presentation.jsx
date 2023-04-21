import main from '@styles/main.module.scss';

function Presentation(props) {
    const { title, subtitle, className } = props
    return (
        <section className={main[className]}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className={main[`${className}-modal`]}></div>
        </section>
    );
}

export default Presentation;