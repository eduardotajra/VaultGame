import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Cadastro from "./componentes/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navbar/>}>
          <Route index element={<Cadastro/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
