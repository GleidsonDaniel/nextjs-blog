import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import parseISO from 'date-fns/parseISO';
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
        <div>
          {format(parseISO(date), "dd 'de' MMMM 'de' uuu", { locale: ptBR })}
        </div>
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
