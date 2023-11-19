import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoNodejs,
} from 'react-icons/bi'
import {SiMui, SiMysql, SiJira} from 'react-icons/si'
import mealShairing from '../assets/images/mealSharing.png'
import cinemania from '../assets/images/cinemania.png'
import figma from '../assets/images/convertFigma.png'

const projectsInfo = [
  {
    id: 1,
    image: figma,
    descrition:
      'This is my first HTML and CSS project, which I created during self-study. I converted a design from Figma into a static web.',
    source: 'https://github.com/Kositthai/Figma-To-Web',
    live: 'https://duplicating-project-figma.vercel.app/',
    tool: [BiLogoHtml5, BiLogoCss3, BiLogoFigma],
  },
  {
    id: 2,
    image: mealShairing,
    descrition:
      'A full-stack application equipped with features for making reservations and leaving reviews, along with additional capabilities for sorting and creation date.',
    source: 'https://github.com/Kositthai/Meal-Sharing-App',
    live: 'https://meal-sharing-app-production.up.railway.app/',
    tool: [BiLogoReact, BiLogoJavascript, BiLogoNodejs, SiMysql],
  },
  {
    id: 3,
    image: cinemania,
    descrition:
      'Collaborative group project undertaken with my classmates at HackYourFuture Bootcamp. The application includes functionality to add favorite movies to a personal list, a shopping cart feature, and incorporates sorting and search capabilities.',
    source: 'https://github.com/HackYourFuture-CPH/CINEMANIA',
    live: 'https://cinemania.fly.dev/',
    tool: [BiLogoReact, BiLogoJavascript, BiLogoNodejs, SiMysql, SiMui, SiJira],
  },
]

export default projectsInfo
