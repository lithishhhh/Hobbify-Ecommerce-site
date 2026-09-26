import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthBackground from '../components/AuthBackground';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(form.name, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <main className="auth-page">
        <AuthBackground />
        <div className="auth-card">
          <h2>Register</h2>
          {error && <div className="error-box">{error}</div>}
          <form onSubmit={handleSubmit} className="auth-form" autoComplete="off">
            <input type="text" name="registration-name" autoComplete="off" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input type="email" name="registration-email" autoComplete="off" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" name="registration-password" autoComplete="new-password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit" className="primary-btn full-width">Create Account</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
