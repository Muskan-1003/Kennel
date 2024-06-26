import React, { useState } from "react";
import { FaUser, FaHouseUser, FaGithub, FaPlus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { setUserInfo } from "../../../../redux/reducers/rootSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: "Profile", icon: <FaHouseUser className="h-5 w-5 mr-2" />, path: "/user/accountsettings" },
    { text: "Add Post", icon: <FaPlus className="h-5 w-5 mr-2" />, path: "/add-post" },
    { text: "Team", icon: <AiOutlineTeam className="h-5 w-5 mr-2" />, path: "/team" },
    { text: "Github", icon: <FaGithub className="h-5 w-5 mr-2" />, path: "https://github.com/Muskan-1003/Kennel" }, // External link
    { text: "Contact Us", icon: <BiSupport className="h-5 w-5 mr-2" />, path: "/contact" },
    { text: "Logout", icon: <IoMdLogOut className="h-5 w-5 mr-2" />, path: "/logout" },
  ];

  const handleMenuItemClick = (path) => {
    if(path === "/logout"){
      localStorage.removeItem("token");
      dispatch(setUserInfo({}));
      window.location.reload();
      toast.success('Logged Out');
    }
    else if (path.startsWith("http")) {
      window.location.href = path; // Redirect to external link
    } else {
      window.location.pathname = path; // Update window location path
    }
    setIsOpen(false); // Close dropdown
  };

  const menuItemsJSX = menuItems.map((item, index) => (
    <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center" onClick={() => handleMenuItemClick(item.path)}>
      {item.icon} {item.text}
     
    </li>
  ));

  return (
    <div className="relative z-10">
      <div
        className="flex items-center gap-2 border border-gray-300 rounded-full py-3 px-4 cursor-pointer bg-[var(--primary-bg)]/30"
        onClick={toggleDropdown}
      >
        {isOpen ? <MdCancel className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />}
        <FaUser className="h-6 w-6 text-gray-300 border border-gray-300 rounded-full" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#3A6944]/50 border border-black select-none rounded shadow-lg">
          <div className="absolute top-0 right-4 w-0 h-0 border-4 border-solid border-gray-300 border-t-0 border-r-0"></div>
          <ul>
            {menuItemsJSX}
            
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
