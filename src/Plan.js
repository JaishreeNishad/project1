import React from 'react';

const Plan = () => {
  return (
    <div>
    <div className='ml-20 mt-10'>
        <h1 className=' text-gray-800 font-semibold '>PLAN YOUR TRIP</h1>
        <h1 className='font-bold text-4xl '>Where to next?</h1>
    </div>
    <div className='text-end font-bold mr-5'>
        <button className=' rounded-2xl px-5 py-1 border-2 border-gray-300 hover:bg-blue-500'>View all destinations</button>
    </div>
    
    <div className='flex mt-10'>
        <div className='w-1/3 ml-20'>
            <img src ="https://lp-cms-production.imgix.net/2023-01/iStock-1182337590-RFC.jpg?auto=format&fit=crop&w=310&h=365&q=75" className='rounded-2xl h-100 w-500'/>
        </div>
        <div className='w-1/3'>
            <img src ="https://lp-cms-production.imgix.net/2021-10/Washburn%20Fire%20Lookout%20under%20the%20Milky%20Way%20Yellowstone%20national%20Park%20NPS%20Jacob%20W%20Frank.jpg?auto=format&fit=crop&w=310&h=365&q=75" className='rounded-2xl'/>
        </div>
        <div className='w-1/3 ml-5'>
            <img src="https://lp-cms-production.imgix.net/2023-02/The%20Gooderham%20Building%20%28Flatiron%29%2C%20a%20Romanesque%20style%20building%2C%20in%20East%20Toronto%20reflecting%20in%20a%20puddle%20on%20a%20wet%20rainy%20day%20in%20the%20Financial%20District%20Scott%20Heaney%20shutterstock_1564653259%20rfc.jpg?auto=format&fit=crop&w=310&h=365&q=75" className='rounded-2xl'/>
        </div>

    </div>
    </div>
  )
}

export default Plan;