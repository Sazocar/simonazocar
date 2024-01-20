import React from 'react'
import Link from 'next/link'
import { GithubIconV2 } from '../components/GithubIconV2'
import { EmailIcon } from '@/components/EmailIcon'
import { LinkedInIcon } from '@/components/LinkedInIcon'

export function SocialsContainer() {
  return (
    <div className='w-full flex flex-row justify-center items-center gap-x-8'>
      <Link href='https://github.com/sazocar' target='_blank'>
        <GithubIconV2 />
      </Link>
      <div className='group relative'>
      <Link href='mailto:saimn.azocar@gmail.com' target='_blank'>
        <EmailIcon />
      </Link>
      <span className='absolute -top-4 w-56 left-14 end-0 scale-0 z-10 transition-all rounded bg-cyan-900 p-2 text-slate group-hover:scale-100 whitespace-nowrap text-white'>
           saimn.azocar@gmail.com ✨
          </span>
      </div>
      <Link href='https://www.linkedin.com/in/sazocar/' target='_blank'>
        <LinkedInIcon />
      </Link>
    </div>
  )
}
