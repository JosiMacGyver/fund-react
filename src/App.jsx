import React from "react";
import './App.css';
import Mega from "./components/mega/Mega.jsx";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
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
                <Card titulo="#13 - Mega" color="#B9006E">
                    <Mega  qtde={6}/>
                </Card>


                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                </Card>

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