import React from "react";
import {Helmet} from "react-helmet";

function ListAccepted() {
    return(
        <div>
            <Helmet>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script>
		    $(document).ready(function(){
			$.getJSON("employee.json",function(data){
			    var employee_data = '';
			    $.each(data,function(key,value){
				employee_data += '<tr>';
				employee_data += '<td>'+value.Sl+'</td>';
				employee_data += '<td>'+value.Id+'</td>';
				employee_data += '<td>'+value.Title+'</td>';
				employee_data += '<td>'+value.Authors+'</td>';
				employee_data += '<td>'+value.Affiliation+'</td>';
				employee_data += '<td>'+value.Country+'</td>';
				employee_data += '</tr>';

			    });
			    $('#employee_table').append(employee_data);
			});
		    });
		</script>
	    </Helmet>
            <div class="container">
            <div class="table-responsive section-header">
                <h1 align = "center">
                    Accepted Papers
                </h1>
                <br/>
                
                <table class="table table-striped table-bordered" id="employee_table">
                    <tr>
                        <th>Sl</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Affiliation</th>
                        <th>Country</th>
                    </tr>
                </table>
            </div>
            </div>
        </div>
    );
}

export default ListAccepted;
