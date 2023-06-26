import Layout from '@/components/Layout'
import * as motion from './lib/motion'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import Image from 'next/image'
import HandSvg from '../../public/waving-hand.svg'
import img from '../../public/IMG_20220522_212930_776.jpg'


export const metadata = {
  title: 'Home',
  decription: "Mehmet Akif Özdemir portfolio page"
}


const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
export default async function Home() {
  return (
    <Layout variants={variants}>

      <div className='flex flex-col-reverse gap-14 justify-center sm:flex-row w-full h-screen sm:justify-between items-center'>
        <div className='flex flex-col gap-5 w-4/5 sm:w-3/5 md:w-7/12 xl:w-3/4 '>
          <h1 className='relative text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold'>
            Hello, I'm Akif <Image src={HandSvg} className='absolute inline xl:ml-6  w-10 sm:w-12 xl:w-16' />
          </h1>
          <p className=' text-xl md:text-2xl sm:text-3xl xl:text-4xl font-extralight'>
            Junior Full-Stack Web developer at <a className='dark:text-sky-500 text-sky-700' target='_blank' href="https://sehirteknolojileri.com/">Sehir Teknolojileri Merkezi</a> and  <br /> Computer Engineering Student
          </p>
          <ul className='flex flex-row gap-5 text-5xl'>
            <motion.li whileHover={{ scale: 1.1, }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a href="https://github.com/akifz21"><BsGithub /></a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1, }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} >
              <a href="https://www.linkedin.com/in/mehmet-akif-ozdemir/"><ImLinkedin /></a>
            </motion.li>
          </ul>
        </div>
        <motion.div whileHover={{ scale: 1.1, }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={img}
            alt={'image'}
            placeholder='blur'
            className={' rounded-3xl w-36 sm:h-auto sm:w-48 md:w-52 xl:w-56 shadow-3xl dark:shadow-zinc-700 dark:shadow-2xl'}
          />
        </motion.div>

      </div>
    </Layout>
  )
}
