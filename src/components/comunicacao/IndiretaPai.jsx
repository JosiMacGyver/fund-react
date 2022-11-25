import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    //nome idade nerd
    //filho passa informação pro pai via função

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false) 

    function forncecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

        console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={forncecerInformacoes} />
        </div>
    )
}