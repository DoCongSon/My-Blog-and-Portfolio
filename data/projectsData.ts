import { Blog } from 'contentlayer.config'

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Portfolio & Blog cá nhân của tôi',
    description:
      'Khám phá kiến trúc và các tính năng nổi bật của blog cá nhân và portfolio được xây dựng bằng Next.js, Contentlayer, MDX, và nhiều công nghệ hiện đại khác.',
    href: '/blog/projects/gioi-thieu-my-blog-portfolio',
    imgSrc: '/static/images/twitter-card.png',
  },
]

export default projectsData
