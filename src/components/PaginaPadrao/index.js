import Banner from "components/Banner"
import { Outlet } from "react-router-dom"

export default function PaginaPadrao({ children }) {
  return (
    <main>
      <Banner />

      {/* A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom. */}
      <Outlet />

      {children}
    </main>
  )
}