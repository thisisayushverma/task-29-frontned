import React,{useCallback} from 'react'
import { useList } from '../../context/listContext'
import { Link, Navigate } from 'react-router-dom';

function Main() {

    const {data} = useList();
    // const {setSearch,setSearchList} = useList();
    // setSearch("");
    // setSearchList([]);
    console.log("main");
    // const handleClick = async(item)=>{
    //     console.log(item);
    //     Navigate(`/${item}`)
    // }

    const showList = useCallback(()=>{
        return (<>
        {
          data && data.map((item, index) => (
            <div key={index} className='border rounded-md cursor-pointer p-3 bg-gray-600 border-white font-bold text-black' >
              <Link to={`/${item}`}>
                {item}</Link>
            </div>
          ))
        }
        </>)
      },[data])


    return (
        <>
            <div className='flex flex-col gap-3'>
                {
                    showList()
                }
            </div>
        </>
    )
}

export default Main
