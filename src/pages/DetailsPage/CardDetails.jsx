import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const CardDetails = () => {
    const [details,setDetails] = useState({})
    const loadedDetails = useLoaderData()
    
    useEffect(() => {
        if (loadedDetails) {
             setDetails(loadedDetails)
         }
    }, [loadedDetails])
  
    console.log(details);
    
  return (
    <div>
          <div>
              <DetailsCard details={details}></DetailsCard>
       </div>
    </div>
  );
};
export default CardDetails;