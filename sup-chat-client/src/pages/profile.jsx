import React, { useState } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

export const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleUsernameClick = () => {
    setIsEditing("username");
  };

  const handleEmailClick = () => {
    setIsEditing("email");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="profile"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "300px",
      }}
    >
      <Avatar
        alt={username}
        src={user.profilePicture}
        style={{ height: "100px", width: "100px" }}
      />
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary="Username"
          secondary={
            isEditing === "username" ? (
              <TextField
                defaultValue={username}
                onChange={handleUsernameChange}
                onBlur={() => setIsEditing(false)}
                autoFocus
              />
            ) : (
              <Typography onClick={handleUsernameClick}>{username}</Typography>
            )
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary="Email"
          secondary={
            isEditing === "email" ? (
              <TextField
                defaultValue={email}
                onChange={handleEmailChange}
                onBlur={() => setIsEditing(false)}
                autoFocus
              />
            ) : (
              <Typography onClick={handleEmailClick}>{email}</Typography>
            )
          }
        />
      </ListItem>
    </div>
  );
};
