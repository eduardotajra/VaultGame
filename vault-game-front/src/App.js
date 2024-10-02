import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Cadastro from "./componentes/Cadastro";
import EsqueceuSenha from "./componentes/EsqueceuSenha";
import Pagina404 from "./componentes/Pagina404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Cadastro />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="*" element={<Pagina404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;