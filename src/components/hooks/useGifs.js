import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';




 const useGifs = (tag) => {
    const[loading,setLoading]=useState(false);
    const[gif,setGif]=useState('car');
   
    async function fetchData(){
      //const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
      const API_KEY="GcY2gWD2J8TsHCBOZooBUDRkJxwxs0YI";
      const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      //const randmemeSearchUrl = `https://api.giphy.com/v1/gifs/random?api_key=GcY2gWD2J8TsHCBOZooBUDRkJxwxs0YI&tag=${tag}`;
        setLoading(true);
        const {data}=await axios.get(tag?`${Url}&tag=${tag}`:Url);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        
        setLoading(false);

    }
    
    
    useEffect( ()=>{
      fetchData();
    },[])

    return {loading,gif,fetchData}

}
export default useGifs;
