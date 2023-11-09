import './App.css'
import Frontpage from './pages/Frontpage'
import CV from './pages/CV'
import Project from './pages/Project'

function App() {
  return (
    <div className="App">
      <div className="slide">
        <Frontpage />
      </div>
      <div className="slide">
        <CV />
      </div>
      <div className="slide">
        <Project />
      </div>
    </div>
  )
}

export default App
