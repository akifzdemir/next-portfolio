import Layout from '@/components/Layout'
import * as motion from './lib/motion'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import Image from 'next/image'


export const metadata = {
  title: 'Home',
  decription: "Mehmet Akif Özdemir portfolio page"
}

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}
export default async function Home() {
  return (
    <Layout variants={variants}>

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
            src={'/IMG_20220522_212930_776.jpg'}
            alt={'image'}
            width={200}
            height={200}
            className={'rounded-2xl shadow-3xl dark:shadow-zinc-700 dark:shadow-2xl'}
          />
        </motion.div>

      </div>
    </Layout>
  )
}
