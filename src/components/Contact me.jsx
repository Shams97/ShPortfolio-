import React, { useState,useRef } from "react";
import quarter from "../assets/Ellipse.png";
import Circle_img from "../assets/Ellipse 2.png";
import Slide from "react-reveal/Slide";
import { Circle } from "./about";
import emailjs from 'emailjs-com';
const axios = require("axios");

const CustomInput = ({ type, id, name, placeholder,onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="rounded-full border border-black h-8 m-1 lg:m-8 md:m-4 p-2 w-64 lg:w-64 md:w-72 "
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const Contact_me = () => {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [msg,setMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83xiin4', 'template_ssn0kq5', form.current, 'user_Mk6quqdKpUggBvu187i4v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Slide bottom>
      <div>
        <img
          src={quarter}
          alt=""
          className="float-right w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
        <img
          src={Circle_img}
          alt=""
          className="mx-auto w-40 h-20 md:w-48 md:h-24 lg:w-auto lg:h-40"
        />
        <h1 className="text-xl xlg:text-5xl lg:text-3xl text-center ml-0 md:ml-32 lg:ml-40 mb-4">
          CONTACT ME
        </h1>
        <Circle
          addition_classes="mr-4 mt-20 lg:mt-10"
          background="bg-secondary"
          position="absolute"
        />

        <form action="" method="post" ref={form} className="flex flex-col items-center" onSubmit={sendEmail}>
          <div className="flex lg:flex-row flex-col lg:w-1/2 justify-center">
            <CustomInput type="text" placeholder="your name" onChange={(e)=> setName(e.target.value) }  name="from_name"/>
            <CustomInput type="email" name="from_email" id="" placeholder="your email" onChange={(e)=> setEmail(e.target.value) }/>
          </div>

          <textarea
            className="rounded-lg border border-black lg:w-1/2 md:w-1/2 w-52 h-34 p-2"
            name="message"
            id=""
            cols="20"
            rows="10"
            placeholder="your message"
            onChange={(e)=> setMsg(e.target.value) } 
            value={msg}
          />

          <input
            type="submit"
            className="btn bg-secondary py-2 lg:px-40 px-20 md:px-24 rounded-full my-4 text-white"
            value="SEND"
           />
        </form>
      </div>
    </Slide>
  );
};
export default Contact_me;
