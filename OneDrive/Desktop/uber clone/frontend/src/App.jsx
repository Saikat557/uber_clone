import { Routes, Route } from "react-router-dom";
import Start from "./pages/start"
import UserRegister from "./pages/userRegister"
import UserLogin from "./pages/userLogin"
import CaptainRegister from "./pages/captainRegister"
import CaptainLogin from "./pages/captainLogin"
import Home from "./pages/home"
import UserProtected from "./pages/userProtected"
import UserLogout from "./pages/userLogout"
import CaptainHome from "./pages/CaptainHome"
const app = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain/register" element={<CaptainRegister />} />
      <Route path="/captain/login" element={<CaptainLogin />} />
      <Route path="/home" element={
        <UserProtected>
          <Home />
        </UserProtected>
      } />

      <Route path="/user/logout" element={
        <UserProtected>
          <UserLogout />
        </UserProtected>
      } />

      <Route path="/captain/home" element={<CaptainHome/>} />
    </Routes>
  );
};

export default app;
