import React, { useState } from "react";

export default function searchFilterExample(){
    const data=[
        {id:1,name:"apple"},
        {id:2,name:"banana"},
         {id:3,name:"carrot"},
          {id:4,name:"Mango"},
    ];
    const [searchTerm,setsearchTrem]=useState("");
    const filteredData =data.filter((item)=>
    item.name.toLowerCase().includes(searchTerm.toLowerCase)
);
   
}
return(
 <div>
    <h2>search filter example</h2>
    <input 
    type="text"
    placeholder="search by name "
    value={searchTerm}
    onChange={(e)=>setsearchTrem(e.target.value)}></input>

    <ul>
        {filteredData.map((item) =>)}
    </ul>




 </div>
)