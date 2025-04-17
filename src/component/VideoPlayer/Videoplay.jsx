import React, { useRef,useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Videoplay() {
    // const {setSearch,setSearchList} = useList();
    // setSearch("");
    // setSearchList([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const {id} = useParams();
    const vidRef = useRef(null);
    // const [videoSrc, setVideoSrc] = useState(null);

    const handlePausePlay = ()=>{
        const video = vidRef.current;
        if(video.paused){
            video.play();
        }
        else{
            video.pause();
        }
    }



    useEffect(() => {
        const video = vidRef.current;
        video.src = `${backendUrl}/${id}`;
        return () => {
          if (video) {
            video.pause(); // stop playing
            video.removeAttribute('src'); // clear source
            video.load(); // unload the video
          }
        };
      }, [id]);

  return (
    <div>
        <h1 className='text-2xl font-bold m-5 text-center'>{id}</h1>
      <video ref={vidRef} controls className='w-[50vw] h-[50vh] border '>
        <source src={`${backendUrl}/${id}`}/>
      </video>
      <button onClick={handlePausePlay} className='p-3 m-3 border cursor-pointer font-bold'>
        Play/Pause
      </button>
    </div>
  )
}

export default Videoplay
