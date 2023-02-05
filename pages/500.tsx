import Wordcloud from '@/layout/wordcloud'

const Status500 = () => (
    <Wordcloud error='500 INTERNAL SERVER ERROR' content={undefined} title='500'></Wordcloud>
)

export default Status500
