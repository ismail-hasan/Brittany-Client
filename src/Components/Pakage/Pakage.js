import React from 'react';

const Pakage = () => {
    const pakageData = [
        {
            plan: "basic",
            price: 150,
            website: 3,
            responsive: "responsive design",
            ecommerce: "eCommerce",
            performance: "performance optimization",
            seo: "basic SEO",
            spreed: "spreed optimization"
        },
        {
            plan: "basic",
            website: "3-5",
            price: 150,
            responsive: "responsive design",
            ecommerce: "eCommerce",
            performance: "performance optimization",
            seo: "basic SEO",
            spreed: "spreed optimization"
        },
        {
            plan: "basic",
            price: 150,
            website: "6-10",
            responsive: "responsive design",
            ecommerce: "eCommerce",
            performance: "performance optimization",
            seo: "basic SEO",
            spreed: "spreed optimization"
        },
    ]
    return (
        <div className='h-screen mt-10'>
            <div className='grid grid-cols-3 gap-8 '>

                {
                    pakageData.map(pakage => {
                        return (
                            <div className='bg-[#112240] py-10 text-lg text-white flex items-center flex-col'>
                                <h1 className='text-[28px]'>Baisc</h1>
                                <h1 className='text-[42px] mt-5'>${pakage.price}</h1>
                                <div className='py-5'>
                                    <h1 className='capitalize'>{pakage.website} pages website design</h1>
                                    <h1 className='capitalize'>{pakage.responsive}</h1>
                                    <h1 className='capitalize'>{pakage.performance}</h1>
                                    <h1 className='capitalize'>{pakage.ecommerce}</h1>
                                    <h1 className='capitalize'>{pakage.seo}</h1>
                                    <h1 className='capitalize'>{pakage.spreed}</h1>
                                </div>
                                <button className='border rounded-full border-white px-8 py-2'>Order Now</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Pakage;