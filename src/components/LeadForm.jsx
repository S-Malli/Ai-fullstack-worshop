import { useState } from 'react';
import { CONFIG } from '../constants/config';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: 'standard' });
  const [status, setStatus] = useState('idle');
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
    console.log("form", form)
    try {
      if (CONFIG.googleSheetUrl) {
        await fetch(CONFIG.googleSheetUrl, {
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
                We'll confirm your <strong>{form.plan} seat</strong> and send you the{' '}
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
            Build your first project this weekend and take one step closer to your internship. 
            Join hundreds of students already building their future.
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

            <div className="form-group">
              <label className="form-label" htmlFor="form-plan">Select Plan</label>
              <select
                className="form-input"
                id="form-plan"
                name="plan"
                value={form.plan}
                onChange={handleChange}
              >
                {CONFIG.plans.filter(p => p.enabled).map(plan => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name} — {plan.offerPrice === 0 ? 'FREE' : `₹${plan.offerPrice}`}
                  </option>
                ))}
              </select>
            </div>

            {errorMsg && <div className="form-error">{errorMsg}</div>}

            <button
              className="form-submit"
              type="submit"
              id="form-submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : `🔥 Reserve My Seat Now — ${form.plan === 'standard' && CONFIG.plans[0].offerPrice === 0 ? 'FREE' : `₹${CONFIG.plans.find(p => p.id === form.plan)?.offerPrice}`} Only`}
            </button>

            <div className="form-trust">
              <span className="form-trust-item">🔒 Secure</span>
              <span className="form-trust-item">👨‍🏫 Practical Guidance</span>
              <span className="form-trust-item">📅 Weekend Only</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
