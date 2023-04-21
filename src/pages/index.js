import { useState, useEffect } from 'react';

/* Components */
import Title from '@elements/Title';
import Limiter from '@containers/Limiter';
import Service from '@components/body/Service';
import OurServices from '@components/body/OurServices';
import Afiliacion from '@components/body/Afiliacion';
import Section from '@components/globals/Section';

/* Información */
import { memorias } from '@static/memorias';
import { noticias } from '@static/noticias';
import { slides, slides2, slideDescription } from '@static/slider';

/* Components */
import Newsletter from '@components/body/Newsletter';
import Slider from '@components/globals/Slider';


/* Styles */
import main from '@styles/main.module.scss';

function Index() {
    const [modal, setModal] = useState(false);
    const [myWidth, setMyWidth] = useState(0)

    useEffect(() => {
        const width = window.innerWidth
        setMyWidth(width);
        setModal(true);
    }, [myWidth])

    return (
        <Limiter>
            {
                slides &&
                <Slider multimedia={slides} />
            }
            <Service />
            <Afiliacion />
            <Title backgroundColor={'#04aa5d'} title={'Nuestros Servicios - Fedecajas'} />
            <OurServices />
            <Title title={'Memorias - Fedecajas'} />
            <Section content={memorias} />
            <Title backgroundColor={'#ced4da'} title={'Noticias - Fedecajas'} />
            <Section
                backgroundColor={'#ced4da'}
                content={noticias}
            />
            {
                slides2 &&
                <Slider
                multimedia={slides2}
                slideDescription={slideDescription}
                token={'fest'}
            />
            }
        </Limiter>
    );
}

export default Index;