import React from "react"
import myimage from '../myimage.jfif'
export default function Header()
{
    return(
        <React.Fragment>
          <div class="image-container">
            <img 
              className="myimage" 
              src={myimage}
              alt="myimage" />
          </div>
        </React.Fragment>
    )
}