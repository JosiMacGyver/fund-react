import React, { cloneElement } from "react";
import FamiliaMembro from './FamiliaMembro'

//<FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
//<FamiliaMembro nome="Ana" {...props} />
//<FamiliaMembro nome="Gustavo" sobrenome="Ferreira" />

export default (props) => {
    return (
        <>
            {React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })}
        </>
    )
}