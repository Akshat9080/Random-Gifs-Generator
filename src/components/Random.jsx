//import { useEffect, useState } from "react";
import Spinner from "./Spinner";
//import axios from "axios";
import useGif from "../hooks/useGif";


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  
  const{gif,loading,fetchData} = useGif();//custom hook
  // const[loading,setloading]=useState(false);
  // const[gif,setGif]=useState('');
  

  // async function fetchData(){
  //   setloading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //    const {data} = await axios.get(url);
  //    const imageSource = data.data.images.downsized_large.url;
  //    setGif(imageSource);
  //    setloading(false)
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);

function clickHandler(){
  fetchData();
}

  return(
    <div className="bg-green-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl font-bold underline">A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450px" alt="gif"/>)
      }
      
      <button onClick={clickHandler}
      className="bg-yellow-300 w-9/12 mb-4 rounded-md py-2  text-lg">
        Generate
      </button>
  </div>
  );
}
