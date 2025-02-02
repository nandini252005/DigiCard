import React from 'react';
import phoneicon from '../phoneicon.png'
export default function Footer()
{
    return(
       <React.Fragment>
        <div className="foot">
          <img src={phoneicon} alt='phoneicon'/>
          <p>Contact +11 111777888</p>       
        </div>
       </React.Fragment>     
    )
}