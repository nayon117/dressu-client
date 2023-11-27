import { useEffect, useState } from "react";


const Myclass = () => {
  const [myClasses, setMyClasses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/class-add/requests')
    .then(res=>res.json())
    .then(data=>setMyClasses(data))
  },[])
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Email</th>
            <th>status</th>
             
          </tr>
        </thead>
        <tbody>
          {myClasses.map((classItem, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{classItem.title}</td>
              <td>{classItem.image}</td>
              <td>{classItem.email}</td>
              <td>
                <button>{classItem.status}</button>
                
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Myclass;