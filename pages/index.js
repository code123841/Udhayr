import Head from 'next/head'
import Image from 'next/image'
import hero from '../public/pixeltrue-web-development.svg'
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { useEffect } from 'react';


export default function Home() {  
  return (

    

    

    <div>
      <body className="bg-gray-800">

      <nav className="flex justify-center space-x-4">
        <a  className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Udhay</a>


<Link href="/Work">
<a  className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">See my Work</a>
</Link>

<Link href="/Techstacks">
<a  className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">My tech-stacks</a>

</Link>


</nav>
       
        <div>
     
          <h1 className="text-white text-center pt-10">
            <span className="text-3xl font-mono hover:font-serif">Hi,</span>
            <p className="text-3xl font-mono hover:font-serif text-center">
            <p>Im Udhay Rajeev</p>
            </p>
          </h1>

          <h3 className="text-white text-lg text-center pt-2 font-mono hover:font-serif">A full Stack Developer</h3>
        </div>

        <div>
          <p className='text-white flex justify-center pt-10 mt-10 font-bold '>
          I enjoy solving complex problems.<br />
          Frequently praised as Never Stop coding by my peers, <br />
          I can be relied upon to help your company < br />achieve its goals by providing sustainable and scalable solutions.<br/>
          </p>
        </div>
        <div  className='pt-5 flex  justify-center'>
          <Link href="https://github.com/code123841">
          <a><img  src="https://img.icons8.com/color/48/000000/github--v3.png"/></a>
          </Link>

          <Link href="https://twitter.com/Udhay26903569">
          <a className="pl-4"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a>

          </Link>

          {/* Works and TechStacks */}


          </div>

          
     

       

        <div className="flex justify-center">
        <Image
        src={hero}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div>


     
     
      </body>
</div>
  )
}
