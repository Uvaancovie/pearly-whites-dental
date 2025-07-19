import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
  schema?: Record<string, unknown>
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  openGraph,
  schema 
}: SEOProps) {
  const baseUrl = 'https://pearlywhitesdental.co.za'
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      {openGraph?.image && (
        <>
          <meta property="og:image" content={`${baseUrl}${openGraph.image}`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={openGraph?.title || title} />
      <meta name="twitter:description" content={openGraph?.description || description} />
      {openGraph?.image && (
        <meta name="twitter:image" content={`${baseUrl}${openGraph.image}`} />
      )}

      {/* Schema.org structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
    </Head>
  )
}
