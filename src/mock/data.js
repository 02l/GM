import { nanoid } from 'nanoid';
import head from '../images/headshot.jpg'

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hey there. I'm`,
  name: 'Gabe Mitrakos',
  subtitle: 'Dev with a passion for great UI & UX.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1C_dClTg2IEch7CcmA6jlXIy2KHapVVQeCppzJJbd1kI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'proj-sd.png',
    title: 'Something Designed',
    info: '',
    info2: '',
    url: 'https://somethingdesignedinc.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proj-auth.png',
    title: 'Auth-Zero',
    info: '',
    info2: '',
    url: 'https://auth0-demo-newszero.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proj-soh.png',
    title: 'Sides of a Horn',
    info: '',
    info2: '',
    url: 'https://www.rhinomovie.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
