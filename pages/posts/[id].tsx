import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Post = ({ postData }: { postData: {
  id: string,
  title: string,
  date: string,
  contentHtml: string,
}}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: {params: { id: string }}) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export default Post
