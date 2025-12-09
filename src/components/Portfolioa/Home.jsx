// import React from "react";
// import img1 from '../../assests/wood.jpg'

// export default function Home(){



// return(
//     <>
//       <div className="container d-flex m-5">
//       <div className="A"><a href="#">Home</a></div>
//       <div className="B"><a href="#">About</a></div>
//       <div className="C"><a href="#">contact</a></div>
//       </div>

//       <div>
//         <p>Hi i'm </p><br></br>
//         <p3>Thulekshan</p3><br></br>
//         <p3>a <b>fullstack developer</b></p3>
//         <p>Thulekshan is a prossionte student exploring the world of full-stack web Development.with a deep curiosity for <br></br>technology,he enjoy building interactive websites and applications while constantly experimenting with new tools,<br></br>frameworks ,and best practices to sharpen his skills </p>
//         <button >View</button>

// <img src={img1}></img>

//       </div>
//       <div>
//         style={{
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh"
//       }}
//       </div>
      
//     </>
// )
// }

import React from "react";
import img1 from '../../assets/wood.jpg'; // fixed typo

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", // made taller so text fits better
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <>
      <div className="container d-flex m-5">
        <div className="A"><a href="#">Home</a></div>
        <div className="B"><a href="#">About</a></div>
        <div className="C"><a href="#">Contact</a></div>
      </div>

      <div style={backgroundStyle}>
        <p>Hi, I'm</p>
        <h1>Thulekshan</h1>
        <h3>A <b>Fullstack Developer</b></h3>
        <p>
          Thulekshan is a passionate student exploring the world of full-stack web development.
          With a deep curiosity for technology, he enjoys building interactive websites and applications
          while constantly experimenting with new tools, frameworks, and best practices to sharpen his skills.
        </p>
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>View</button>
      </div>
    </>
  );
}
