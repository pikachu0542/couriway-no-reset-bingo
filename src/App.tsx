import './App.css'
import Navbar from './Navbar'
import BingoCard from './BingoCard'
import ChallengeCard from './ChallengeCard'

function App() {
  return (
    <>
      <Navbar />
      <div>
          <h1 className='text-4xl font-bold text-center my-5'>Welcome to the Couriway No Reset Bingo!</h1>
      </div>
      <BingoCard />
    </>
  )
}

export default App
