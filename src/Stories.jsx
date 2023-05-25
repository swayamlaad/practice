import React from 'react';
import { useEffect } from 'react';

  const Stories =()=> {

    let isLoading = true;
    let API = "https://dummyjson.com/products";


    const fetchApiData = async(url) => {

        try {
            const res =  await fetch(url);
            const data = await res.json();
            console.log(data)
             
            
        } catch (error) {
           console.log(error) 
        }
    }




    useEffect(() => {  
        fetchApiData(API)
    },[]);

    if (isLoading) {
        return <>
            <h1>Loading......</h1>
        </>
    }
  return (
    <div>Stories</div>
  )
}


export default  Stories;