// import React, { useState, useContext } from 'react';
// import styles from '../styles/LoginStyles';
// import { UserContext } from '../context/UserContext';

// const LoginScreen = () => {
//   const { setUser } = useContext(UserContext);
//   const [enteredUsername, setEnteredUsername] = useState('');
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleLogin = async () => {
//     if (!enteredUsername || !enteredPassword) {
//       alert('Please fill in all fields');
//       return;
//     }

//     if (!validateEmail(enteredUsername)) {
//       alert('Invalid email format');
//       return;
//     }

//     try {
//       const response = await fetch('https://yourapi.com/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username: enteredUsername,
//           email: enteredUsername,
//           password: enteredPassword,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         const userData = data.user;
//         setUser({
//           _id: userData._id,
//           username: userData.username,
//           email: userData.email,
//           mobile: userData.mobile,
//         });
//         alert('Login successful');
//         // You can redirect here with React Router
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <img src="/assets/top.png" alt="top design" style={styles.topImage} />
//       <img src="/assets/logo.png" alt="logo" style={styles.logo} />

//       <div style={styles.inputWrapper}>
//         <span>👤</span>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={enteredUsername}
//           onChange={(e) => setEnteredUsername(e.target.value)}
//           style={styles.input}
//         />
//       </div>

//       <div style={styles.inputWrapper}>
//         <span>🔒</span>
//         <input
//           type={showPassword ? 'text' : 'password'}
//           placeholder="Password"
//           value={enteredPassword}
//           onChange={(e) => setEnteredPassword(e.target.value)}
//           style={styles.input}
//         />
//         <span
//           onClick={() => setShowPassword(!showPassword)}
//           style={{ cursor: 'pointer', marginLeft: '8px' }}
//         >
//           {showPassword ? '🙈' : '👁️'}
//         </span>
//       </div>

//       <div style={styles.footerText}>
//         <span style={styles.link} onClick={() => alert('Forgot password')}>
//           Forgot password?
//         </span>
//       </div>

//       <button style={styles.button} onClick={handleLogin}>
//         Sign In →
//       </button>

//       <div style={styles.googleBtn} onClick={() => alert('Google login')}>
//         <img src="/assets/googleicon.jpg" alt="Google" style={styles.googleIcon} />
//         <span>Continue with Google</span>
//       </div>

//       <div style={styles.footerText}>
//         Don’t have an account?{' '}
//         <span style={styles.link} onClick={() => alert('Go to signup')}>
//           Create one
//         </span>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;
import { useState, useContext } from 'react';
import styles from '../styles/LoginStyles';
import { UserContext } from '../context/UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    if (!enteredUsername || !enteredPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (!validateEmail(enteredUsername)) {
      alert('Invalid email format');
      return;
    }

    try {
      const response = await fetch('https://yourapi.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: enteredUsername,
          email: enteredUsername,
          password: enteredPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const userData = data.user;
        setUser({
          _id: userData._id,
          username: userData.username,
          email: userData.email,
          mobile: userData.mobile,
        });
        alert('Login successful');
        // TODO: Redirect user after login
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <img src="/assets/top.png" alt="top design" style={styles.topImage} />
      <img src="/assets/logo.png" alt="logo" style={styles.logo} />

      <div style={styles.inputWrapper}>
        <span role="img" aria-label="user">👤</span>
        <input
          type="email"
          placeholder="Enter Email"
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputWrapper}>
        <span role="img" aria-label="lock">🔒</span>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          style={styles.input}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: 'pointer', marginLeft: 8, background: 'none', border: 'none', fontSize: '1.2rem' }}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      </div>

      <div style={styles.footerText}>
        <button
          type="button"
          style={{ ...styles.link, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          onClick={() => alert('Forgot password')}
        >
          Forgot password?
        </button>
      </div>

      <button style={styles.button} onClick={handleLogin}>
        Sign In →
      </button>

      <div
        style={styles.googleBtn}
        onClick={() => alert('Google login')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && alert('Google login')}
        aria-label="Continue with Google"
      >
        <img src="/assets/googleicon.jpg" alt="Google" style={styles.googleIcon} />
        <span>Continue with Google</span>
      </div>

      <div style={styles.footerText}>
        Don’t have an account?{' '}
        <button
          type="button"
          style={{ ...styles.link, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          onClick={() => alert('Go to signup')}
        >
          Create one
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
