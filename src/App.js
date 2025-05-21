import React, { useEffect, useContext } from "react";
import Profile from "./components/profile";
import { UserProvider, UserContext } from "./context/UserContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
// import "../styles/profile.css";

// Wrapper to set mock user data
function AppContent() {
  const { setUser } = useContext(UserContext);
  const { isDarkTheme, colors } = useContext(ThemeContext);

  useEffect(() => {
    setUser({
      username: "Fatima Malik",
      email: "Fatima@gmail.com",
      phone: "+92-300-1234567",
      address: "Islamabad, Pakistan",
      bio: "Final year CS student.",
      profilePicture: "https://via.placeholder.com/150",
    });
  }, [setUser]);

  return (
    <div
      className="app-container"
      style={{ background: colors.background, color: colors.text }}
    >
      <Profile />
    </div>
  );
}

function App() {
  return (
      <ThemeProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </ThemeProvider>
  );
}

export default App;
