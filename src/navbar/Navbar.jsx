import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.png';
export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <nav>
            <div className=' bg-green-200'>
                <div className='flex  items-center justify-between'>
                    <img className='w-[120px] h-[60px] pl-6' src={logo} alt="logo" />
                    <button className='pr-6 text-green-500' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars size={30} />
                    </button>
                    {showLinks && (<div>
                        <ul className='flex space-x-6'>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>)}
                    <div>
                        <ul className='flex pr-16 space-x-6 text-blue-400'>
                            {social.map((item) => {
                                const { id, url, icon } = item;
                                return (
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>

                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
