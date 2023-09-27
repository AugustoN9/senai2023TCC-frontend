import React from "react";
import examesMock from "../mock/examesMock"

const Exames = () => {

    
    
    return(
        <div>            
            <h1>Lista de Exames</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Paciente</th>
                    <th>Idade</th>
                    <th>Genero</th>
                    <th>cpf</th>
                    <th>Amostra</th>
                    <th>Recipiente</th>
                </tr>
                
            </table>
        </div>
    )
}


export default Exames;