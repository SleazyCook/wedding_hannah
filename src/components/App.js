import { Outlet } from 'react-router-dom'

import './style.css'

function App() {
  return (
    <div>

      <Outlet context />


    </div>
  )
}

export default App