import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-blue-100'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assets/pictures/logo.png")} alt='my-logo'
      width={50}
      height={50} className='rounded-full' />
      <span className="ml-3 text-md">Tech with usman</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Tech with usman 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank'
        href={"https://www.youtube.com/channel/UCI-57o-tkAAn5sMj4miQ6Eg"} className="text-gray-500">
      <FaYoutube className='text-4xl hover:text-gray-800' />
      </Link>
    </span>
    <br />
    <span>
    <Link target='_blank'
        href={"https://www.linkedin.com/in/muhammad-usman-5b2b181b8"} className="text-gray-500">
      <FaLinkedin  className='ml-5 text-4xl hover:text-gray-800' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer