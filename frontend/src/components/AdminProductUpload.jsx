import { useEffect, useState } from 'react';
import { getHobbies } from '../services/hobbyService';
import { createProduct } from '../services/productService';

const initialForm = {
  name: '',
  description: '',
  price: '',
  tag: '',
  image: '',
  hobby: '',
  stock: '1',
};

const AdminProductUpload = ({ token }) => {
  const [form, setForm] = useState(initialForm);
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    getHobbies()
      .then(setHobbies)
      .catch((fetchError) => {
        console.error('Failed to fetch hobbies for product upload', fetchError);
        setError('Could not load hobbies. Please refresh and try again.');
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await createProduct({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }, token);
      setForm(initialForm);
      setSuccess('Product added successfully.');
    } catch (submitError) {
      console.error('Failed to add product', submitError);
      setError(submitError.response?.data?.message || 'Could not add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="account-section admin-product-section">
      <div className="admin-product-header">
        <h3>Welcome to Hobbify, Admin!</h3>
        <button
          className="primary-btn admin-product-toggle"
          type="button"
          aria-expanded={isFormOpen}
          aria-controls="admin-product-form"
          onClick={() => setIsFormOpen((open) => !open)}
        >
          Add Product
        </button>
      </div>
      {isFormOpen && <form id="admin-product-form" className="auth-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          aria-label="Product name"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          aria-label="Product description"
          rows="3"
        />
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          aria-label="Price"
          required
        />
        <input
          name="image"
          type="url"
          value={form.image}
          onChange={handleChange}
          placeholder="Product image URL"
          aria-label="Product image URL"
          required
        />
        <select name="hobby" value={form.hobby} onChange={handleChange} aria-label="Hobby" required>
          <option value="">Select hobby</option>
          {hobbies.map((hobby) => (
            <option key={hobby._id} value={hobby._id}>{hobby.name}</option>
          ))}
        </select>
        <input
          name="tag"
          value={form.tag}
          onChange={handleChange}
          placeholder="Tag (optional)"
          aria-label="Product tag"
        />
        <input
          name="stock"
          type="number"
          min="0"
          step="1"
          value={form.stock}
          onChange={handleChange}
          placeholder="Stock"
          aria-label="Stock"
          required
        />
        {error && <div className="error-box" role="alert">{error}</div>}
        {success && <div className="success-box" role="status">{success}</div>}
        <button className="primary-btn full-width" type="submit" disabled={loading}>
          {loading ? 'Adding product...' : 'Add Product'}
        </button>
      </form>}
    </section>
  );
};

export default AdminProductUpload;
