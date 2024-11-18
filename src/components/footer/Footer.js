import React from "react"

export function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
                <div className='flex justify-center'>
                    <a href='https://github.com/draclyr'
                        target='_blank'
                        rel="noreferrer"
                        className='capitalize border-b mb-3 text-base hover:text-gray-300 transition'
                    >
                        view source code on github
                    </a>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2024 Arenshop | All Rights Reserved</p>
                    <a href='https://www.linkedin.com/in/draclyr/'
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-gray-300 transition'
                    >
                        Create By Hesam Shahmoradi
                    </a>
                </div>
            </div>
        </footer>
    )
}
