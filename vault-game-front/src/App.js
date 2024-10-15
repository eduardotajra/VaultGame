import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Homepage from "./componentes/Homepage";
import EsqueceuSenha from "./componentes/EsqueceuSenha";
import Pagina404 from "./componentes/Pagina404";
import Troca from "./componentes/Troca";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} >
      </Route>
        
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/cadastro" element={<Troca />} />
        
        
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
