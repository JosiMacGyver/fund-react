import React from "react";

//o React.Fragment é equivalente ao <></> e 
//não é possível passar propriedades para ele como class

export default function Fragmento(props) {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}