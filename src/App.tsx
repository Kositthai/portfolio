import './App.css'
import Frontpage from './pages/Frontpage'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <div className="slide">
        <Frontpage />
      </div>
      <div className="slide">
        <AboutMe />
      </div>
      <div className="slide">
        <Projects />
      </div>
    </div>
  )
}

export default App
