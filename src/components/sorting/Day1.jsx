import { useState } from "react";
export default function SortandFilter(){
    const [sorted,setSorted]= useState(
    [
        { id: 1,name:"varshini",age:23},
        { id: 2,name:"mukilan",age:18},
        { id: 3,name:"momith",age:12},
        { id: 4,name:"dilu",age:24},
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
return(
<>
    {
    sorted.map((item)=>
    (
    <div>
        <span>ID : {item.id} </span>
        <span>Name :{item.name} </span>
        <span>Age: {item.age} </span>
        <hr />
    </div>
    ))}
    <button onClick={idSortingAs}>AS</button>
    <button onClick={idSortingDs}>DS</button>
    <button onClick={ageSortingAs}>AS</button>
    <button onClick={ageSortingDs}>DS</button>
</>
    );
}







