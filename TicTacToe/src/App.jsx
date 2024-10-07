import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cover from './components/Cover'
import PlayGame from './components/PlayGame'

function App() {
  const [showGamePage, setShowGamePage] = useState(false)
  const showGamePageFun =()=> setShowGamePage(true)
  return (
    <>
      {showGamePage?<PlayGame/>: <Cover onClick={showGamePageFun}/> }
    </>
  )
}

export default App
