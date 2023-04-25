import { useRouter } from 'next/router';
/* import { DataContext } from '@context/DataContext.js'; */

import SEO from '@bradgarropy/next-seo';
import Layout from '@containers/Layout';

/* Assets */
import fedecajasFacebook from '@images/Fedecajas-banner-facebook.jpg';

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    const { pathname } = router;
    const myPathname =
        pathname.split('/')[1].charAt(0).toUpperCase()
        + pathname.split('/')[1].slice(1);

    const descripciónFedecajas = 'La Federación Nacional de Cajas de Compensación Familiar \
    “FEDECAJAS”, es una entidad privada, sin ánimo de lucro, constituida como tal el 17 de  octubre de 1980, mediante personería jurídica No 5423, expedida por el Ministerio de la Protección Social'

    const urlFedecajas = 'https://www.fedecajas.com';
    const bannerFacebook = fedecajasFacebook.src;

    return (
        <>
            <SEO
                title='Fedecajas'
                description={descripciónFedecajas}
                themeColor={'#04AA5D'}
                colorScheme={'light'}
                keywords={[
                    'Fedecajas',
                    'Fondo de pensiones',
                    'Federación nacional de cajas de compensación',
                    'Agremiación',
                    'Igualdad y equidad',
                ]}
                facebook={{
                    url: urlFedecajas,
                    image: bannerFacebook,
                    type: 'website'
                }}
            />
            {/* <DataContext> */}
            <Layout title={myPathname === '[[...path]]' ? '' : myPathname}>
                <Component {...pageProps} />
            </Layout>
            {/* </DataContext> */}
        </>
    )
}

export default MyApp;