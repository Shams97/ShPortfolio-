import React from "react";
import Me from '../assets/avatar.gif';
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithub,
  faBehanceSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Pdf  from "../assets/resume.pdf";
import { faEnvelope, faBackward} from "@fortawesome/free-solid-svg-icons";
import "../App";
import {Link} from 'react-router-dom'

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location = mailto;
              e.preventDefault();
          }}
      >
         <FontAwesomeIcon
              icon={faEnvelope}
              color="#F6793F"
              size="lg"
            ></FontAwesomeIcon>
      </Link>
  );
};

const Home = () => {
  return (
    <Slide bottom>

      <div className="image-cover">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:mt-44 h-full w-full">   
        <div className="flex flex-col items-center mt-12 w-full">
          <img
            src={Me}
            className="rounded-full border-4 border-primary  w-32 h-32 lg:w-64 lg:h-64"
            alt=""
          />
      
      <div className="flex justify-around  my-10 w-1/2">

           <ButtonMailto mailto="mailto:shamsnaji4@gmail.com" />
          
           
           <Link to={{pathname:"https://www.linkedin.com/in/shams-khaled/"}} target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#F6793F"
              size="lg"
            /> 
            </Link>

            <Link to={{pathname:"https://twitter.com/ShamS010010"}} target="_blank">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              color="#F6793F"
              size="lg"
            ></FontAwesomeIcon>
             </Link>
            

             <Link to={{pathname:"https://github.com/Shams97"}} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              color="#F6793F"
              size="lg"
            ></FontAwesomeIcon>
            </Link>

            <Link to={{pathname:"https://www.behance.net/shamskhalid"}} target="_blank">
            <FontAwesomeIcon
              icon={faBehanceSquare}
              color="#F6793F"
              size="lg"
            ></FontAwesomeIcon>
            </Link>
          </div>
          
        </div>
       
        <div className="flex flex-col text-center lg:ml-40">
          <h3 className="text-4xl lg:text-5xl text-white">I'M SHAMS KHALED</h3>
          <p className="text-sm lg:text-lg  lh-2 text-gray-300">
            Web developer and UI/UX designer{" "}
          </p>
          <p className="text-white text-base lg:text-lg md:mx-4">
            I have more than 3 years of experience in tech field. I fall in love
            with deisgn a year from now, I worked in two local tech company in
            my region as a react developer and front end engineer, I've dealt with mobile react native
            developement too.
          </p>
          <div className="flex justify-around py-3">
            <Link className="px-8 text-white font-bold py-2 px-6 rounded-full bg-primary hover:bg-orange-600 active:bg-orange-600 active:outline-none" to={Pdf} download target="_blank">Resume</Link>
            {/* <Link className="px-8 text-white font-bold py-2 px-6 rounded-full bg-primary hover:bg-orange-700" to="/history">Work history</Link> */}
          </div>
         </div>
        </div>
      </div>
    </Slide>
  );
};

export const History=()=>{
  return <div>
          <FontAwesomeIcon icon={faBackward} size="lg" color="#F6793F"></FontAwesomeIcon>
    work history
    </div>
}
export default Home;
