import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(1);
    const fetchJobs = async () => {
        const response = await fetch(url)
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }
    useEffect(() => {
        fetchJobs();
    }, [])
    console.log(jobs)
    if (loading) {
        return (
            <div>
                <p>Loading....</p>
            </div>
        )
    }
    const { company, dates, duties, title } = jobs[value];
    //console.log(jobs)
    return (
        <div className='w-[1700px] px-[450px] '>
            <div className='pb-4'>
                <p className='flex items-center justify-center underline text-2xl font-bold pt-4'>Experience</p>
            </div>
            <div className='border-2 border-green-800 bg-blue-400 w-full h-[400px] p-6 pt-6 rounded-md'>
                <div className='flex flex-row items-center justify-between'>
                    {
                        jobs.map((item,index) => {
                            return (
                                <button  className='bg-green-400 p-2 rounded-md' onClick={()=>setValue(index)}>
                                    {item.company}
                                </button>
                            )
                        })
                    }
                </div>
                <div>
                    <p className='font-bold text-xl'>{title}</p>
                    <p className='font-bold text-md'>{company}</p>
                    <p className='font-bold text-normal'>{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <>
                                <div key={index} className='flex flex-row space-x-4'>
                                    <FaAngleDoubleRight />
                                    <p className='flex flex-row items-center'>{duty}</p>
                                </div>
                            </>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default Tabs