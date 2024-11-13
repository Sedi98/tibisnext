import React from 'react'

type Props = {
    text:string
}

const SectionTitle: React.FC<Props> = ({text}) => {
  return (
    <h3 className='text-4xl text-[#2c3338] font-semibold text-center py-3'>{text}</h3>
  )
}

export default SectionTitle