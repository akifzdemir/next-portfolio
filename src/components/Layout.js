import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }) => (
    <div>
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ ease: "easeIn", duration: '0.3' }}
            className="
            flex flex-col items-center w-full
            px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-80
            h-full
                "
        >
            {children}
        </motion.main>
    </div>
)

export default Layout