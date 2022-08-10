import "./sidebar.css";
import React from "react";
import SidebarChat from "./SidebarChat/SidebarChat";
import Avatar from "@mui/material/Avatar";
import { Chat, DonutLarge, SearchOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          alt="User Profile"
          src="https://media-exp1.licdn.com/dms/image/C5603AQE2QL2Us-bxkA/profile-displayphoto-shrink_400_400/0/1614710959441?e=1665619200&v=beta&t=AxEuSdCZT3o4hLpO3vSQmoAkJJ0fm1ZUkFOVarhgeH4"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge style={{ fontSize: "24px", color: "#aebac1" }} />
          </IconButton>
          <IconButton>
            <Chat style={{ fontSize: "24px", color: "#aebac1" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ fontSize: "24x", color: "#aebac1" }} />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search or start a new chat"
          />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
