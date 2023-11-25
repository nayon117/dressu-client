import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
const TeacherMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Class" address="add-class" />
      <MenuItem icon={MdHomeWork} label="My Class" address="my-class" />
    </>
  );
};

export default TeacherMenu;
