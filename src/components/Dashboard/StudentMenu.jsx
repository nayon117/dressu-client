 
import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";


const StudentMenu = () => {
  return (
    <>
    <MenuItem
      icon={BsFingerprint}
      label="My Enroll Class"
      address="/dashboard/my-enroll"
    />
  </>
  );
};
export default StudentMenu;