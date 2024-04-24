import React from 'react'; 
import { useEffect } from 'react';
import shyam from "./Logos/shyam.png";
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'

const About = () => { 

	useEffect(() => {
		FetchAboutMe() 
		
	}, [])  

	const FetchAboutMe = async () => {
		const data = await fetch("https://www.linkedin.com/in/samsonkaleti/") 
		const jsonData = await data.json() 

	
		console.log(jsonData)
	}
	
	



	return (
		<div className="text-black flex flex-col justify-center  h-screen w-full mt-52 mb-52"> 
			
			<div className=" hidden lg:flex fixed left-0 top-[36%] text-white">

				<ul className="">
					<li className=" px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/samsonkaleti" target="__blank">Linkedin  <FaLinkedin size={"30px"} /></a>
					</li>
					<li className="px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a className="flex justify-between items-center w-full text-white" href="https://github.com/samsonkaleti" target="__blank">GitHub  <FaGithub size={"30px"} /></a>
					</li>
					<li className=" px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a className="flex justify-between items-center w-full text-white" href="mailto:kaletishyam@gmail.com?subject=SweetWords&body=Please send me Your message here!">Gmail<HiOutlineMail size={"30px"} /></a>
					</li>

					<li className="px-4 flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a className="flex justify-between items-center w-full text-white" href="https://samsonkaleti.netlify.app/">Portfolio  <BsFillPersonLinesFill size={"30px"} /></a>
					</li>
				</ul>


			</div>
			
			<h3 className='font-[lato-400] text-pink-600 text-xl mt-8  ml-20'>HELLO! IT'S NICE TO SEE YOU HERE!.........</h3>
			<h1 className='font-[Recoleta-400] text-[90px] p-2 ml-32'>About <span className='text-red-400'>Me...</span></h1> 

<div className="flex flex-col justify-center items-center">
			<div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-0 px-4 mt-20 ">
				<div className="sm:text-right text-2xl font-bold font-[lato-400] mt-10">
					<p className="">
						Hi. I'm <span className="text-yellow-400">Samson,</span>  nice to meet you. Please take a look around on my profile.
					</p>
				</div> 

				<div className="border border-lime-400 h-[300px] w-0 ml-40 "></div> 
				<div className="mr-32 mt-10 w-full">
					<img className='w-[200px] ' src={shyam} alt="profile"  />
					
				</div>
			</div> 
			
			<p className='font-[lato-400] w-9/12 mt-10 text-xl '>
					<span className='text-red-400 text-lg font-bold'>\\\</span> Hi there! I'm an aspiring frontend developer bursting with
				creativity and a strong desire to make my mark in the world of web
				design. My journey started with diving into HTML, CSS,
				JavaScript, and  React, I've since explored projects like React projects,
				where I brought my frontend skills to life. I'm enthusiastic about
				creating user-friendly designs that resonate with users and
				deliver a smooth browsing experience. While my experience might be
				fresh, my learning curve is steep—I'm constantly upskilling
				through online courses and tutorials to stay updated with the
				latest trends. Join me on my journey by checking out my portfolio
				and watching my growth!"
			</p>
			
			
			</div>
		</div>
  );
};

export default About;
