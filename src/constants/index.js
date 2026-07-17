import {
  mobile,
  backend,
  web,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  leaf,
  lib,
  locafarm,
  science,
  bear,
  threejs,
  github,
  linkedin,
  gmail,
  postgres,
  python,
  heroku,
  merced,
  snc,
  sstcapp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "heroku",
    icon: heroku,
  },
  {
    name:"Python",
    icon: python
  },
  {
    name:"Docker",
    icon: docker
  },
  {
    name: "Redux",
    icon: redux
  },
  {
    name: "Figma",
    icon: figma
  }

];

const experiences = [
  {
    title: "IT Operations Specialist",
    company_name: "Spheres Numerique et Commerciales",
    icon: snc,
    iconBg: "#E6DEDD",
    date: "May 2018 - Dec 2022",
    points: [
      "In charge of engaging in customer welcoming and greeting., registering customers purchases and catering to their needs as well as troubleshooting any problems customers had with their devices.",
      "Left a net positive impact by building good relationships with customers encouraging them to continue to patronize the company which increased sales turnover."
    ],
  },
  {
    title: "Vice President of Computer Science Club",
    company_name: "Merced College",
    icon: merced,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "In charge of planning and organizing computer science related workshops for club members as well as delegating tasks and meetings for club officials.",
      "Coordinated and Designed 2023 Merced College science fair and contributed to the development of the science fair website.",
      "Engaged in weekly meetings to plan fundraisers, from which funds were used towards STEM relevant escursions and activities for group members",
    ],
  },
  {
    title: "Undergraduate Student Tutor",
    company_name: "Merced College",
    icon: merced,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Provide tutoring sessions at the Merced College Student Success and Tutorial center on various subjects including Calculus 1 and 2, Computer Science, English, and French.",
      "Responsible for being a model student in my classes and being a representative of the Merced College Student Success and Tutorial center, encouraging students to partake in our services.",
    ],
  },
  {
    title: "Embedded-Tutor",
    company_name: "Merced College",
    icon: merced,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Fulfill the role of a dedicated ambassador for the Library tutoring program as an Embedded Tutor in a Calculus 1 classroom, promoting and facilitating seamless integration between classroom learning and the available tutoring services.",
      "Provide assistance to students in and outside of class regarding class material",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Merced College Tutoring Session Manager",
    description: "This session management app was designed specifically for Merced College to improve efficiency and accuracy in tracking tutoring sessions. It was designed to replace manual processes with real-time updates, automated queues, and session timing, reducing staff workload significantly.",
    tags:[
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "text-red",
      },
      {
        name: "Docker",
        color: "purple-text-gradient",
      },
      {
        name: "Jest",
        color: "red-text-gradient",
      },
      {
        name: "Redis",
        color: "brown-text-gradient",
      },
      {
        name: "Heroku",
        color: "brown-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sstcapp,
    source_code_link: "https://sstc-front-a468dc2fcd25.herokuapp.com/"
  },
  {
    name: "Locafarm",
    description:
      "LocaFarm aims to bridge the gap between local farmers and health-conscious consumers, fostering a community-driven marketplace.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "text-red",
      },
      {
        name: "pandas",
        color: "purple-text-gradient",
      },
      {
        name: "numpy",
        color: "red-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "brown-text-gradient",
      },
      {
        name: "Postgres",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: locafarm,
    source_code_link: "https://mighty-beach-62885-129eb7fa49c2.herokuapp.com/",
  },
  {
    name: "2023 Merced College Science Fair",
    description:
      "The 2023 Merced College Science Fair website is designed and implemented to promote and showcase the various prizes and details of the 2023 Merced College Science Fair.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: science,
    source_code_link: "https://mercedsciencefair-2023.vercel.app/"
  },
  {
    name: "LeafBuster AI",
    description:
      "Leaf Buster was made for HackMerced XIII utilizing TheosAPI to train an image recognition model for identifying apple leaf rot and blot using a Kaggle dataset. Additionally, Leaf Buster AI designs and implements a ReactJS frontend enabling users to upload apple leaf images, which are processed by Theos API, and presents the results in a user-friendly format.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "TheosAPI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: leaf,
    source_code_link: "https://mulcro.github.io/LeafBuster-AI/",
  },
  {
    name: "LibKnekt",
    description:
      "Libknekt originated as an Idea for my former highscools library database management. Everything was done manually but this app implements relational models and API development to enable CRUD operations on books, authors, categories, and users. Additionally, custom user authentication was implemented, facilitating a privilege-based experience where privileged users can search, borrow books, and browse by title, author, and category.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: lib,
    source_code_link: "https://libknekt-2b0c1dd1621b.herokuapp.com/",
  },
  {
    name: "Bear Creek Watcher",
    description:
      "In an attempt to forecast future precipitation, Numpy and Scikit-learn Python libraries were utilized to generate regression models from past precipitation data, with predictions stored in a local CSV file. Data was then parsed and presented in a user-friendly format using ExpressJS to create a custom API, enabling data transmission to the frontend via API calls. The frontend, developed using ReactJS, displays precipitation data and flood risk for any day over the next 60 years.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "pandas",
        color: "purple-text-gradient",
      },
      {
        name: "numpy",
        color: "red-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "brown-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bear,
    source_code_link: "https://mulcro.github.io/Ucm_waterhack/",
  }
];

const contacts = [
  {
    title: "Email",
    icon: gmail,
    value: "mulero.alamou@gmail.com",
    isEmail: true,
    color: '#0BCD2E'
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    value: "https://www.linkedin.com/in/mulero-alamou/",
    isEmail: false,
    color: '#fff'
  },
  {
    title: "GitHub",
    icon: github,
    value: "https://github.com/Mulcro",
    isEmail: false,
    color: '#0E58E2'
  }
]

export {contacts, services, technologies, experiences, testimonials, projects };