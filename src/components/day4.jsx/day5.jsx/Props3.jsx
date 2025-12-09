import Table from "../../Table";

export default function Props3(props){
    const {data}=props;
    const{name,color,about}=data
    return (
        <>
        <h1>haiiiii</h1>
          <h1>{props.data.name} </h1>
        <h1>{props.data.about} </h1>
        {
            about.map((data1)=>
                <div> {data1} </div>
                )
        }
        

        </>
    )
}
