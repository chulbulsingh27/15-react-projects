import React from 'react'

export const Category = ({ categories, filterItems }) => {
    return (
        <div className='flex flex-row items-center justify-center '>
            <div className='space-x-16'>
                {/* <button className = "" onClick={() => filterItems('all')}>all</button>
                <button onClick={() => filterItems('breakfast')}>breakfast</button> */}
                {categories.map((category, index) => {
                    return (
                        <button type='button' key={index} onClick={() => filterItems(category)} className="">{category}
                        </button>
                    );

                })}
            </div>

        </div>
    )
}
