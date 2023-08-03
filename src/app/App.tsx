import { Routes, Route } from "react-router-dom"
import Pomodoro from "../pages/Pomodoro/Pomodoro"
import DataPicker from "../pages/DataPicker/DataPicker"
import Navigation from '../shared/Navigation/Navgation'
import GTD from "../pages/GTD/GTD"
import Home from "../pages/Home/Home"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gtd" element={<GTD />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/datapicker" element={<DataPicker />} />
      </Routes>
    </>
  )
}

export default App
