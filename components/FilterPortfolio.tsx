import Link from 'next/link';
import React from 'react'

function FilterPortfolio() {
    const filters : string[] = ["Food", "Restaurant", "Business", "Headshots", "Family","Newborn", "Wedding"];
    return (
        <div className='md:max-w-[700px] lg:max-w-[900px] px-4 xl:max-w-[1180px] 2xl:max-w-[1300px] mx-auto md:my-6 lg:my-6 xl:my-8 2xl:my-10'>
            <div className='flex justify-start gap-4'>
                {filters.map((filter, index) => (
                    <Link href={`/portfolio/${filter}`} key={index} className={`text-base sm:text-lg md:text-xl bg-gray-100 px-3 py-1 border border-gray-200 rounded hover:bg-gray-300 hover:border-gray-400`}>
                        {filter}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FilterPortfolio