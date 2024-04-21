import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* project 1  */}
      <div className="lg:w-1/3 sm:w-1/ p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="calculator"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/calculator1.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Mini Calculator
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript.
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/calculator.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View project on Github</p>
            </Link>
          </div>
        </div>
       
      </div>


       {/* project 2  */}
       <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/ngg.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Number Guessing Game
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript.
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/number_guessing_game.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View project on Github</p>
            </Link>
          </div>
        </div>
      </div>

       {/* project 3  */}
       <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/atm.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript. 
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/atm.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View project on Github</p>
            </Link>
          </div>
        </div>
      </div>

      {/* project 4  */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/to-do.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              To-do List
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript. 
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/todo-list.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View project on Github</p>
            </Link>
          </div>
        </div>
      </div>
    {/* project 5 */}
    <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/currency.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by useing typescript. 
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/currency_converter.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View project on Github</p>
            </Link>
          </div>
        </div>
      </div>
      {/* project 6  */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/ag.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Adventure Game
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript. 
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/project07-adventure-game.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View project on Github</p>
            </Link>
          </div>
        </div>
      </div>
      {/* project 7  */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/bank.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript. 
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/my-bank.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View project on Github</p>
            </Link>
          </div>
        </div>
      </div>
      {/* project 8 */}
      <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/sms.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Project....
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Student Manangement System
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this project by using typescript. 
            </p>
              <Link target='_blank' href={"https://github.com/usman-pasha-786/student-management-system.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
            View project on Github</p>
            </Link>
          </div>
        </div>
      </div>
     

    </div>
  </div>
</section>

    </div>
  )
}

export default Project