import { useState } from "react"

export default function Form(){

      const[username,setUsername]=useState('')
      const[submitted,setsumbitted]=useState('');
      
      const handleChange=(event)=>
        
      {
        event.preventDefault();
        const data={
            name:username,

        }
        console.log('name'+data.name);
        setsumbitted(data);
      }
    return(
    <>
    <from>
        <lebal>username</lebal>
        <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} />
        <input type="submit" onClick={event=>handleChange(event)}></input>
    
    {submitted &&(
        <h1> {submitted.name} </h1>
    )

    }

    </from>
    
    </>

    
)
}
