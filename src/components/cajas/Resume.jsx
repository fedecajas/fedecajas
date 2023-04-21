import main from '@styles/main.module.scss';

function Resume(props) {
    const { resume } = props;

    return (
        <section className={main['container__resume']}>
            <p>{resume}</p>
        </section>
    );
}

export default Resume;