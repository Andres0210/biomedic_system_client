import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const ingresar = ()=>{
        navigate("/devices")
    }
    return (
        <div>
            <h1>HOLA ESTA ES LA PAGINA DE INICIO</h1>
            <button onClick={ingresar} type="button" class="btn btn-success">ENTRAR</button>
        </div>
    );
}

export default LandingPage;
