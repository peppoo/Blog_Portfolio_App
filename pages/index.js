import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <h4>Hello,I'm Tappei.<br/> I'm 25 years old.<br/>I'm studing javascript</h4>
          <h3>
            This is My Github account <br/>
            <a href="https://github.com/peppoo?tab=repositories">Github</a>
          </h3>
          <h3>
            This is sample portfolios<br/>
            <a href="https://kantan-todoapp.vercel.app/">KANTAN_TODO_APP</a><br/>
            <a href="https://videos-hooks-iota-one.vercel.app/">YOUTUBE_CLONE_APP</a><br/>
            <a href="https://netflix-app-mu.vercel.app/">NETFLIX_CLONE_APP</a><br/>
          </h3>
        </section>

      <Head>…</Head>
      <section className={utilStyles.headingMd}>……………………………………………………………………………………………………</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;


