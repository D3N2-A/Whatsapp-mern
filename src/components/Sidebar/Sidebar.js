import "./sidebar.css";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { Chat, DonutLarge } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          alt="User Profile"
          src="https://media-exp1.licdn.com/dms/image/C5603AQE2QL2Us-bxkA/profile-displayphoto-shrink_400_400/0/1614710959441?e=1665619200&v=beta&t=AxEuSdCZT3o4hLpO3vSQmoAkJJ0fm1ZUkFOVarhgeH4"
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
