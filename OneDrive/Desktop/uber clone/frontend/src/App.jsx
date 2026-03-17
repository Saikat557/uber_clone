import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import UserRegister from "./pages/userRegister"
import UserLogin from "./pages/userLogin"
import CaptainRegister from "./pages/captainRegister"
import CaptainLogin from "./pages/captainLogin"
const app = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain/register" element={<CaptainRegister />} />
      <Route path="/captain/login" element={<CaptainLogin />} />
    </Routes>
  );
};

export default app;
