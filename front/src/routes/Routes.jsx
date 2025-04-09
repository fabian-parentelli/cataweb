import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext.jsx";
import ScrollToTop from "../components/utils/ScrollToTop.jsx";
import NavBar from "../containers/NavBar/NavBar.jsx";
import Login from "../containers/user/Login/Login.jsx";
import Register from "../containers/user/Register/Register.jsx";
import Footer from "../containers/Footer/Footer.jsx";
import Body from "../containers/Body/Body.jsx";
import DashBoard from "../containers/DashBoard/DashBoard.jsx";

const WrapRoutes = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {user.logged && user.data.role === 'master' &&
                        <Route path="/dashboard" element={<DashBoard />} />
                    }
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;