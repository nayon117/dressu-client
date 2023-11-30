import { FaUserCog } from "react-icons/fa";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc"
import { MdFlightClass } from "react-icons/md";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
  return (
    <>
    
    <MenuItem
      icon={VscGitPullRequestGoToChanges }
      label="Teacher Request"
      address="/dashboard/teacher-request"
    />
    <MenuItem
      icon={FaUserCog}
      label="Manage Users"
      address="/dashboard/manage-users"
    />
    <MenuItem
      icon={MdFlightClass }
      label="All Classes"
      address="/dashboard/all-classes-admin"
    />
  </>
  );
};
export default AdminMenu;