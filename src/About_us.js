import React from 'react'

const About_us = () => {
  return (
    <div className='flex'>
        <div className=' w-1/4 ml-10'>
            <h1 className='text-blue-800 text-3xl font-bold mt-10'>lonely planet</h1>
            <h2 className='text-black mt-4'>For Explorers Everywhere</h2>
            <h5 className='text-black mt-3 font-bold'>FOLLOW US</h5>
            <link/>
            <h1 className='text-black text-sm font-semibold'>SUBSCRIBE</h1>
            <h1 className='text-blue-700 text-xl font-bold'>Get 20% off our online shop.</h1>
            <button className='px-10 py-2 border border-gray-400 rounded-2xl font-semibold mt-4'>Email address</button>
            <h5 className='text-black text-xs font-semibold mt-2'>Subscribe to Lonely Planet newsletters and promotions. Read our Privacy Policy.</h5>
            <button className='px-5 py-2 border border-gray-400 rounded-2xl font-semibold mt-4 mb-20'>Sign up</button>
        </div>
        <div className='ml-40 w-1/4'>
        <h1 className='text-black font-bold text-sm mt-10'>TOP DESTINATIONS</h1>
        <h4 className='text-gray-900 text-sm font-semibold '>New York City<br/> paris<br/> Italy <br/>Consta Rica<br/> USA<br/> Amsterdam<br/> Portugal<br/> Cancum<br/> Chicago<br/> England<br/> Tokyo<br/> France<br/> Thailand<br/> Ireland<br/> Rome<br/> London<br/> Los Angeles<br/> Mexico<br/> San Francisco</h4>

        </div>
        <div className=' mr-6 w-1/4'>
            <h1 className='mt-10 font-bold text-sm '>TRAVEL INTERESTS</h1>
            <h4 className='text-gray-900 text-sm font-semibold '>Adventure Travel<br/>
            Art and Culture<br/>
            Beaches,Coasts and Island<br/>
            Family Holidays<br/>
            Festivals<br/>
            Food and Drink<br/>
            Honeymoon and Romance<br/>
            Road Trips<br/>
            Sustainable Travel<br/>
            Travel on a Budget<br/>
            Wildlife and Nature</h4>

        </div>
        <div className=' w-1/4'>
            <h1 className='mt-10 font-bold text-sm'>SHOP</h1>
            <h3 className='text-sm font-semibold'>Destination Guides<br/>Lonely Planet Kids<br/>Lonely Planet Shop<br/>Non-Enliish Guides</h3>
            <h1 className='mt-4 font-bold text-sm'>About us</h1>
            <h3 className='text-sm font-semibold'>About lonely Planet<br/>Contact us<br/>Press<br/>Privacy Policy<br/>Terms and Conditions<br/>Work For Us<br/>Sitemap<br/>Cookie Settings<br/>Do Not Sell or Share My Personal Information</h3>

        </div>

    </div>
  )
}

export default About_us