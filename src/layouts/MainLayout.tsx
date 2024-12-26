import { Outlet } from "react-router-dom";
import NavBar from '../components/navBar';
import Footer from "../components/footer";
const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer/>
    </>
  )
}

export default MainLayout