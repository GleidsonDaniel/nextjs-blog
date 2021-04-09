import { blogPosts } from "helpers/data";
import Head from "next/head";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{date}</div>
        <div>{content}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: blogPosts.find((post) => post.slug === params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
