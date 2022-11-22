import React from "react";
import './App.css'
import Card from "./components/layout/Card";
import Aleatorio from "./components/básicos/Aleatorio";
import Fragmento from "./components/básicos/Fragmento";
import ComParametro from "./components/básicos/ComParametro";
import Primeiro from "./components/básicos/Primeiro";

export default () => {
    
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#04 - Aleatório" color="#080">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmentro">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Primero Componente">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}