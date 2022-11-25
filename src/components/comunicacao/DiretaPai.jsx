import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} bool={true} /><br/>
            <DiretaFilho nome="Gabriel" idade={17} bool={false} />
        </div>
    )
}