import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='es'>
                <Head>
                    <meta httpEquiv='Content-Type' content="text/html; charset=utf-8" />
                </Head>
                <body>
                    <Main />
                    <section id='myportal'></section>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;