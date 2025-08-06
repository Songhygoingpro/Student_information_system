import { Routes, Route } from 'react-router-dom'  // ← Import these
import Home from '@/pages/Home'
// import Program from '@/pages/Program'
// import ResultBoard from '@/pages/ResultBoard'
import Login from '@/pages/auth/login'
import Register from '@/pages/auth/register'

function App() {
  return (
    <Routes>  {/* ← Define your routes */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/program" element={<Program />} /> */}
      {/* <Route path="/result-board" element={<ResultBoard />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App