import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import News from './Pages/News/News'
import { DarkModeContext } from './Context/DarkModeContext'

function App() {
const {dark, setDark} = useContext(DarkModeContext)
  return (
    <div className='app' data-theme={dark ? "dark" : "light"}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
