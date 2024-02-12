import { contactDetails, navLinks, socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="text-purple text-xl font-semibold">
          Naimur Rahman
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          <ul className="flex gap-8 items-center">
            {
              navLinks.map((link,index)=>(
                <li key={index}>
                <NavLink href={link.url} label={link.label}/>
              </li>
              ))
            }
          </ul>
        </nav>
        <div className="flex gap-5">
          {
            socialLinks.map((link,index)=>(
              <a
                href={link.url}
                key={index}
                className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
              >
                <link.icon strokeWidth={0} fill="currentColor"/>
              </a>
            ))
          }
        </div>
      </div>

      {/* contact details */}

      <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center
      rounded-lg mt-5">
        {
          contactDetails.map((detail,index)=>(
            <div key={index} className="flex gap-3 items-center text-purple">
              <detail.icon size={20}/>
              <p className="text-gray-700">{detail.text}</p>
            </div>
          ))
        }
      </div>

      {/* copywrite text */}

      <p className="mt-8 text-gray-600 text-center text-sm">
        Copyright @{new Date().getFullYear()} Naimur Rahman. All right reseved
        </p>
    </footer>
  )
}

export default Footer