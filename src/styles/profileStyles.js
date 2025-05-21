const profileStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: "2rem",
    width: "100%",
    maxWidth: 450,
    boxShadow: "0 4px 20px rgba(26, 54, 44, 0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    border: "5px solidrgb(39, 69, 58)",
    objectFit: "cover",
    marginBottom: "1.5rem",
  },
  username: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#4B8F77",
    marginBottom: "0.5rem",
  },
  infoList: {
    width: "100%",
    marginTop: "1rem",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "0.85rem",
    color: "#888",
    fontWeight: 600,
    marginBottom: "0.3rem",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  value: {
    fontSize: "1.1rem",
    color: "#333",
    fontWeight: 500,
    wordBreak: "break-word",
  },
};

export default profileStyles;
