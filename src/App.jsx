import { useState } from 'react'
import './App.css'
import CoffeePage from './components/CoffeePage.jsx'
import CoffeeInputForm from './components/CoffeeInputForm.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState(null)

  function setPage() {
    switch (currentPage) {
      case "coffee": return <CoffeePage setPage={setCurrentPage} />
      case "coffee-input": return <CoffeeInputForm setPage={setCurrentPage} />
      // case "tea": return <TeaPage setPage={setCurrentPage} />
      default: return <Home setPage={setCurrentPage} />
    }

  }
  return (
    <div className="App">
      {setPage()}
    </div>
  )
}

export default App
