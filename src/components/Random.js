import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGifs from './hooks/useGifs';
import Tag from './Tag';


 const Random = () => {
  const{gif,fetchData,loading}=useGifs();
    
    function clickhandler(){
      fetchData();

    }
  

  return (
    <div className='w-1/2  gap-y-5 flex flex-col items-center mx-auto mt-[15px] rounded-lg border border-black bg-green-500'>
        <h1 className='text-2xl underline uppercase font-bold'> A Random Gif</h1>
       {
        loading?(<Spinner/>):(<img src={gif} width={450}/>)
       } 
        <button className='w-10/12 bg-green-200 text-lg py-1 rounded-lg mb-2' onClick={clickhandler}>Generate</button>
    </div>
  )
}
export default Random;