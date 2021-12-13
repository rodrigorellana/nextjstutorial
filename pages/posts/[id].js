import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import {getAllPostIds, getPostData} from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import {useRouter} from "next/router"

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
      queryId: params.id
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData, queryId}) {
  const router = useRouter()
  const routerId = router.query.id;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} /> asdasds
        </div>
        <div>
          <h3>el queryId es {queryId}</h3>
          <h3>el routerId es {routerId}</h3>
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  );
}
