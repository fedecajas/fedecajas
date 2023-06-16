import { Makeswift, Page as MakeswiftPage } from '@makeswift/runtime/next'

export async function getStaticPaths() {
    const makeswift = new Makeswift('deb3009b-5e6a-41d7-b35a-79a0629ff452')
    const pages = await makeswift.getPages()

    return {
        paths: pages.map((page) => ({
            params: { path: page.path.split('/').filter((segment) => segment !== '') },
        })),
        fallback: 'blocking',
    }
}

export async function getStaticProps(ctx) {
    const makeswift = new Makeswift('deb3009b-5e6a-41d7-b35a-79a0629ff452')
    const path = '/' + (ctx.params?.path ?? []).join('/home')
    const snapshot = await makeswift.getPageSnapshot(path, { preview: ctx.preview })

    if (snapshot == null) return { notFound: true }

    return { props: { snapshot } }
}

export default function Page({ snapshot }) {
    return <MakeswiftPage snapshot={snapshot} />
}