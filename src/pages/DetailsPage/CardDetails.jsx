import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const CardDetails = () => {
  const [detailInfo, setDetailInfo] = useState({})
    const loadedDetails = useLoaderData()
    
    useEffect(() => {
        if (loadedDetails) {
             setDetailInfo(loadedDetails)
         }
    }, [loadedDetails])
  
    console.log(detailInfo);
    
  return (
    <div>
          <div>
              <DetailsCard detailInfo={detailInfo}></DetailsCard>
       </div>
    </div>
  );
};
export default CardDetails;