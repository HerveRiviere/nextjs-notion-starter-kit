import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '66a5e475b69345988d324e0bbaa35bbd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Pauline & Hervé',
  domain: 'paulineherve.com',
  author: 'Pauline & Hervé',

  // open graph metadata (optional)
  description: 'Pauline & Hervé - 23 et 24 mars 2024',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
  isSearchEnabled: false,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
  {
    title: 'Accueil',
    pageId: '#f69f22baf8fb407399ca01b3493d7224'
  },
  {
    title: 'Notre Histoire',
    pageId: '#f69f22baf8fb407399ca01b3493d7224'
  },
  {
    title: 'FAQ',
    pageId: '#f69f22baf8fb407399ca01b3493d7224'
  },
  {
    title: 'Les Logements',
    pageId: '#5fc091ad407049659f2f25bed4b68108'
  },
]
})
