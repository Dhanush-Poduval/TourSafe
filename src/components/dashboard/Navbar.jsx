'use client'
import { LogOut,  Settings, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from '../ui/sidebar'



function Navbar() {
  
  return (
    
        <div className='w-full px-4 py-2 border-b ml-0 text-white'>
                <div className='w-full  mx-auto flex justify-between items-center ml-5 px-0 py-0'>
                    {/* Left */}
                    <SidebarTrigger className='ml-0'/>

                    {/* Right */}
                    <div className='flex items-center justify-end gap-3 mr-5'>
                        <Link href='/' className='text-sm font-medium'>Dashboard</Link>
                       
                        
                        

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                           
                            </DropdownMenuTrigger>

                            <DropdownMenuContent sideOffset={10}>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><User className="mr-2" /> Profile</DropdownMenuItem>
                            <DropdownMenuItem><Settings className="mr-2" /> Settings</DropdownMenuItem>
                            <DropdownMenuItem><LogOut className="mr-2" /> Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
        </div>

  )
}

export default Navbar