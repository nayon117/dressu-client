import { useEffect, useState } from "react";
import ApprovedCard from "./ApprovedCard";


const AllClasses = () => {
  const [approvedClasses,setApprovedClasses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/class-add/approved')
    .then(res=>res.json())
    .then(data=>setApprovedClasses(data))
  }, [])
   
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          approvedClasses?.map(approved => <ApprovedCard
            key={approved._id}
            approved={approved}
          ></ApprovedCard>)
        }
     </div>
    </div>
  );
};
export default AllClasses;