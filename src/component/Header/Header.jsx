import React, { useEffect, useState } from 'react'
import { useList } from '../../context/listContext'
import { Link } from 'react-router-dom';

function Header() {
    const { data } = useList();
    const {search,setSearch,searchList,setSearchList} = useList();
    useEffect(() => {
        if (search.length > 0) {
            const list = data.filter(item => item.toLowerCase().includes(search.toLowerCase()));
            setSearchList(list);
        }
    }, [search])
    return (
        <div className='relative '>
            <div>
                <h1 className='text-2xl font-bold cursor-pointer'><Link to={'/'}>Online Video Player</Link></h1>
                <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} className='border w-[50vw] h-10 text-lg p-3' />
            </div>
            <div className='absolute w-full bg-gray-900 z-2 my-3 rounded-md'>
                {
                    searchList && searchList.map((item,ind)=>{
                        return <div key={ind} className='p-2 m-1 cursor-pointer'>
                            <Link to={`/${item}`}>
                            <p onClick={()=>{
                                setSearch("")
                                setSearchList([])
                                }}>{item}</p>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Header
