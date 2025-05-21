import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import profileStyles from "../styles/profileStyles";
import psychoPic from "../assets/pp.jpg"; // Make sure the path is correct

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div style={profileStyles.container}>
      <div style={profileStyles.profileCard}>
        <img
          style={profileStyles.profileImage}
          src={psychoPic}
          alt="Profile"
        />

        <h2 style={profileStyles.username}>{user?.username || "No Username"}</h2>

        <div style={profileStyles.infoList}>
          <div style={profileStyles.infoItem}>
            <strong>Email:</strong> {user?.email || "N/A"}
          </div>
          <div style={profileStyles.infoItem}>
            <strong>Phone:</strong> {user?.phone || "N/A"}
          </div>
          <div style={profileStyles.infoItem}>
            <strong>Address:</strong> {user?.address || "N/A"}
          </div>
          <div style={profileStyles.infoItem}>
            <strong>Bio:</strong> {user?.bio || "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
