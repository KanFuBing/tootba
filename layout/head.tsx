import Head from 'next/head'

const LayoutHead = ({ title }: {
    title: string
}) => (
    <Head>
        <title>{`${title} | トゥート葉`}</title>
        <meta property='og:title' content={`${title} | トゥート葉`} />
        <meta property='og:description' content='マストドンのトゥートでよく使う言葉の Word Cloud を生成しよう！' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://tootba.chuangwai.top/card.jpg' />
    </Head>
)

export default LayoutHead
