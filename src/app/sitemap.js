export default function sitemap() {
  return [
    { url: 'https://www.najimul.xyz', lastModified: new Date(), priority: 1 },
    {
      url: 'https://www.najimul.xyz/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.najimul.xyz/projects',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.najimul.xyz/skills',
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: 'https://www.najimul.xyz/contact',
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
