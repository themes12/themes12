import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 't3m.dev',
  description:
    'Personal website and blog of Thiti Phutaarmart — full-stack developer and NLP researcher.',
  href: 'https://t3m.dev',
  author: 'Thiti Phutaarmart',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/themes12',
    label: 'GitHub',
  },
  {
    href: 'mailto:p.thiti@jaist.ac.jp',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/thiti-phuttaamart-a1b8971a5',
    label: 'LinkedIn',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
}
