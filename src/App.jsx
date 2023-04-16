// import { useState } from 'react'
import Sidebar from "./assets/components/sidebar"
import Main from "./assets/components/main"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <Sidebar />
      </nav>
      <div>
        <Main />
      </div>
    </div>
  )
}

export default App
