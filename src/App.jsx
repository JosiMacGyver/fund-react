import React from "react";
import './App.css';
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from "./components/básicos/Familia";
import FamiliaMembro from "./components/básicos/FamiliaMembro";
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
                <Card titulo="#07 - Desafio Repetição" color="#008b8b">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Componente com Filho" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmentro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Primero Componente" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}