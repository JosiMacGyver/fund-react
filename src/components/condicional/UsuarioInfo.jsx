import React from "react";
import If, { Else } from "./If";

export default props => {
    const usuario = props.usuario || {}

    return (
        <span>
            <If >
                Seja bem vindo <strong>{usuario.nome} </strong>
                <Else>
                    Seja bem vindo <strong>Amigão</strong>
                </Else>
            </If>
        </span>
    )
}