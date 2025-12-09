
import img1 from'../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3.jpg'
import img4 from '../assests/4.jpg'
import img5 from '../assests/5.jpg'
import img6 from '../assests/6.jpg'
import img7 from '../assests/7.jpg'
import img8 from '../assests/8.jpg'
import img9 from '../assests/9.jpg'
import img10 from '../assests/10.jpg'
import img11 from '../assests/11.jpg'
import img12 from '../assests/12.jpg'
import img13 from '../assests/13.jpg'
import img14 from '../assests/14.jpg'
import img15 from '../assests/15.jpg'
import img16 from '../assests/16.jpg'
import img17 from '../assests/17.jpg'
import img18 from '../assests/18.jpg'
import { useState } from "react";

<assets />

export default function Stu() {
  const [fontSize, setFontSize] = useState();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
      { fisrtname: "james",  lastname: "kim", course: "IT", contry : "korea ", photo: "/assets/alice.jpg" },
  {firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  {firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  {firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  {firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  {firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
  { firstname: "james",  lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" }, 
  { firstname: "james" , lastname: "kim", course: "IT", country : "korea ", photo: "/assets/alice.jpg" },
   
  ];

  return (
        <div className="student-list">
      {students.map((student, index) => (
        <div
          key={index}
          className="student-card"
          style={{ fontSize }}
          onClick={() => setSelectedStudent(student.firstname)}
        >
          <img src={student.photo} alt={student.firstname} width={100} />
          <h3>{student.firstname} {student.lastname}</h3>
          <p>Course: {student.course}</p>
          <p>Country: {student.country}</p>
        </div>
      ))}

      {selectedStudent && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Selected Student: {selectedStudent}
        </p>
      )}
    </div>
  
  );
}

