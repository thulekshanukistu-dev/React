export default function Ex1(){

    const li ={
     backgroundColor:"lightblue",
 
    
      
     
    }
    const button1={
      backgroundColor:"#FF5C00"
           
    }
    const ul= {
      
        marginTop :"100px",
        width:"100px",
    }
   const button2={
    backgroundColor:"#FF5C00"
   }
   const hi={
    color:"#FF5C00",
    size:"20px",
   }
    return( 
    <div style={li}> 
        <p>PraRoz</p>
     <ul style={ul} >
        <li ><a>home</a> </li>
        <li><a> about</a></li>
        <li> <a>service</a></li>
        <li><a>disign</a></li>
        <li><a>contact </a></li>
        <button style={button1}>search  </button>
         </ul>

        <p >web disign & <br/> <p style={hi}>Development</p>  <br/> course <br/></p>At its heart, design balances the creative elements of art with the problem-solving nature of science. As designer Charles Eames famously said, "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose". The process<br/>
        <button style={button2}>  join us </button>
      
       
    
    

     
    </div>
    
    
)
}
