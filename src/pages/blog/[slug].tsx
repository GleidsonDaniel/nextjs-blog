import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import parseISO from "date-fns/parseISO";
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
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-md">
            {format(parseISO(date), "dd 'de' MMMM 'de' uuu", { locale: ptBR })}{" "}
          </div>
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
