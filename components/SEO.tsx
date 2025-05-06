import Head from 'next/head';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({
  title = 'Global Park DAO',
  description = 'A decentralized initiative for art, technology, and collective memory.',
  image = '/OG.png',
  url = 'https://globalpark.io',
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
