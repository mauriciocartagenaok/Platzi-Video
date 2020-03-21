import {useState,useEffect} from 'react';

const useInitialState = (API) =>{
    const [videos,setVideos]=useState({
        mylist: [],
        trends: [],
        originals: [],
    });
    //sacar datos de la api Custom Hoock
    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data))
    },[]);

    return videos;
}

export default useInitialState;