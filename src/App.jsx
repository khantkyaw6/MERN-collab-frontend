import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './Components/DashBoard'
import Login from './Components/Login'
import SignIn from './Components/SignIn'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  )

}

export default App
