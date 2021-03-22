import { graphql } from 'gatsby'

export const defaultMarkdownFields = graphql`
  fragment DefaultMarkdownFields on MarkdownRemark {
    html
    fields {
      slug
    }
    timeToRead
    excerpt
    fileAbsolutePath
  }
`

export const defaultCommonMarkdownFields = graphql`
  fragment DefaultCommonMarkdownFields on MarkdownRemarkFrontmatter {
    common {
      frontmatter {
        header {
          icon
          title
          description
        }
        footer {
          contacts {
            type
            url
            icon
          }
          reserved
        }
      }
    }
  }
 `
export const defaultSiteMarkdownFields = graphql`
  fragment DefaultSiteMarkdownFields on MarkdownRemark {

    frontmatter {
      layout
      meta {
        title
        description
      },
      ...DefaultCommonMarkdownFields
    }
  }
`

export const markdownFields = graphql`
  fragment MarkdownFields on MarkdownRemark {
    frontmatter {
      title
      date
      date_pretty: date(formatString: "DD MMMM, YYYY")
    }
    ...DefaultMarkdownFields
  }
`

export const siteMetaFields = graphql`
  fragment SiteMetaFields on Site {
    siteMetadata {
      siteUrl
      title
      description
    }
  }
`

export const site404MarkdownFields = graphql`
  fragment Site404MarkdownFields on MarkdownRemark {
    frontmatter {

      body {
        title
        description
        button {
          name
          url
        }
        icon
      }

    },
    ...DefaultSiteMarkdownFields
  }
`

export const siteIndexMarkdownFields = graphql`
  fragment SiteIndexMarkdownFields on MarkdownRemark {
    frontmatter {

      body {
        section_one {
          title
          description
          skills
        }
        section_two {
          title
          projects {
            image
            url
            gitUrl
            caption
            description
          }
          button {
            name
          }
        }
        section_three {
          title
          description
          address
          phone
          email
          button {
            name
          }
        }
      }

    },
    ...DefaultSiteMarkdownFields
  }
`

export const siteBlogMarkdownFields = graphql`
  fragment SiteBlogMarkdownFields on MarkdownRemark {
    ...DefaultSiteMarkdownFields,
    ...DefaultMarkdownFields
  }
`
