import Layout from '@/components/Layout'
import Image from 'next/image'
import image from '../images/IMG_20220522_212930_776.jpg'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'


export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <div className='flex flex-row w-full h-screen gap-7 items-center'>
          <div className='flex flex-col gap-5 w-1/2 sm:w-3/5 md:w-7/12 xl:w-3/4 '>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-normal'>
              Hello, I'm Akif👋
            </h1>
            <p className=' text-xl md:text-2xl sm:text-3xl lg:text-4xl font-extralight'>
              Junior Full-Stack Web developer and  <br />  Computer Engineering Student
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
          <motion.div className='w-1/2  sm:w-2/5 md:w-5/12 xl:w-1/4' whileHover={{ scale: 1.1, }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={image}
              alt={'image'}
              className={'rounded-2xl shadow-3xl dark:shadow-zinc-700 dark:shadow-2xl'}
            />
          </motion.div>

        </div>
      </Layout>

    </>
  )
}
