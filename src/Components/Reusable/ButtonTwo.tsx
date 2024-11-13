import React from 'react'
import Link from 'next/link'

type Props = {
    text: string
    link: string
}

const ButtonTwo: React.FC<Props> = ({text,link}) => {
  return (
    <Link href={link} className='text-lg font-semibold  bg-[#0bc4d9] rounded-full text-white py-3 px-7 hover:bg-white hover:text-[#2c3338] transition-colors duration-300 ease-in-out'>{text}</Link>
  )
}

export default ButtonTwo