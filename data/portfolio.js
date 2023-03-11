const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Sid Barrack',
  role: 'Software Artisan',
  company: 'Jus Finance',
  description: [
    "Let's bring your vision to life.",
  ],
  resume: 'https://docs.google.com/document/d/16zEjxA5Ps8po9d3g8-nooYIN8qERtiQ4y5ubPDkfgso/edit?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/sid-barrack',
    github: 'https://github.com/da7a90-backup',
  },
  greetingEmoji: '👋',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: 'images/freemoney.png',
    name: 'Freemoney Mobile Wallet',
    description: [
      'Mobile Money wallet with KYC, prepaid Mastercard and international remittances',
    ],
    stack: ['USSD', 'Android/IOS'],
    livePreview: 'https://www.free.sn/free-money',
  },
  {
    thumbnail: 'images/mage.svg',
    name: 'Mage',
    description: [
      'Web3 stream-to-earn platform',
    ],
    stack: ['Web'],
    livePreview: 'https://mage.stream',
  },
  {
    thumbnail: 'images/jus.png',
    name: 'Jus Finance',
    description: [
      'DeFi savings app with mobile money on-ramps',
    ],
    stack: ['𝐴𝑣𝑎𝑖𝑙𝑎𝑏𝑙𝑒 𝑠𝑜𝑜𝑛 on Android/IOS'],
    livePreview: 'https://www.jus.finance',
  },
  {
    thumbnail: 'images/wmt.svg',
    name: 'WMT Scan',
    description: [
      'Analytics dashboard for the World Mobile Mesh Network',
    ],
    stack: ['Analytics', 'Web'],
    livePreview: 'https://wmtscan.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'API & Webhook development + integration',
  'Database modelling and optimization',
  'User Interface  design and development',
  'Automation and Data scraping',
  'Serverless and Edge computing',
  'ETLs and Analytics',
  'Microservices Architecture',
  'CQRS',
  'Event sourcing',
  'QUIC protocol + HTTP/3',
  'Tor reverse proxy and hidden services',
  'IPFS + Filecoin',
  'Smart contract development and DLT',
  'Git and Github actions',
  'gRPC',
  'WebRTC',
  'JavaScript/TypeScript',
  'Java',
  'Go',
  'React',
  'Svelte',
  'Node.js',
  'MongoDB',
  'Spring boot',
  'SQL',
  'AWS',
  'Cloudflare Workers',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sidbarrack@gmail.com',
}

export { about, projects, skills, contact }
