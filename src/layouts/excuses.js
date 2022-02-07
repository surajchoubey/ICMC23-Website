import React from "react";

const TBA = () => {
    return (
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            <strong>TO BE ANNOUNCED!</strong>
            &nbsp; Sit back and relax! &nbsp;
            <button style={{all: 'unset', cursor: 'pointer'}} type="button" class="close text-info" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-close"></i></span>
            </button>
        </div>
    )
}

const UnderDevelopmentPhase = () => {
    return (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Website is currently under development phase.</strong>
            &nbsp; Please come back later! &nbsp;
            <button style={{all: 'unset', cursor: 'pointer'}} class="close text-info text-danger" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-close"></i></span>
            </button>
        </div>
    )
}

export {TBA, UnderDevelopmentPhase};
