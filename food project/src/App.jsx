import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './containers/home/home' 
import Quotes from './containers/quote/quote'
import Header from './header/header'
import Footer from './componets/footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
      {/* <Quotes /> */}
      <Footer />
    </>
  )
}

export default App
