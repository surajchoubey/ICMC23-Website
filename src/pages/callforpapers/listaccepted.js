import React from "react";
import JSONdata from './employee.json'

function ListAccepted() {
  const DisplayData=JSONdata.map(
    (info)=>{
        return(
            <tr>
                <td>{info.S_No}</td>
                <td>{info.ID}</td>
                <td>{info.Title}</td>
                <td>{info.Authors}</td>
                <td>{info.Affiliation}</td>
                <td>{info.Country}</td>
            </tr>
        )
    }
)

return(
    <div class="container">
        <div className="titleStyle1"> List Of </div>
        <div className="titleStyle2"> Accepted Papers </div>
        <div class="divider" style={{marginBottom: '50px'}}></div>
        <table className="table table-striped">
            <thead>
                <tr>
                <th>S No.</th>
                <th>ID</th>
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
