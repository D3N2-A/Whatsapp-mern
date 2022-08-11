import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import React from "react";
import "./chat.css";
const Chat = ({ messages }) => {
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
      <div className="chat__body">
        {messages.map((message) => {
          return (
            <p
              className={`chat__message ${
                message.received && "chat__reciever"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon style={{ fontSize: "24px", color: "#aebac1" }} />
        </IconButton>
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit" className="sb">
            <IconButton>
              <SendIcon style={{ fontSize: "24px", color: "#aebac1" }} />
            </IconButton>
          </button>
          <IconButton>
            <MicIcon style={{ fontSize: "24px", color: "#aebac1" }} />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;
