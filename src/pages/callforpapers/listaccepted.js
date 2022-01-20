import React from "react";
import JsonData from './employee.json'

function ListAccepted() {
  const DisplayData=JsonData.map(
    (info)=>{
        return(
            <tr>
                <td>{info.Sl}</td>
                <td>{info.Id}</td>
                <td>{info.Title}</td>
                <td>{info.Authors}</td>
                <td>{info.Affiliation}</td>
                <td>{info.Country}</td>
            </tr>
        )
    }
)

return(
    <div class="Container">
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Sl</th>
                <th>Id</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Affiliation</th>
                <th>Country</th>
                </tr>
            </thead>
            <tbody>
             

                
                {DisplayData}
                
            </tbody>
        </table>
         
    </div>
)
  
} 
export default ListAccepted;
