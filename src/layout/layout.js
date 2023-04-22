import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
            <Header></Header>
            <div><Outlet /></div>
            <Footer></Footer>
        </>
    )
}
export default Layout