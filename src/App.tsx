import './App.css'
import Frontpage from './pages/Frontpage'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <div className="slide">
        <Frontpage />
      </div>
      <div className="slide">
        <About />
      </div>
      <div className="slide">
        <Projects />
      </div>
    </div>
  )
}

export default App
