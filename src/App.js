import "./App.css";
import MedicalDevice from "./components/MedicalDevice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DeviceDetail from "./components/DetailDevice/DeviceDetail";
import FormularioRegistroFormik from "./components/formulario_registro/FormularioRegistroFormik";
import Navbar from "./components/NavBar/Navbar.jsx";
import EquiposCards from "./components/EquiposCards.jsx";
import { useEffect } from "react";
import { getAllMedicalDevices } from "./redux/actions/actions.js";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer.jsx";
import Cronograma from "./components/Cronograma.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDevices = async () => {
      dispatch(getAllMedicalDevices());
    };
    getDevices();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/inventario" element={<MedicalDevice />}></Route>
          <Route path="/device/:id" element={<DeviceDetail />}></Route>
          <Route path="/crear equipo" element={<FormularioRegistroFormik />}></Route>
          <Route path="/equipos" element={<EquiposCards />}></Route>
          <Route path="/cronograma" element={<Cronograma />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
