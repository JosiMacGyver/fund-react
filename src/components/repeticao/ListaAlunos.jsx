import React from "react";
import '../../data/alunos'
import alunos from "../../data/alunos";

export default props => {
  const lis = alunos.map((aluno =>{
    //não esquecer do key para demandar menos processamento
    return(
    <li key={aluno.id}>
        {aluno.id} : {aluno.nome} - {aluno.nota}
    </li>
    )
  }))

    return(
        <ul style={{listStyle:'none'}}>
             {lis}
        </ul>
    )
}