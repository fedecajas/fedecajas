import { useRouter } from 'next/router'

/* data */
import { cajas } from '@static/cajas';

/* Components */
import Title from '@elements/Title';
import Limiter from '@containers/Limiter';
import Body from '@components/cajas/Body';
import Resume from '@components/cajas/Resume';
import Section from '@components/globals/Section';
import Presentation from '@components/cajas/Presentation';

const Caja = () => {
    const router = useRouter()
    const { caja } = router.query

    if (cajas) {
        return (
            <Limiter>
                {
                    cajas.map((item) => {
                        if (item.ruta === caja) {
                            return (
                                <section key={item.title}>
                                    <Presentation
                                        className={'container__presentation'}
                                        title={item.title}
                                        subtitle={item.dep}
                                    />
                                    <Body
                                        title={item.title}
                                        logo={item.logo}
                                        content={item.content}
                                    />
                                    {
                                        item.resumen != undefined &&
                                        <Resume title={item.title} resume={item.resumen} />
                                    }
                                    {
                                        item.galeria &&
                                        <>
                                            <Title backgroundColor={'#FFF'} title={`Fotos - ${item.title}`} />
                                            <Section content={item.galeria} />
                                        </>
                                    }
                                </section>
                            )
                        }
                    })
                }
            </Limiter>
        )
    }
}

export default Caja
