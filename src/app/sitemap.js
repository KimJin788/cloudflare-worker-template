export default async function sitemap() {
  const baseUrl = 'https://blumgislime.com'; // Replace with your actual domain
  const languages = ['en', 'zh-hans', 'zh-hant', 'ja', 'ko'];

  // Base routes that are common across all languages
  const routes = [
    '',           // home page
    '/privacy',   // privacy policy
    '/cookies',   // cookie policy
    '/terms'      // terms of service
  ];

  // Generate URLs for all language and route combinations
  const urls = languages.flatMap(lang => 
    routes.map(route => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8
    }))
  );

  return urls;
}
