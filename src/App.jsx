import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Packages from './pages/Packages'

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Packages' element={<Packages />} />
        </Routes>
      </div>
    </Router>
  )
}
