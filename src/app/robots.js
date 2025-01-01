export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://blumgislime.com/sitemap.xml', // Replace with your actual domain
  }
}
