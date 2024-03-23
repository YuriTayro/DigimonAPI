import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu/index.jsx"
import  Home from "./components/Home"
import Conteudo from "./components/Conteudo"
import { ThemeProvider } from "./contexts/ThemeContexts"


export default function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Conteudo" element={<Conteudo />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}