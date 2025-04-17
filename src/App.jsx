import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header';
import { Outlet } from 'react-router-dom';
import { ListProvider } from './context/listContext';

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  
const [data,setData] = useState([])
const [search, setSearch] = useState('');
const [searchList, setSearchList] = useState([]);

const fetchData = async() => {
  await fetch(backendUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setData(data.data)
  })
  .catch(err => console.log(err))
}

useEffect(()=>{
  fetchData()
},[])


  return (
    <>
      <div className='w-full p-3 h-fit min-h-screen text-white flex flex-col gap-5 items-center bg-gray-800'>
      <ListProvider value={{data,setData,search,setSearch,searchList,setSearchList}}>
        <Header/>
        <Outlet/>
      </ListProvider>
      </div>
    </>
  )
}

export default App
