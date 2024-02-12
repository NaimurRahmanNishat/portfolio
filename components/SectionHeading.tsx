import React from 'react'

interface Props{
    title:string;
    subtitle:string;
}

const SectionHeading = ({title,subtitle}:Props) => {
  return (
    <div className="max-w-xl mx-auto mb-16 text-center">
        <h2 className="text-gray-700 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}

export default SectionHeading