import { FaJediOrder } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaJediOrder}
        label="Order Item"
        address="/dashboard/order-item"
      />
      <MenuItem
        icon={FaCartPlus}
        label="My Cart"
        address="/dashboard/my-cart"
      />
    </>
  );
};
export default UserMenu;
