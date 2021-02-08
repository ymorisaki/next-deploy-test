import {FC} from 'react'
import Head from 'next/head'
import Link from "next/link";
import Layout from '../components/Layout';
import {getSortedPostsData} from '../lib/posts'

type Props = {
  allPostsData: [
    {
      id: string;
      title: string;
      date: string;
    }
  ]
}

const Home: FC<Props> =({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h2>Index Page</h2>
      <ul>
        {allPostsData.map((file) => (
          <li key={file.id}>
            <span><Link href={`/posts/${file.id}`}>{file.id}</Link></span>
            <br />
            <span>{file.title}</span>
            <br />
            <span>{file.date}</span>
            <br />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home