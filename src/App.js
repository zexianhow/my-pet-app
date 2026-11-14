import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { dogs, cats } from './data.js'
import Home from './pages/Home'
import Pets from './components/Pets'
import About from './pages/About'
import PetCareTips from './components/PetCareTips'
import Login from './components/LoginSignup'
import Adopt from './components/AdoptPetForm'
import ReleasePet from './components/ReleasePetForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  // global pet state
  const [petList, setPetList] = useState([...dogs, ...cats])

  const markPetAsAdopted = (selectedPetId) => {
    setPetList(prevList => prevList.map(pet => {
      if (pet.id === selectedPetId) {
        return { ...pet, status: "Adopted" }
      }
      return pet;
    }))
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home petList={petList} />} />
        <Route path="/pets" element={<Pets petList={petList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/caretips" element={<PetCareTips />} />
        <Route path="/adopt" element={<Adopt petList={petList} markPetAsAdopted={markPetAsAdopted} />} />
        <Route path="/release" element={<ReleasePet petList={petList} setPetList={setPetList} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
