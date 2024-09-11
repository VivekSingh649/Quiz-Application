import { useState } from 'react'
import Quiz from './Quiz'

function App() {

  const [statGame, setStartGame] = useState<boolean>(false)

  return (
    <>
      <div className="main_wrapper">
        <div className="container">
          {statGame ? <Quiz /> : (
            <button className="next_question button" onClick={() => setStartGame(!statGame)}>
              Start Game
              <i className="bi bi-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
