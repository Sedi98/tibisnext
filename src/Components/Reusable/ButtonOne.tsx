import React from 'react'
import Link from 'next/link'

type Props = {
    text:string
    link:string
}

const ButtonOne: React.FC<Props> = ({text,link}) => {
  return (
    <Link href={link} className='text-lg font-semibold  border-2 border-[#fff] rounded-full text-white py-3 px-7 hover:bg-white hover:text-[#2c3338] transition-colors duration-300 ease-in-out'>{text}</Link>
  )
}

export default ButtonOne