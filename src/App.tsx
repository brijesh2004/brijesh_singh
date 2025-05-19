import { BrowserRouter } from "react-router"
import Nav from "./components/navfooter/Nav"
import Router from "./components/navfooter/Router"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  )
}

export default App
