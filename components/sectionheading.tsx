import React from 'react'

type SectionHeadingprops={
    children: React.ReactNode;
}

export default function Sectionheading({children}:SectionHeadingprops) {
  return (
    <h2 className="text-3xl font-medium capitalize text-center mb-8">{children}</h2>
  )
}
