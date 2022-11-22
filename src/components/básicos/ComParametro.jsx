import React from "react"

export default function (props) {
    console.log(props)
    //props são somente leitura, não dá para alterar

    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'

    return (
        <>
            <h2>{props.titulo}</h2>
            <p>
                <strong> {props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e foi 
                <strong> {status} </strong>
            </p>
        </>
    )
}