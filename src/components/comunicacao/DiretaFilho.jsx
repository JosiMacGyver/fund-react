import React from "react";

export default props => {
    return(
        <>
        <span>{props.nome} </span>
        <span><strong>{props.idade} </strong></span>
        <span>{props.bool ? 'Verdadeiro' : 'Falso'}!</span>
        </>
    )
}