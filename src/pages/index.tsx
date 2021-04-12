import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import parseISO from "date-fns/parseISO";
import { blogPosts } from "helpers/data";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Silva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <BlogListItem {...post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-gray-100 rounded p-4 shadow hover:shadow-lg transition duration-300 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-xl font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-800 text-sm">
        {format(parseISO(date), "dd 'de' MMMM 'de' uuu", { locale: ptBR })}
      </div>
      <div>{content}</div>
    </div>
  );
}
