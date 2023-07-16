import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageSelectSearch from "./components/SelectSearch/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/selectsearch' element={<PageSelectSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
