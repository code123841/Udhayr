import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Covidm from '../public/Covidm.png'
import Devgram from '../public/Devgram.png'
import Linuz from '../public/Linux.png'
import Link from 'next/link'
export default function Work(){
    return(
        <body className='bg-gray-900 text-white text-lg text-center '>
            <h1 className='pb-10 pt-5'>Projects I've Worked on</h1>

            <hr className={styles.hr}></hr>
        <div className={styles.div}>
  <p className={styles.p}> 
  <h2 className="text-mono text-xl font-bold ">Covidm</h2>
  <span className='pt-2 font-serif'>

  The One and only Web app You need to Fight the Virus< br/>
  Find beds,Vaccines Near you.
  </span>

  <span>

    <Link href="https://github.com/Covidm">
      <a>
          
  <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
  </a>
  </Link>
  </span>
{/* Illutration */}

  <span>
  <Link href='https://covidm-beta.herokuapp.com/'>
  <a >
      <p className='text-white'>View</p>
      </a>
      
      </Link>
     
  </span>

<span className=''>
<Image 
  src={Covidm}
  height={1000}
  width={1500}
  />
</span>


   </p>

   {/* Second PRoject */}
<p  className={styles.p}>
    <h2 className='font-bold text-lg font-mono underline'>DevGram</h2>

    <span className='pt-5 font-mono'>
        A simple Blogs Space For People To Post Quick Blogs Anytime from anyWhere!

    </span>


    <span>
    <Link  href="https://github.com/blog-spot">
    <a>
  <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
  </a>
    </Link>
  </span>

  <span>
    <Link  href='https://devgramco.herokuapp.com/'>
    <a>
      <p className='text-white'>View</p>
      </a>
    </Link>
  </span>

  <Image 
  src={Devgram}
  height={500}
  width={500}
  />


</p>

<p  className={styles.p}>
    <h2 className='text-white text-lg font-mono underline'>Linux Notes Terminal app</h2>

    <span className='pt-5'>Yet Another Simple Notes Taking Application With your Terminal, It's Avaliable With Windows too (Node js package)</span>

    <span>
     <Link href="https://github.com/Cli-Appss/Linux-notes-app">
     <a>
  <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
  </a>
     </Link>
  </span>

  <Image
  src={Linuz}
  />



</p>

<p  className={styles.p}>
    <h2 className='text-lg font-bold underline font-monos'>Future Projects!</h2>
</p>
<p  className={styles.p}>Planning On Building A Social Media Platform For People To Chill and Hangout Coming Soon! Stay tuned!</p>

  
</div>

</body>
)
}