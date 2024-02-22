import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoNodejs,
  BiLogoFirebase,
  BiLogoTypescript,
} from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiMui, SiMysql } from 'react-icons/si';
import mealShairing from '../assets/images/mealSharing.png';
import cinemania from '../assets/images/cinemania.png';
import figma from '../assets/images/convertFigma.png';
import safestroll from '../assets/images/mobile-3.jpg';
import portfolio from '../assets/images/portfolio.png';
import volunteer from '../assets/images/ellebæk.png';

const projectsInfo = [
  {
    id: 6,
    image: safestroll,
    description:
      'Safestroll is a native mobile app designed to ensure safe walks home, even at late hours or in unfamiliar areas. Users can volunteer as companions or request support from nearby volunteers. Safestroll fosters community for safer journeys.',
    source: 'https://github.com/Kositthai/safestroll',
    live: null,
    tool: [TbBrandReactNative, BiLogoTypescript, BiLogoFirebase],
    toolText: ['ReactNative', 'Typescript', 'FireBase', 'FireStore', 'SSO'],
  },
  {
    id: 5,
    image: volunteer,
    description:
      'As part of my volunteer work at Ellebæk, I contributed to the development of a draft design using Figma. This design includes prototype link elements and page integration. I played a role in creating and refining this design to support the objectives of the project.',
    source:
      'https://www.figma.com/proto/X0KznaIvu5KTeH5terpPCM/Untitled?node-id=8-2',
    live: 'https://www.figma.com/proto/X0KznaIvu5KTeH5terpPCM/Untitled?node-id=8-2',
    tool: [BiLogoFigma],
    toolText: ['Figma'],
  },
  {
    id: 4,
    image: portfolio,
    description:
      'Portfolio using React and TypeScript. As part of this project, I am exploring new technologies such as GSAP for animations. Integrating GSAP allows me to bring life to my portfolio with dynamic and engaging animations.',
    source: 'https://github.com/Kositthai/Portfolio',
    live: 'https://portfolio-kositthai.vercel.app/',
    tool: [BiLogoReact, BiLogoTypescript, BiLogoHtml5, BiLogoCss3],
    toolText: [
      'ReactJs',
      'Typescript',
      'Styled-components',
      'GSAP for animation',
    ],
  },
  {
    id: 3,
    image: cinemania,
    description:
      'Collaborative group project undertaken with my classmates at HackYourFuture Bootcamp. The application includes functionality to add favorite movies to a personal list, a shopping cart feature, and incorporates sorting and search capabilities.',
    source: 'https://github.com/HackYourFuture-CPH/CINEMANIA',
    live: 'https://cinemania.fly.dev/',
    tool: [BiLogoReact, BiLogoJavascript, BiLogoNodejs, SiMysql, SiMui],
    toolText: ['Reactjs', 'JavaScript', 'NodeJs', 'MySQL', 'MaterialUi'],
  },
  {
    id: 2,
    image: mealShairing,
    description:
      'A full-stack application equipped with features for making reservations and leaving reviews, along with additional capabilities for sorting and creation date.',
    source: 'https://github.com/Kositthai/Meal-Sharing-App',
    live: 'https://meal-sharing-app-production.up.railway.app/',
    tool: [BiLogoReact, BiLogoJavascript, BiLogoNodejs, SiMysql],
    toolText: ['ReactJs', 'JavaScript', 'NodeJs', 'MySQL'],
  },
  {
    id: 1,
    image: figma,
    description:
      'This is my first HTML and CSS project, which I created during self-study. I converted a design from Figma into a static web.',
    source: 'https://github.com/Kositthai/Figma-To-Web',
    live: 'https://duplicating-project-figma.vercel.app/',
    tool: [BiLogoHtml5, BiLogoCss3, BiLogoFigma],
    toolText: ['HTML', 'CSS', 'Figma'],
  },
];

export default projectsInfo;
