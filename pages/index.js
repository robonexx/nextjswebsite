import Head from 'next/head'
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Next WebDev Page</title>
        <meta name="keywords" content="frontend, learning" />
      </Head>
      <Header />
      <h1>SO WHAT S NEXT?</h1>
      <h2>Who knows, but what about some articles to read? eh</h2>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
