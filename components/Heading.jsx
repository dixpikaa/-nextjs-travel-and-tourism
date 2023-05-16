import React from 'react'

const Heading = ({title, subtitle, pos}) => {
  return (
    <div className="mb-8">
      <h1 className={`text-[36px] font-bold ${pos && 'text-center'}`}>{title}</h1>
      <p className="text-gray-600 text-lg max-w-[800px]">{subtitle}</p>
    </div>
  )
}

export default Heading