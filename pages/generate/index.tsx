import Wordcloud from '@/layout/wordcloud'
import { convert } from 'html-to-text'
import { GetServerSideProps } from 'next'

const Generate = (props: {
  content: string | undefined
  error: string | undefined
}) => (
  <Wordcloud {...props} title='生成'></Wordcloud>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { instance, username } = ctx.query
  const { id } = await (await fetch(`https://${instance}/api/v1/accounts/lookup?acct=${username}`)).json()
  const statuses = await (await fetch(`https://${instance}/api/v1/accounts/${id}/statuses?limit=40&exclude_reblogs=true`)).json()
  const { error } = statuses
  if (error) {
    return {
      props: {
        error
      }
    }
  }
  else {
    const content = statuses.map((status: { content: any }) => convert(status.content)).join().replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
    return {
      props: {
        content
      }
    }
  }
}

export default Generate
