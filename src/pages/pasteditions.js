import React from 'react';
import '../App.css';

function PastEditions() {
    return(
        <div style={{marginLeft:"60px", marginTop: "40px"}}>
            <div className = 'titleStyle1'>
            Previous
            </div>
            <div className = 'titleStyle2'>
            Conferences
            </div>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginLeft: '60px', marginRight: '120px', marginTop: "60px"}}>
                <div className='boxStyle'>
                    <a>2013</a>
                </div>
                <div className='boxStyle'>
                    <a href='http://hithaldia.co.in/icmc2015/' style={{color:"white", textDecoration:'none'}} target="_blank">2015</a>
                </div>
                <div className='boxStyle'>
                    <a href='http://hithaldia.co.in/icmc2017/' style={{color:"white", textDecoration:'none'}} target="_blank">2017</a>
                </div>
                <div className='boxStyle'>
                    <a href='https://old.iitbhu.ac.in/icmc2018/apm/index.html' style={{color:"white", textDecoration:'none'}} target="_blank">2018</a>
                </div>
            </div>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginLeft: '60px', marginRight: '120px'}}>
                <div className='boxStyle'>
                    <a href='https://event.kiit.ac.in/icmc2019/' style={{color:"white", textDecoration:'none'}} target="_blank">2019</a>
                </div>
                <div className='boxStyle'>
                    <a>2020</a>
                </div>
                <div className='boxStyle'>
                    <a href='https://icmc2021.in/' style={{color:"white", textDecoration:'none'}} target="_blank">2021</a>
                </div>
                <div className='boxStyle'>
                    <a href='https://vit.ac.in/icmc2022/' style={{color:"white", textDecoration:'none'}} target="_blank">2022</a>
                </div>
            </div>
        </div>
    )
}

export default PastEditions;
