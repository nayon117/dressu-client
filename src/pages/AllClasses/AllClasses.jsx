import { useEffect, useState } from "react";
import ApprovedCard from "./ApprovedCard";


const AllClasses = () => {
  const [approvedClasses, setApprovedClasses] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch('http://localhost:5000/class-add/approved')
    .then(res=>res.json())
    .then(data=>setApprovedClasses(data))
  }, [])
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter  approved class based on the search query
  const filteredApproved = approvedClasses.filter((approves) =>
    approves.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
   
  return (
    <div className="mt-12">

      <div>
      <input
          type="text"
          placeholder="search here ..."
          className="input input-bordered   block mx-auto
        w-full max-w-xs"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          filteredApproved?.map(approved => <ApprovedCard
            key={approved._id}
            approved={approved}
          ></ApprovedCard>)
        }
     </div>
    </div>
  );
};
export default AllClasses;