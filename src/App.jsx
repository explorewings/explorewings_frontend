import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Packages from './pages/Packages'
import About from './pages/About'
import Resorts from './pages/Resorts'

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Packages' element={<Packages />} />
          <Route path='/Resorts' element={<Resorts />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}
