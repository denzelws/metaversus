'use client'

import { motion } from 'framer-motion'
import { fadeIn, textContainer, textVariant2 } from '../utils/motion'

export type CustomTextProps = {
  title: string | JSX.Element
  textStyles: string
}

export const TypingText = ({ title, textStyles }: CustomTextProps) => {
  const letters = typeof title === 'string' ? Array.from(title) : [title]
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {letters.map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {typeof letter === 'string' && letter === '' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  )
}
export const TitleText = ({ title, textStyles }: CustomTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
)
