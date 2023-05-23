import * as React from "react"
import { HeadFC, PageProps } from "gatsby";
import NavBar from "../components/navbar";
import LandingSection from "../components/landingsection";
const BigCommercePage: React.FC<PageProps> = () => {
    return (
        <>
            <NavBar/>
            <LandingSection/>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>

            <div className="py-8 px-8 max-w-sm mx-auto my-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                            Product Engineer
                        </p>
                    </div>
                    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                </div>
            </div>
        </>
    )
}

export default BigCommercePage
export const Head: HeadFC = () => <title> BigCommerce</title>