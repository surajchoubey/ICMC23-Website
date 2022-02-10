import React from 'react';

function PastEditionElement({link, yearname}) {
    return (
        <a href={link} target="_blank" rel="nopener noreferrer" style={{all: 'unset', cursor: 'pointer'}}>
            <div className='boxStyle'>
                {yearname}
            </div>
        </a>
    )
}

function PastEditions() {
    return(
        <div className="container" style={{/* marginLeft:"60px", marginTop: "40px" */}}>
            <div className = 'titleStyle1'>
                Previous
            </div>
            <div className = 'titleStyle2'>
                Conferences
            </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', /*marginLeft: '60px', marginRight: '120px',*/ marginTop: "60px"}}>
                <PastEditionElement link="http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=31342" yearname="2013" />
                <PastEditionElement link="http://hithaldia.co.in/icmc2015/" yearname="2015" />
                <PastEditionElement link="http://hithaldia.co.in/icmc2017/" yearname="2017" />
                <PastEditionElement link="https://old.iitbhu.ac.in/icmc2018/apm/index.html" yearname="2018" />
            </div>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', /*marginLeft: '60px', marginRight: '120px'*/}}>
                <PastEditionElement link="https://event.kiit.ac.in/icmc2019/" yearname="2019" />
                <PastEditionElement link="https://link.springer.com/book/10.1007/978-981-15-8061-1" yearname="2020" />
                <PastEditionElement link="https://icmc2021.in/" yearname="2021" />
                <PastEditionElement link="https://vit.ac.in/icmc2022/" yearname="2022" />
            </div>
        </div>
    )
}

export default PastEditions;