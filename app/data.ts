type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Amazon Price Tracker Bot',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://github.com/ajit-kumar014/price-tracker-telegram',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'HomeServer',
    description: 'Self-Hosted Home Server setup using my old laptop',
    link: 'https://motion-primitives.com/',
    video:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fy25wg3wnm6u91.png&f=1&nofb=1&ipt=d52700996fd6399182af38e95716ae444db464413e11e4b19c504caa23d0fe67',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Vetty',
    title: 'Backend Developer Intern',
    start: 'March 2025',
    end: 'Present',
    link: 'https://www.vetty.co/',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Wi-Fi based pump automation by water %',
    description: 'Wi-Fi based pump automation using ESP8266, ESPHome, Ultrasonic sensor, and SSR-40A, integrated with Home Assistant for smart control by tank water %.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ajit-kumar014',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ajitkumar014',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'ajit07kumar03@gmail.com'
