import React, { useState } from "react";
import './Input.css'

//ver documentação de componentes controlados
export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div className="col">
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined}/>
            </div>
        </div>
    )
}