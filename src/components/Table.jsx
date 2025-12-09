export default function Table(){
    const table =[
        {ID:'1',name:'maya',age:'21',course:'react', grade : 'A', },
        {ID:'2',name:'arun ',age:'22', course: 'javascript',grade:'B',},
        {ID:'3',name:'meena',age:'20',course:'html & css',grade :'A',},
        {ID:'4',name:'ravi',age:'23', course : 'Node.js', grade :'B+',},
        {ID:'5',name:'priya',age:'21 ',course:'python', grade : 'A-',},
        {ID:'6',name:'karthik',age:'22',course:'java', grade : 'B',},
        {ID:'7',name:'anaya',age:'20',course:'css & bootsrap', grade : 'A',}
        

    ]
   
    return(
        <>
        <table border={1} style={{background:'pink ',margin:'150px',height:"800px",width:"1000px",textAlign:"center",textEmphasisColor:"red",}}>
             <tr>
                <td> {table[0].ID} </td>
                <td> {table[0].name} </td>
                <td> {table[0].age} </td>
                <td> {table[0].course} </td>
                <td> {table[0].grade} </td>
            </tr>

              <tr style={{font:'black'}}>
                <td> {table[1].ID} </td>
                <td> {table[1].name} </td>
                <td> {table[1].age} </td>
                <td> {table[1].course} </td>
                <td  > {table[1].grade} </td>
            </tr>
               
                  <tr>
                <td> {table[2].ID} </td>
                <td> {table[2].name} </td>
                <td> {table[2].age} </td>
                <td> {table[2].course} </td>
                <td> {table[2].grade} </td>
            </tr>


             <tr>
                <td> {table[3].ID} </td>
                <td> {table[3].name} </td>
                <td> {table[3].age} </td>
                <td> {table[3].course} </td>
                <td> {table[3].grade} </td>
            </tr>

                 <tr>
                <td> {table[4].ID} </td>
                <td> {table[4].name} </td>
                <td> {table[4].age} </td>
                <td> {table[4].course} </td>
                <td> {table[4].grade} </td>
            </tr>


                 <tr>
                <td> {table[5].ID} </td>
                <td> {table[5].name} </td>
                <td> {table[5].age} </td>
                <td> {table[5].course} </td>
                <td> {table[5].grade} </td>
            </tr>

                 <tr>
                <td> {table[6].ID} </td>
                <td> {table[6].name} </td>
                <td> {table[6].age} </td>
                <td> {table[6].course} </td>
                <td> {table[6].grade} </td>
            </tr>
                
    




  










        </table>
        
        
        
        
        
        
        
        
        
        
        </>
    )
}