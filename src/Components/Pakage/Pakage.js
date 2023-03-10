import React from 'react';
import { Link } from 'react-router-dom';
import "./Pakage.css"

const Pakage = () => {
    const pakageData = [
        {
            plan: "basic",
            price: 5,
            website: 1,
            responsive: "responsive design",
            ecommerce: "e-commerce functionality",
            seo: "basic SEO",
            spreed: "speed optimization"
        },
        {
            plan: "Standard",
            website: "3-5",
            price: 95,
            responsive: "responsive design",
            ecommerce: "e-commerce functionality",
            seo: "A Complete SEO ",
            spreed: "speed optimization"
        },
        {
            plan: "Premium",
            price: 150,
            website: "6-10",
            responsive: "responsive design",
            ecommerce: "e-commerce functionality",
            seo: "A Complete SEO ",
            spreed: "speed optimization"
        },
    ]
    return (
        <section id='pakage' className='h-screen mt-20 '>
            <h1 className='line-heading text-[27px] capitalize text-white'>choose the pakage thats fit you need</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                {
                    pakageData.map((pakage, idx) => {
                        return (
                            <div key={idx} className='bg-[#112240] py-10 text-lg text-white flex items-center  flex-col highlights'>
                                <h1 className='text-[28px] capitalize tracking-[1px]'>{pakage.plan}</h1>
                                <h1 className='text-[42px] mt-5'>${pakage.price}</h1>
                                <div className='py-5 flex flex-col gap-4 my-5'>
                                    <h1 className='capitalize'>{pakage.website} page website design</h1>
                                    <h1 className='capitalize'>{pakage.responsive}</h1>
                                    <h1 className='capitalize'>{pakage.ecommerce}</h1>
                                    <h1 className='capitalize'>{pakage.seo}</h1>
                                    <h1 className='capitalize'>{pakage.spreed}</h1>
                                </div>
                                <Link target={'_blank'} to="https://www.fiverr.com/ismail623/">
                                    <button className='border rounded-full border-white px-8 py-2'>Order Now</button>
                                </Link>

                            </div>
                        )
                    })
                }

            </div>
        </section>
    );
};

export default Pakage;