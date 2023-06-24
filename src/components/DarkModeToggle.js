'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'



const getThemeString = (isDark) => (isDark ? 'dark' : 'light')

const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleMode = () => {
        localStorage.theme = getThemeString(!isDarkMode)
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setDarkMode(!isDarkMode)
    }
    const darkModeActive =
        typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
    return (
        <AnimatePresence initial={false}>
            <motion.button
                className="text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
                onClick={() => toggleMode()}
                key={darkModeActive ? 'dark-icon' : 'light-icon'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {darkModeActive ? '🌙' : '☀️'}
            </motion.button>
        </AnimatePresence>
    )
}

export default DarkModeToggle
