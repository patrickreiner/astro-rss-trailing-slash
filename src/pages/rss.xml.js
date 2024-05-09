import rss from '@astrojs/rss'

export async function GET(context) {
  return rss({
    customData: '<language>en-us</language>',
    description: 'Sample RSS Feed',
    items: [{
      description: 'Item 1',
      pubDate: '2024-05-09',
      title: 'Item 1',
    }],
    site: context.site,
    title: 'Sample RSS Feed',
    trailingSlash: false,
  })
}
