export type TSiteInfo = typeof siteInfo
export type TNavItem = typeof siteInfo.navItems
export const siteInfo = {
  name: 'My App',
  description: 'Description about My App',
  authors: {
    url: 'https://fb.com/rabibinsalam',
    name: 'Rabius Sunny',
  },
  generator: 'Meta generator word for My App',
  navItems: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Others', href: '/others' },
  ],
}
