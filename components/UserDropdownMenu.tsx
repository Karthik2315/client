'use client';

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react';
import NavItems from './NavItems';

const UserDropdownMenu = () => {
  const router = useRouter();
  const handleSignout = async() => {
    router.push('/sign-in');
  }
  const user = {
    name: 'Karthik',
    email: 'padiyil2004@gmail.com'
  }
  return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className='flex items-center gap-3 text-gray-400 hover:text-yellow-500 hover:bg-transparent cursor-pointer'>
        <Avatar className='size-8'>
          <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className='hidden md:flex flex-col items-start'>
          <span className='text-base font-medium text-gray-400'>
            {user.name}
          </span>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>
        <div className='flex relative items-center gap-3 py-2 px-3'>
          <Avatar className='size-10'>
            <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-base font-medium text-gray-400'>
              {user.name}
            </span>
            <span className='text-sm text-gray-500'>{user.email}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator className='bg-gray-600'/>
      <DropdownMenuItem onClick={handleSignout} className='text-gray-100 text-md font-medium focus:bg-transparent group focus:text-yellow-500 cursor-pointer' >
        <LogOut className='size-4 mr-2 hidden sm:block group-focus:text-yellow-500'/>
        Logout
      </DropdownMenuItem>
      <DropdownMenuSeparator className='hidden sm:block bg-gray-600'/>
      <nav className='sm:hidden '>
        <NavItems />
      </nav>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserDropdownMenu
