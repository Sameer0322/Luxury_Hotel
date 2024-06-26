'use client'

import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import { base_url } from "@/base_url";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = async () => {
    if (newsletterEmail === "") {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(`${base_url}/contact/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        alert("You have successfully subscribed to the newsletter!");
        setNewsletterEmail("");
      } else {
        alert("There was an issue with your subscription. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-black rounded-t-3xl px-4 py-10 md:px-20 md:py-16">
      <div className="text-center">
        <div className="text-2xl md:text-4xl text-gray-200">You're precious to us!</div>
        <div className="text-lg md:text-xl text-gray-400 mt-3">
          Subscribe to get notified about exciting travelling plans..
        </div>
      </div>

      <div className="text-2xl md:text-3xl text-gray-200 text-center mt-10">Newsletter</div>
      <div className="flex justify-center items-center mt-5">
        <div className="relative w-full max-w-lg md:max-w-3xl">
          <input
            type="text"
            className="w-full h-10 md:h-14 pl-3 md:pl-10 pr-32 rounded-full text-white bg-black border-2 border-white focus:shadow focus:outline-none"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
          <button
            className="absolute top-0 right-0 h-10 md:h-14 w-28 md:w-52 text-black rounded-full bg-white hover:bg-gray-200 text-xs md:text-lg"
            onClick={handleNewsletterSubmit}
          >
            Receive newsletters
          </button>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-16">
        <div className="text-2xl pb-8 md:text-4xl text-gray-200">Start your journey today, don’t miss out!</div>
        <div>
          <Link href="/hotels">
            <button
              type="button"
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Start Booking Hotels
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-5 md:mt-16 gap-8 md:gap-0">
        <div className="md:w-1/4">
          <div className="text-lg text-gray-200 pb-2 md:pb-8"><b>TheLuxuryHotelConcierge</b></div>
          <div className="text-gray-400 leading-relaxed text-sm md:text-lg">
            Welcome to The Luxury Hotel Concierge, the top destination for customised premium vacation experiences.
          </div>
        </div>
        <div className="leading-relaxed">
          <div className="text-gray-200 text-lg pb-2"><b>Company</b></div>
          <Link href="/blog"><div className="cursor-pointer text-gray-400 text-sm md:text-lg">Blog</div></Link>
          <Link href="/aboutus"><div className="text-gray-400 cursor-pointer text-sm md:text-lg">About Us</div></Link>
          <a href="mailto:booking@theluxuryhotelconcierge.co.in" target="_blank" rel="noopener noreferrer">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Careers</div>
          </a>
        </div>
        <div className="leading-relaxed">
          <div className="text-gray-200 text-lg pb-2"><b>Support</b></div>
          <a href="mailto:booking@theluxuryhotelconcierge.co.in" target="_blank" rel="noopener noreferrer">
            <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Help Center</div>
          </a>
          <Link href="/contact"><div className="text-gray-400 cursor-pointer text-sm md:text-lg">Contact Us</div></Link>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Status</div>
        </div>
      </div>

      <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-xs md:text-lg">© 2021 TheLuxuryHotelConcierge. All rights reserved</div>
        <div className="flex gap-4">
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">Terms</div>
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">Cookies</div>
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">Privacy Policies</div>
          <div className="text-gray-500 flex items-center gap-2 md:mr-5">
            <FaSquareFacebook className="text-xl md:text-2xl" />
            <FaTwitter className="text-xl md:text-2xl" />
            <FaYoutube className="text-xl md:text-2xl" />
            <RiInstagramFill className="text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
