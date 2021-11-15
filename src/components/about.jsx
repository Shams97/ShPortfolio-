import React,{useState} from "react";
import Slide from "react-reveal/Slide";
import Circle_img from "../assets/Ellipse 2.png";
 

export const Circle = ({background,position,addition_classes}) => {
  return (
    <div
      className={`${background} ${position} lg:w-64 lg:h-64 h-40 w-40 rounded-full opacity-50  transform -translate-x-24 ${addition_classes}`}
      style={{
        zIndex: "-1",
        WebkitTransform: "translate3d(0,0,0)",
        Transform: "translate3d(0,0,0)",
        WebkitTransform: "translateZ(100px)",
      }}
    />
  );
};

const Button = ({ type, value,onClick }) => {

  return (
    <button
      type={type}
      className="bg-secondary text-white px-10 py-2 lg:px-52 my-2 md:mx-48 mx-auto text-center rounded-full text-xl hover:bg-red-300 hover:text-black active:outline-none"
      onClick={onClick}    
    >
      {value}
    </button>
  );
};

const Skills = ({skills,tools,education}) => {
  return (
    <div className=" flex flex-col border-primary border-2	lg:p-8 p-1 rounded-xl lg:mr-auto lg:ml-48 mx-auto md:p-4 mb-4 z-1">
    {skills ?
     <div className="flex flex-col">
     <h4 className="text-center mb-8 text-lg lg:text-2xl">Languages I speak</h4>
      <div className="grid lg:grid-flow-row grid-flow-col grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 grid-rows-2 lg:gap-4 gap-1 md:grid-cols-3 md:grid-rows-3 transition delay-150 duration-300 ease-in-out">
        {skills.map((item,key)=>{ 
          return <div key={key} className="lg:px-4 lg:py-2 p-2 bg-black text-white  text-center border rounded-full text-xs lg:text-lg">{item}</div>
          })}
      </div>
     </div>:null}
      
    {tools ?
     <div className="flex flex-col">
     <h4 className="text-center mb-4 mt-10 text-lg lg:text-2xl">Tools I use</h4>
      <div className="grid lg:grid-flow-row grid-flow-col grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 grid-rows-2 lg:gap-4 gap-1 md:grid-cols-3 md:grid-rows-3 ">
        {tools.map((items,t_key)=>{ 
          return <div key={t_key} className="lg:px-4 lg:py-2 p-2 bg-gray-300  text-center text-gray-800 border rounded-full text-xs lg:text-lg">{items}</div>
          })}
      </div>
     </div>:null}


    {education?
     <div className="flex flex-col">
     <h4 className="text-center mb-4 mt-4 text-lg lg:text-2xl"> Courses and Certification </h4>
        <div className="flex flex-col justify-around ">
        {education.map((items)=>{ 
         return <div key={items.courses} className="mt-4 lg:px-8 px-4 py-2 bg-black text-center text-white border rounded-xl text-xs lg:text-lg">
                    {items.courses}
                  <p className="text-sm text-white" key={items.date}>{items.date}</p>
                </div>
          })}
      </div>
     </div>:null}
    
    </div>
  );
};


const About = () => {
  const [show, setShow] = useState(false);
  const education =[ {courses:"FikraCamp web devlopment course in react and node.js ", date:"2018"},
                     {courses:"Re-coded front-end developement", date:"2019"},
                     {courses:"Re-coded UI/UX design", date:"2020"},
                  ]
  return (
    <Slide bottom>
      <div className="flex flex-col">
        <Circle background="bg-secondary" position="absolute" addition_classes="mt-20 lg:mt-10"/>
        <img
          src={Circle_img}
          alt=""
          className="mx-auto w-40 h-20 md:w-48 md:h-24 lg:w-auto lg:h-40 z-1"
        />
        <p className="lg:text-3xl text-xl mx-auto">ABOUT ME</p>

        <div className="flex flex-col lg:items-start items-center">
          <Button type="submit" value="Skills" onClick={()=> setShow(!show)}/>
          <Button type="submit" value="Education" onClick={()=> setShow(!show)}/>
        </div>
        {Button.value="Skills" && show ? 
           <Skills  skills={['Html','Tailwindcss', 'Nodejs','Reactjs','Sass','React native','Java','UI/UX','Xml']} tools={["VS code","Git/Github/Gitlab","Chrome DevTools", "Codepen","Slack"]}/>
         : <Skills  education={education}
         />
        }
          <Circle
            background="bg-primary"
            position="relative"
            addition_classes="mr-24 ml-auto -mt-32"
          />
                
      </div>
    </Slide>
  );
};

export default About;
