import { useState } from 'react';
import { CONFIG } from '../constants/config';

/*
 * Google Sheets Integration:
 * 1. Create a Google Sheet with columns: Name, Email, Phone, Timestamp
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code:
 *
 *    function doPost(e) {
 *      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *      const data = JSON.parse(e.postData.contents);
 *      sheet.appendRow([data.name, data.email, data.phone, new Date()]);
 *      return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
 *        .setMimeType(ContentService.MimeType.JSON);
 *    }
 *
 * 4. Deploy > New Deployment > Web App > Anyone can access
 * 5. Copy the URL and paste below
 */
const GOOGLE_SHEET_URL = CONFIG.googleSheetUrl;

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name';
    if (!form.email.trim() || !form.email.includes('@')) return 'Please enter a valid email';
    if (!form.phone.trim() || form.phone.length < 10) return 'Please enter a valid phone number';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg('');
    setStatus('loading');

    try {
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <section className="form-section section" id="register">
        <div className="container">
          <div className="form-wrapper reveal-scale">
            <div className="form-success">
              <span className="form-success-icon">🎉</span>
              <h3>Thanks for Registering!</h3>
              <p className="form-success-main">
                We'll confirm your <strong>seat</strong> and send you the{' '}
                <strong>payment link</strong> shortly.
              </p>
              <div className="form-success-info">
                <div className="form-success-badge">
                  <span>⏰</span>
                  <span>Our team will <strong>reach you within 30 minutes</strong></span>
                </div>
                <div className="form-success-badge">
                  <span>📅</span>
                  <span>Live classes on <strong>Weekends</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section section" id="register">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">📝 Register Now</span>
          <h2 className="section-title">
            Secure Your <span className="gradient-text">Spot</span>
          </h2>
          <p className="section-subtitle">
            Only <strong>11 seats left!</strong> Fill in your details and join the next weekend batch.
          </p>
        </div>

        <div className="form-wrapper reveal-scale">
          <div className="form-glow"></div>
          <form className="lead-form" onSubmit={handleSubmit} id="lead-form">
            <div className="form-group">
              <label className="form-label" htmlFor="form-name">Full Name</label>
              <input
                className="form-input"
                type="text"
                id="form-name"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="form-email">Email Address</label>
              <input
                className="form-input"
                type="email"
                id="form-email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="form-phone">Phone Number</label>
              <input
                className="form-input"
                type="tel"
                id="form-phone"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            {errorMsg && <div className="form-error">{errorMsg}</div>}

            <button
              className="form-submit"
              type="submit"
              id="form-submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : `🚀 Register Now — ₹${CONFIG.workshopPrice} Only`}
            </button>

            <div className="form-trust">
              <span className="form-trust-item">🔒 Secure</span>
              <span className="form-trust-item">💰 ₹{CONFIG.workshopPrice} Refund Guarantee</span>
              <span className="form-trust-item">📅 Weekend Only</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

