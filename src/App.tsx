import './App.css'
import Navbar from './Navbar'
import BingoCard from './BingoCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChallengeCard from './ChallengeCard'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
            <div>
              <h1 className='text-4xl font-bold text-center my-5'>Welcome to the Couriway No Reset Bingo!</h1>
            </div>

          <Routes>
            <Route path="/" element={<BingoCard />} />
            <Route path="/100k" element={<ChallengeCard />} />
            <Route path="/data/"/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
