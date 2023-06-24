'use client'
import { motion } from 'framer-motion'


export function Layout({ children, variants }) {
    return (
        <>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear' }}
                className="
            flex flex-col items-center w-full
            px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-80
            h-full       
                "
            >
                {children}
            </motion.main>

        </>
    )
}

export default Layout