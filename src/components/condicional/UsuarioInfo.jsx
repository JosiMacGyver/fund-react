import React from "react";

export default props => {
    const usuario = props.usuario || {}
    return(
        <>
        Seja bem vindo <strong>{props.usuario.nome} </strong>
        </>
    )
}