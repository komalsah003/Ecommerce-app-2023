import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action "
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action "
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/user/wishlist"
            className="list-group-item list-group-item-action"
          >
            Wishlist
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;