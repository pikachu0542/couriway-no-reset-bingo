import './App.css'
import Navbar from './Navbar'
import BingoCard from './BingoCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChallengeCard from './ChallengeCard'

const BASE_URL = import.meta.env.BASE_URL

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
            <div>
              <h1 className='text-4xl font-bold text-center my-5'>Welcome to the Couriway No Reset Bingo!</h1>
            </div>

          <Routes>
            <Route path={`${BASE_URL}/`} element={<BingoCard />} />
            <Route path={`${BASE_URL}/100k`} element={<ChallengeCard />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
