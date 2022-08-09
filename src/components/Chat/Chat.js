import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined style={{ color: "#aebac1" }} />
          </IconButton>
          <IconButton>
            <AttachFile style={{ color: "#aebac1" }} />
          </IconButton>
          <IconButton>
            <MoreVert style={{ color: "#aebac1" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Chat;
