import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Cadastro from "./componentes/Cadastro";
import Pagina404 from "./componentes/Pagina404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navbar/>}>
          <Route index element={<Cadastro/>}/>
          <Route path="*" element={<Pagina404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
