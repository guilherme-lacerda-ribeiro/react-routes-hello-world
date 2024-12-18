import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  // https://reactrouter.com/start/library/routing
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        {/* <Route path='/' element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        */}

        {/* Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai. */}

        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
