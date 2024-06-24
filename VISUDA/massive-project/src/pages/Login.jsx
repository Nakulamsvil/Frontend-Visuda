import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Login.css'; // Pastikan file CSS diimpor dengan benar

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Mock login logic
    console.log('Logging in...');

    // Replace with actual login logic, then redirect if successful
    // For demonstration purposes, redirecting to localhost:4000/admin
    const isLoggedIn = true; // Replace with actual check
    if (isLoggedIn) {
      window.location.href = 'http://localhost:3000/trash'; // Change URL as needed
    } else {
      alert('Login failed!'); // Handle login failure
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <h2>Log In</h2>
          <p>&quot;Membangun komunitas yang lebih baik melalui layanan publik yang berkualitas.&quot;</p>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Log In</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
