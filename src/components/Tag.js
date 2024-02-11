import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGifs from './hooks/useGifs';


 const Tag = () => {
    
    const[tag,setTag]=useState('car');
    const{gif,fetchData,loading}=useGifs(tag);


    function clickhandler(){
      fetchData();

    }
    function changeHandler(event){
      setTag(event.target.value);
    }
    
   
  return (
    <div className='w-1/2 gap-y-5 flex flex-col items-center mx-auto mt-[25px] rounded-lg border border-black bg-blue-500'>
        <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
       {
        loading?(<Spinner/>):(<img src={gif} width="450"/>)
       } 
       <input type='text' className='w-10/12 text-lg  py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler}/>
        <button className='w-10/12 bg-green-200 text-lg py-1 mb-2 rounded-lg ' onClick={clickhandler}>Generate</button>
    </div>
  )
}
export default Tag;