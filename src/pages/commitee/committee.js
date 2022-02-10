import React from 'react';
import OrgCommittee from "./orgcommitee";
import TechProCommittee from "./techprocommitee";
import Patrons from "./patrons";

const Committee = () => {
    return (
        <div class="container">
            <br/>
            <Patrons/>
            <br/>
            <OrgCommittee />
            <br/>
            <TechProCommittee />
        </div>
    );
}

export default Committee;