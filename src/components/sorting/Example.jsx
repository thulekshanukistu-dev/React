import { useState } from "react";
export default function sortedFiler(){
    const [short,setSorted]=useState(
        [
            {id:1,name:"arun",marks:85,department:computer},
            {id:2,name:"meena",marks:92,department:electronic},
            {id:3,name:"suresh",marks:78,department:mechanical},
            {id:4,name:"divya",marks:88,department:civil},
            {id:5,name:"kishore",marks:95,department:computer},
            {id:6,name:"priya",marks:81,department:electronic},
            {id:7,name:"nirmal",marks:89,department:civil},
        ]
    )   
     const idSortingAs = ()=> {
        const sorting = [...sorted].sort((a,b)=>a.id - b.id);
        setSorted(sorting)
    }
    const idSortingDs = ()=> {
        const sorting = [...sorted].sort((a,b)=>b.id - a.id);
        setSorted(sorting)
    }
    const ageSortingAs =()=> {
        const sorting = [...sorted].sort((a,b)=>a.age - b.age);
        setSorted(sorting)
    }
    const ageSortingDs =()=> {
        const sorting = [...sorted].sort((a,b)=>b.age - a.age);
        setSorted(sorting)
    }
}
return(
<>
    {
    sorted.map((item)=>
    (
    <div>
        <span>ID : {item.id} </span>
        <span>Name :{item.name} </span>
        <span>marks: {item.marks} </span>
        <span>department : {item.department} </span>
        <hr />
    </div>
    ))}
    <button onClick={idSortingAs}>AS</button>
    <button onClick={idSortingDs}>DS</button>
    <button onClick={ageSortingAs}>AS</button>
    <button onClick={ageSortingDs}>DS</button>
</>
    );
