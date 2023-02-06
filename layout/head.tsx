import Head from 'next/head'

const LayoutHead = ({ title }: {
    title: string
}) => (
    <Head>
        <title>{`${title} | トゥート葉`}</title>

        <meta name='application-name' content='トゥート葉' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='トゥート葉' />
        <meta name='description' content='マストドンのトゥートでよく使う言葉の Word Cloud を生成しよう！' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#205E61' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='rgb(159,195,250)' />

        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta property='og:title' content={`${title} | トゥート葉`} />
        <meta property='og:description' content='マストドンのトゥートでよく使う言葉の Word Cloud を生成しよう！' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://tootba.chuangwai.top/card.jpg' />
    </Head>
)

export default LayoutHead
