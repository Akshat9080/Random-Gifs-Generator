import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  // const[loading,setloading]=useState(false);
  // const[gif,setGif]=useState('');
  const[tag,setTag]=useState('Car');

  // async function fetchData(){
  //   setloading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //    const {data} = await axios.get(url);
  //    const imageSource = data.data.images.downsized_large.url;
  //    setGif(imageSource);
  //    setloading(false)
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);
  const{gif,loading,fetchData}=useGif(tag); //custom hook

function clickHandler(){
  fetchData(tag);
}

function changeHandler(event){
  setTag(event.target.value)
}

  return(
    <div className="bg-blue-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl font-bold underline uppercase">RANDOM {tag} GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450px" alt="gif"/>)
      }

      <input
      type="text"
      onChange={changeHandler}
      value={tag}
      className="text-center text-lg rounded-md py-2 w-9/12"
      />
      
      <button onClick={clickHandler}
      className="bg-yellow-300 w-9/12 mb-4 rounded-md py-2 text-lg">
        Generate
      </button>
  </div>
  );
}
