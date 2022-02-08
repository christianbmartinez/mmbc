import { useState } from 'react'

export default function NavBar() {
  const [show, setShow] = useState(false)
  return (
    <nav className='w-full border-b sticky bg-white z-50 top-0'>
      <div className='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
        <div aria-label='Home. logo' role='img'>
          <a href='#home'>
            <img className='w-20 md:w-20' src='/assets/logo.png' alt='logo' />
          </a>
        </div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className={`${
              show ? 'hidden' : ''
            } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
          >
            <svg
              aria-haspopup='true'
              aria-label='open Main Menu'
              xmlns='http://www.w3.org/2000/svg'
              className='md:hidden icon icon-tabler icon-tabler-menu'
              width={24}
              height={24}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#2c3e50'
              fill='none'
              strokeLinecap='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          </button>
          <div
            id='menu'
            className={` ${show ? '' : 'hidden'} md:block lg:block `}
          >
            <button
              onClick={() => setShow(!show)}
              className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-4 right-4`}
            >
              <svg
                aria-label='close main menu'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='#2c3e50'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <ul className='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
              <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0'>
                <a onClick={() => setShow(!show)} href='#home'>
                  Home
                </a>
              </li>
              <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                <a onClick={() => setShow(!show)} href='#about'>
                  About
                </a>
              </li>
              <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                <a onClick={() => setShow(!show)} href='#services'>
                  Services
                </a>
              </li>
              <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                <a onClick={() => setShow(!show)} href='#testimonials'>
                  Testimonials
                </a>
              </li>
              <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                <a onClick={() => setShow(!show)} href='#team'>
                  Team
                </a>
              </li>
              <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                <a onClick={() => setShow(!show)} href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className='focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm'>
          <a href='#contact'>Contact Us</a>
        </button>
      </div>
    </nav>
  )
}
