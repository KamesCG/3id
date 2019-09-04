import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { horizinSocialPreview } from 'assets/images'

function SEO({ description, lang, meta, keywords, image, imageMeta = {}, title, type, video }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const type = type || 'website'
        const language = 'en_GB'
        
        const imageSrc = image || horizinSocialPreview
        const imageType = imageMeta.type
        const imageAlt = imageMeta.alt
        const imageWidth = imageMeta.width
        const imageHeight = imageMeta.imageHeight

        const twitterHandle = data.site.siteMetadata.twitterHandle
        const twitterCardType = 'summary_large_image'

        return (
          <Helmet
            htmlAttributes={{lang}}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              // Open Graph
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              
              
              /* =============*/
              // Metadata
              /* =============*/
              {
                property: `og:locale`,
                content: language,
              },

              
              /* =============*/
              // Image
              /* =============*/
              {
                property: `og:image`,
                content: `${data.site.siteMetadata.siteUrl}${imageSrc}`,
              },
              {
                property: `og:image:secure_url`,
                content: `${data.site.siteMetadata.siteUrl}${imageSrc}`,
              },
              {
                property: `og:image:type`,
                content: `image/${imageType || 'jpg'}`,
              },
              {
                property: `og:image:width`,
                content: imageWidth | `400`,
              },
              {
                property: `og:image:width`,
                content: imageHeight | `400`,
              },
              {
                property: `og:image:alt`,
                content: imageAlt,
              },

              /* =============*/
              // Video
              /* =============*/
              {
                property: `og:video`,
                content: video,
              },

              /* =============*/
              // Twitter
              /* =============*/
              {
                property: `twitter:card`,
                content: twitterCardType,
              },
              {
                property: `twitter:site`,
                content: twitterHandle,
              },
              {
                property: `twitter:creator`,
                content: twitterHandle,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
