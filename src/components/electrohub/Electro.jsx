import React from "react";
import img1 from '../../assests/images (2).jpeg'
// import img1 from "/assests/images (2).jpeg"

// import img2 from "../../assests/headphones"
// import img3 from "../../assests/laptop"


export default function Electro(){
    const data=[
        {name:"smartphone X",about:" generletestation smartphones with ai camera and stunning display ",amount:"$999"},
        {name:"laptop pro",about:"powerful and lightweight laptop for professionls on the go",amount:"$1499"},
        {name:"headphones Z",about:"immersive sound quality with noise cancelling technology",amount:"$199"},

 ]
 return(
    <>
    <div className="container">
    <div>Electrohub</div>
    <div className="A"><a href="#">Home</a></div>
    <div className="B"><a href="#">products</a> </div>
    <div className="c"><a href="#">categories</a> </div>
    <div className="D"><a href="#">About</a></div>
    <div className="e"><a href="#">categories</a> </div>
    <div className="f"><a href="#">testimonials</a> </div>
    <div className="g"><a href="#">contact</a>  </div>
    <button >shop now</button>
</div>
<div>
    <p>Discover the future of tech </p>
    <p3>Expolre our curated selection of the letest and greatest electronic</p3>
    <p3>gadgets,from smartphones to smart home devices</p3><br></br>
    <button>Expolre products</button>
</div>

    </>
    


 )
}



