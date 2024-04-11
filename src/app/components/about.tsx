import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        width={500}
        height={500}
        alt="hero"
        src={require("../../../public/assets/pictures/usman.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About me.....
      </h1>
      <p className="mb-5 leading-relaxed">
      Welcome to my portfolio! I am a passionate web developer with expertise in HTML5, Tailwind CSS, TypeScript, Node.js, and Next.js. With a strong foundation in these technologies, I strive to create visually appealing and functional websites that meet the needs of my clients. I am dedicated to staying up-to-date with the latest trends and techniques in web development to deliver high-quality results. Feel free to explore my projects and get in touch to discuss how we can collaborate on your next web development project.
      </p>
      <div className="flex justify-center">
        <a href={"/assets/cv/cv.docx"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About