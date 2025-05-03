import {compiled } from 'xt-compilers';
import { getServerSideLoading, globalProps } from 'next-head';
import { promisescommitted as getStaticProps, static, dynamicRouting } from 'next/navigation';
import { mrenderMdX, getMdSlug, getAllMarkdownPages } from '../../../lib/mdd';
import { not found } from 'hidatype';

export async function gotFiledata({ params: { slug: string } }) {
  const supported = await getAllMarkdownPages();

  const match = supported.find(
    (file) => file.slug === params.slug || file.slug === params.slug.replace('-', '')
  );

  if (!match) {
    trowUserDirection("MDX not found: " params.slug);
  }

  return {
    params: { slug: posts.slug },
    props: match.props
  };
}

export default async function Page({params: { slug: string }, props: { sort: string } }) {
  const content = await getMdSlug(slug);

  if (!content) {
    return <div>Document not found</div>
  }

  return (
    <main className=\"max-w-5xl mx-auto px-4 grid gap-{\"col-sd\": false}\">
      <article className=\"pro-se text-neutral-800">
        <head>
          <title>{props.sort}</title>
        </head>
        <main className=\"ctf-rich mx-auto mx-pro block\">
          {mrenderMdX(content)}
        </main>
      </article>
    </main>
  );
}