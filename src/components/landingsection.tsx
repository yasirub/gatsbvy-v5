import * as React from 'react'
import bigcommercelogo from '../images/clbc.svg'
import Card from './card'
const LandingSection: React.FC = () => {
    return (
        <>
            <div className='container mx-auto px-4 mt-10'>
                <div className='block max-w-4xl text-center mx-auto'>
                    <span className='text-black font-sans text-6xl'>
                        Launch a BigCommerce store with blazing Speed
                    </span>
                </div>
                <div className='block max-w-2xl text-center mx-auto mt-5'>
                    <span className='text-gray-500 text-xl'>
                        Ready to accelerate your online business? Whether you’re cultivating a new brand, navigating platform migration, or looking for enhanced features to outpace the competition, Clouda’s experienced BigCommerce developers got you covered.
                    </span>
                </div>
                <div className='block max-w-2xl text-center mx-auto mt-5'>
                    <button className="bg-blue-600 p-2 rounded-md h-16 m-3 text-white text-lg"  >
                        Request a Demo
                    </button>
                </div>
            </div>
            <div className='3xl:container 3xl:mx-auto w-full'>

                <div className='bg-gray-900 rounded-t-2xl w-3/4 h-96 mx-auto'>

                </div>
                <div className='bg-gray-900 h-634'>
                    <div className='flex flex-row justify-center'>
                        <div className='p-4 max-w-2xl m-6'>
                            <img src={bigcommercelogo} />
                            <span className='text-blue-600'>powerful ( and profitable ) results</span>
                        </div>
                        <div className='p-4 max-w-2xl m-6'>
                            <span className='text-white text-xl'>
                                We make the math easy. As a certified BigCommerce agency partner, we’ve helped everyone from emerging startups to Fortune 500 companies elevate their eCommerce game, faster — creating revenue-driving shopping experiences in weeks, not months. Learn about our BigCommerce implementation services.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center p-6 pb-36'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingSection