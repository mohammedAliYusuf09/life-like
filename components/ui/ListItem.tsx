import Link from 'next/link'
import React from 'react'

interface Props {
    title: string;
    href: string;
    children?: React.ReactNode;
}

function ListItem({title, href, children}: Props) {
  return (
      <Link className='text-sm xl:text-lg 2xl:text-xl  hover:bg-gray-200 p-2 rounded-sm' href={href} >{title}  
        <p className='text-sm xl:text-lg 2xl:text-xl text-gray-600'>{children}</p>
      </Link>
  )
}

export default ListItem