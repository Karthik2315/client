import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'

const headers = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/favicon.ico" alt="logo" width={100} height={100} className="h-8 w-auto cursor-pointer"/>
          <p className='text-[20px] text-gray-400'>TradeIQ</p>
        </Link>
        <nav className='hidden sm:block'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default headers
