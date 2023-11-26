import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
  return (
    <>
    
    <MenuItem
      icon={FaUserCog}
      label="Teacher Request"
      address="/dashboard/teacher-request"
    />
    <MenuItem
      icon={FaUserCog}
      label="Manage Users"
      address="/dashboard/manage-users"
    />
    <MenuItem
      icon={FaUserCog}
      label="All Classes"
      address="/dashboard/all-classes-admin"
    />
  </>
  );
};
export default AdminMenu;