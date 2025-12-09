// import { useEffect, useState } from 'react';

// export default function Button(){
//     let clicked=0;
//     let [count,setresult]=useState(clicked);


    
//   let handleclicked=()=>{
//     console.log(count)
//     setresult(count+1)
//   }


//   let fun1=()=>{

//     if(count>=5)

//       {
//         alert('count more than 5')
//       }
//   }
//   useEffect(fun1,[count])
  
//   return(
//     <div>
//       <button onClick={handleclicked}>hdth</button>
//         <p>{count} </p>
//     </div>
//   )



// }

import { useEffect, useState } from "react";

import image1 from "/home/uki-dsa-10/Desktop/react/exercise/src/assests/heart-svgrepo-com (1).svg";
import image2 from "/home/uki-dsa-10/Desktop/react/exercise/src/assests/rain-svgrepo-com.svg";
import image3 from "/home/uki-dsa-10/Desktop/react/exercise/src/assests/summer-palm-tree-svgrepo-com.svg";
import image4 from "/home/uki-dsa-10/Desktop/react/exercise/src/assests/sun-svgrepo-com.svg";
export default function ImageClick() {


  let [count,setCount1,] = useState(0);
  let [count1,setCount2,]=useState(0);
  let [count2,setCount3,]=useState(0);
  let [Count3,setCount4,]=useState(0);

 
  let handleClicked = () => {
    setCount1(count+ 1);
  };

    let handleClicked1= () => {
    setCount2(count1+1);
  };

    let handleClicked2= () => {
    setCount3(count2+1);
  };
  let handleClicked3 = () => {
    setCount4(Count3+1);
  };

 
 
 
 
  useEffect(() => {
    if (count>=4) {
      alert("Count is more than 4");
    }
  },[count])

  useState(()=>{
    if (count>=3){
        alert("count is ore then 3")
    }
  })
  
  useState(()=>{
    if (count>=2){
        alert("count is ore then 2")
    }
  })

  useState(()=>{
    if (count>=5){
        alert("count is ore then 5")
    }
  })
  return(
    <>
    <button onClick={handleClicked}>A</button>
    <button onClick={handleClicked1}>B</button>
    <button onClick={handleClicked2}>C</button>
    <button onClick={handleClicked3}>D</button>
    </>
  )
}


import { useState } from "react";
export default function ImageClick()
{
let [count,setCount1,] = useState(0);
  let [count1,setCount2,]=useState(0);
   let [count2,setCount3,]=useState(0);
  let [Count3,setCount4,]=useState(0);
       let handleClicked=()=> {
    setCount1(count+ 1);
  };

    let handleClicked1=()=> {
    setCount2(count1+1);
  };

    let handleClicked2=()=> {
    setCount3(count2+1);
  };
  let handleClicked3=()=>
    {
    setCount4(Count3+1);
  };

    return(
        <>
        <button onClick={handleClicked}>A</button>
     <button onClick={handleClicked1}>B</button>
     <button onClick={handleClicked2}>C</button>
     <button onClick={handleClicked3}>D</button></>

    );
}