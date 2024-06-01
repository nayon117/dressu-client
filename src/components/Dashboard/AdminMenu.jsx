import { FaUserCog } from "react-icons/fa";
import { MdFlightClass } from "react-icons/md";
import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";


const AdminMenu = () => {
  return (
    <>
    
    <MenuItem
     icon={BsFillHouseAddFill}
      label="Add Product"
      address="/dashboard/add-product"
    />
     <MenuItem icon={MdHomeWork} 
     label="My Product" 
     address="/dashboard/my-product"
      />
    <MenuItem
      icon={FaUserCog}
      label="Manage Users"
      address="/dashboard/manage-users"
    />
    <MenuItem
      icon={MdFlightClass }
      label="Add Blog"
      address="/dashboard/add-blog"
    />
  </>
  );
};
export default AdminMenu;