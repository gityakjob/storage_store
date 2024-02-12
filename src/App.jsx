import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import LayautComponent from './components/LayautComponent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LayautComponent />} />
      </Routes>
    </Router>
  )
}

export default App
