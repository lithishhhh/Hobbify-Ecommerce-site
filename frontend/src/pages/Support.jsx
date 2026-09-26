import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { submitUserQuery } from '../services/userQueryService';

const Support = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);
    setSubmitted(false);
    setError('');

    try {
      await submitUserQuery({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      });
      form.reset();
      setSubmitted(true);
    } catch (submitError) {
      console.error('Failed to submit support query', submitError);
      setError(submitError.response?.data?.message || 'Could not send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <main className="content-page support-page">
        <div className="inner-page-header">
          <h2>Support</h2>
        </div>
        <p className="support-intro">
          Need help with an order, a product, or your account? Our team is available to assist with guidance,
          product questions and shopping support.
        </p>

        <section className="support-card">
          <div className="section-label">GET IN TOUCH</div>
          <h3>How can we help?</h3>
          <p>Send us a message and our support team will get back to you shortly.</p>
          <form className="support-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Subject
              <input type="text" name="subject" placeholder="How can we help?" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell us what you need help with..." required />
            </label>
            <button className="primary-btn" type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'} {!submitting && <span>→</span>}
            </button>
            {error && <p className="payment-error" role="alert">{error}</p>}
            {submitted && <p className="support-success" role="status">Thanks! Your message has been received.</p>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
