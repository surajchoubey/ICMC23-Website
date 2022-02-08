import React from "react";
import {ExcuseCard, Excuses} from "../../layout/excuses.js"

function VISA() {
    return(
        <div className="container">

            <div className="titleStyle1">VISA</div>
            <div className="titleStyle2">Information</div>
            <div class="divider" style={{marginBottom: '30px'}}></div>
            {ExcuseCard(Excuses.TBA)}
            {ExcuseCard(Excuses.UnderDevelopmentPhase)}


        </div>
    );
}

export default VISA;
