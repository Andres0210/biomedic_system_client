import logo from "./logo.svg";
import "./App.css";
import MedicalDevice from "./components/MedicalDevice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import DeviceDetail from "./components/DeviceDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/devices" element={<MedicalDevice />}></Route>
          <Route path="/device/:id" element={<DeviceDetail/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
