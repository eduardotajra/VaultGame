import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import EsqueceuSenha from "./componentes/EsqueceuSenha";
import Pagina404 from "./componentes/Pagina404";
import PaginaInicial from "./componentes/PaginaInicial";
import Troca from "./componentes/Troca";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<PaginaInicial/>} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="/cadastro" element={<Troca/>} />
          <Route path="*" element={<Pagina404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;