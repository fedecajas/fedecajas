/* import ReactPixel from 'react-facebook-pixel'; */
import Head from 'next/head';

/* Components */
/* import Whatsapp from '@elements/Whatsapp';
import ImgNscript from '@elements/ImgNscript'; */
import Header from '@components/globals/Header';
import Footer from '@components/globals/Footer';

/* Assets */
import favicon from '@public/favicon.png';

/* Styles */
import globals from "@styles/globals.js";

function Layout(props) {
    const { children, title } = props
    const headTitle = `${title} - Fedecajas`

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href={favicon.src} />
                <title>{title === '' ? 'Fedecajas' : headTitle}</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <style jsx global>{globals}</style>
        </>
    );
}

export default Layout;