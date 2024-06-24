"use client";
import React, {useState} from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Highlight from './Highlight';

const components = [
    { id: 1, name: 'Queries' },
    { id: 2, name: 'Reservation Requests' },
    { id: 3, name: 'Procurement Requests' },
    { id: 4, name: 'Other' },
    { id: 5, name: 'Corporate Solutions' }
  ];


const ContactSection = () => {
    const [highlighted, setHighlighted] = useState(null);

    const handleHighlight = (id) => {
        setHighlighted(id);
    };

  return (
    <div className="w-full p-4 mt-14">
        <div className="max-w-6xl mx-auto md:px-4">
            <div className='md:flex ' >
                <div className='md:w-2/5 md:mt-10 md:pr-[5rem] mx-3'>
                    <div className='sm:text-3xl md:text-4xl text-2xl md:leading-normal leading-snug'>Reach out to us for more details & <b>custom bookings </b></div>
                    <div className='md:mt-[10rem] my-1 text-gray-500'>email: hedgemyfunds@gmail.com</div>
                    <div className='md:my-10 my-1  text-gray-500'>Ph no: +123456789</div>
                    <div className="text-gray-500  flex items-center md:gap-4 gap-2">
                        <FaSquareFacebook className="text-xl md:text-2xl" />
                        <FaTwitter className="text-xl md:text-2xl" />
                        <FaYoutube  className="text-xl md:text-2xl" />
                        <RiInstagramFill className="text-xl md:text-2xl" />
                    </div>
                </div>
                <div className='md:w-3/5 border-gray-300 border-2  rounded-lg md:p-5 sm:p-4 p-3 md:my-0 my-3 md:mx-0 sm:mx-5 mx-1  '>
                        <div className='md:text-xl  text-lg'><b>I'm interested in:</b></div>
                        <div className='md:pb-5 md:pt-3 py-2  md:mr-[10rem] sm:mr-10 mr-5 md:text-sm text-xs flex flex-wrap '>
                            {components.map(component => (
                                <Highlight 
                                key={component.id} 
                                id={component.id} 
                                name={component.name} 
                                isHighlighted={highlighted === component.id} 
                                onClick={handleHighlight} 
                                />
                            ))}
                        </div>
                        <div className="relative h-11 w-full min-w-[200px] my-5  md:px-3">
                            <input placeholder="Name"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                            className="md:px-3 after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Name
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px] md:px-3 md:mt-10">
                            <input placeholder="@gmail.com"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                            className="md:px-3 after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Your email
                            </label>
                        </div>
                        <div class="my-6 md:px-3">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                            <textarea class="w-full h-40 p-2 border border-gray-300 rounded-md"></textarea>

                        </div>
                        <button type="button" className="md:mx-3 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Message</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection