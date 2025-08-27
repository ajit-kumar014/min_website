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
      'https://www.xenioo.com/wp-content/uploads/2021/04/telegram-chatbot-1.png',
    id: 'project1',
  },
  {
    name: 'HomeServer',
    description: 'Self-Hosted Home Server setup using my old laptop',
    link: 'https://wallpaperaccess.com/full/4172522.jpg',
    video:
      'https://wallpaperaccess.com/full/4172522.jpg',
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
    title: 'Do not Trash It, Server-ify It: Why Your Old Tech Deserves a Second Life',
    description: "Give your old laptop a new life as a homeserver to reclaim your data privacy and cut streaming costs.",
    link: '/blog/homeserver',
    uid: 'blog-1',
  },
  {
    title: 'Wi-Fi based pump automation by tank water %',
    description: 'Wi-Fi based pump automation using ESP8266, ESPHome, Ultrasonic sensor, and SSR-40DA, integrated with Home Assistant for smart control by tank water %.',
    link: '/blog/pump',
    uid: 'blog-2',
  },
  {
    title: 'Why You Should Consider Buying Single Board Computers (SBCs) in 2025',
    description: "Discover why Single Board Computers (SBCs) are worth considering in 2025. From affordability and versatility to DIY projects and edge computing, learn how SBCs can power innovation and everyday use cases.",
    link: '/blog/sbc',
    uid: 'blog-3',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ajit-kumar014',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ajitkumar014',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com',
  },
]

export const EMAIL = 'ajit07kumar03@gmail.com'
