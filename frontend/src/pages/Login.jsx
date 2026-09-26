import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthBackground from '../components/AuthBackground';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <main className="auth-page">
        <AuthBackground />
        <div className="auth-card">
          <h2>Login</h2>
          {error && <div className="error-box">{error}</div>}
          <form onSubmit={handleSubmit} className="auth-form" autoComplete="on">
            <input type="email" name="username" autoComplete="username" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" name="password" autoComplete="current-password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit" className="primary-btn full-width">Login</button>
          </form>
          <p>
            Need an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
