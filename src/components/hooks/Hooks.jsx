import Image from '/home/uki-dsa-10/Desktop/react/exercise/src/assests/heart-svgrepo-com (1).svg';
import { useState } from 'react';
export default function Hooks(){
  let clicked=0;
  let[result,setresult]=useState(clicked);

  let handleclicked=()=>{
    console.log(result)
    setresult(result+10)
  }

  let torch=10;
  let[add,addresult]=useState(torch);
  

  let handleclicked1=()=>{
    console.log(result)
    setresult(result-10)

  }


  return(
    <div>

      <img src={Image} style={{width:`${result}px`}}></img>
      <button onClick={handleclicked}>like</button>
      <button onClick={handleclicked1}>dislike</button>
     
    </div>
  )
}



