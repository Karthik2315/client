import Link from 'next/link'
import React, { Children } from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth-layout'>
      <section className='auth-left-section scrollbar-hide-default'>
        <Link href='/' className='auth-logo flex items-center gap-2'>
          <img src='/favicon.ico' alt='logo' className='w-10 h-10'/>
          <p className='text-[23px] text-gray-400'>TradeIQ</p>
        </Link>
        <div className='flex-1 pb-6'>
          {children}
        </div>
      </section>
    </main>
  )
}

export default layout
