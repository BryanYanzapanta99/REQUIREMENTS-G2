import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import UserManage from './components/UserManages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />} />
        <Route  path="/userManage" element={<UserManage />} />
      </Routes>
    </BrowserRouter>

  )
}
