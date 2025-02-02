import React from "react"
export default function Main()
{
    return(
        <React.Fragment>
            <div className="mainbody">
              <h2 className="myname">NANDINI MIDDE</h2>
              <h3 className="mywork">Astronaut</h3>
              <div className="buttons">
                <a href="mailto:nandini.midde25@gmail.com">
                   <input className="emailbutton" type="button" name="Email" onclick="location.href='mailto:nandini.midde25@gmail.com'" value={'Email'} />
                </a>
                <a href="https://github.com/nandini252005">
                    <input className="gitbutton" type="button" name="Git"  value={'GitHub'} />
                </a>
              </div>
              <div className="aboutme">
                <h4><b>Who am I?</b></h4>
              </div>
              <p className="aboutme-p">I like to think of myself as an astronaut- just one who explores code instead of space. 
                  My rocket is a browser, my missions involve deploying websites, and my biggest black hole is debugging. 
                  While NASA tracks space missions, I build a site that does it for them.
              </p>
            </div>
        </React.Fragment>
    )    
}