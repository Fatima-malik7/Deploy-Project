// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '2rem',
//     backgroundColor: '#f5f5f5',
//     minHeight: '100vh',
//   },
//   topImage: {
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//     height: '140px',
//     objectFit: 'cover',
//   },
//   logo: {
//     width: '200px',
//     height: 'auto',
//     marginBottom: '1rem',
//   },
//   inputWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     border: '1px solid #ccc',
//     borderRadius: '25px',
//     padding: '0.5rem 1rem',
//     marginTop: '1rem',
//     width: '100%',
//     maxWidth: '400px',
//     backgroundColor: '#fff',
//   },
//   input: {
//     flex: 1,
//     border: 'none',
//     outline: 'none',
//     fontSize: '1rem',
//     marginLeft: '0.5rem',
//     backgroundColor: 'transparent',
//   },
//   button: {
//     marginTop: '2rem',
//     padding: '0.75rem 2rem',
//     border: 'none',
//     borderRadius: '25px',
//     backgroundColor: '#4B8F77',
//     color: 'white',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
//   footerText: {
//     marginTop: '1rem',
//     color: '#555',
//   },
//   link: {
//     color: '#4B8F77',
//     textDecoration: 'underline',
//     cursor: 'pointer',
//   },
//   googleBtn: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0.5rem 1rem',
//     backgroundColor: '#fff',
//     borderRadius: '25px',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     marginTop: '1rem',
//     cursor: 'pointer',
//   },
//   googleIcon: {
//     width: '20px',
//     height: '20px',
//     marginRight: '0.5rem',
//   },
// };

// export default styles;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },

  topImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    zIndex: -1,
  },

  logo: {
    width: '180px',
    height: 'auto',
    marginBottom: '2rem',
  },

  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '25px',
    padding: '0.75rem 1rem',
    marginTop: '1rem',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },

  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    marginLeft: '0.5rem',
    backgroundColor: 'transparent',
    color: '#333',
  },

  button: {
    marginTop: '2rem',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#4B8F77',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

  footerText: {
    marginTop: '1rem',
    color: '#666',
    fontSize: '0.9rem',
  },

  link: {
    color: '#4B8F77',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: '4px',
  },

  googleBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#ffffff',
    borderRadius: '25px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '1rem',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'box-shadow 0.3s ease',
  },

  googleIcon: {
    width: '20px',
    height: '20px',
    marginRight: '0.5rem',
  },
};

export default styles;
