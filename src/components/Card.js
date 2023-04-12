import { FiGithub } from 'react-icons/fi'
import { motion, useInView } from 'framer-motion'

export default function Card({ name, description, url }) {
    return (
        <motion.a
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            target='_blank'
            href={url}
            className='w-full'
            transition={{
                ease: "linear",
                duration: 0.3,
            }}
        >
            <div
                className="
                flex flex-row h-32 rounded-lg items-center
                bg-white p-3 shadow-lg
                dark:shadow-zinc-700
               dark:bg-neutral-700
               hover:shadow-2xl
               hover:scale-110
               transition-transform
               duration-300
               "
            >
                <div className='w-14 flex items-center justify-center content-center'>
                    <div>
                        <FiGithub size={"50px"} />
                    </div>

                </div>
                <div className="text-center w-full">
                    <h3 className='font-semibold text-lg'>{name}</h3>
                    <p className='font-light'>
                        {description}
                    </p>

                </div>
            </div>
        </motion.a>
    )
}

