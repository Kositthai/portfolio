import './App.css'
import Frontpage from './pages/Frontpage'
import CV from './pages/CV'

function App() {
  return (
    <div className="App">
      <div className="slide">
        <Frontpage />
      </div>
      <div className="slide">
        <CV />
      </div>
    </div>
  )
}

export default App
