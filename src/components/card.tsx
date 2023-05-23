import * as React from 'react'

const Card: React.FC = () => {
    return (
        <div className="flex flex-col max-w-sm m-2 rounded-xl border border-black p-2">
            <div className="m-2">
                <span className="text-blue-100 font-bold">B2B</span>
            </div>
            <div className="m-2">
                <span className="text-blue-300">Translate your business-to-business processes into a winning digital experience.</span>
            </div>
        </div>
    )
}

export default Card