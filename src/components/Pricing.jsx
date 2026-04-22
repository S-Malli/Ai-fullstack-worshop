import { CONFIG } from '../constants/config';

export default function Pricing() {
  const enabledPlans = CONFIG.plans.filter(plan => plan.enabled);
  
  return (
    <section className="pricing-section section" id="pricing">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">💰 Pricing Plans</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Success Path</span>
          </h2>
          <p className="section-subtitle">
            Don't let money be the barrier to your success. We've made our 
            world-class training accessible to every student. 
            <strong>Your future is worth it.</strong>
          </p>
        </div>

        <div className={`pricing-grid reveal stagger-1 ${enabledPlans.length === 1 ? 'single-plan' : ''}`}>
          {enabledPlans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            >
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              
              <div className="price-container">
                <span className="price-original">₹{plan.originalPrice}</span>
                {plan.offerPrice === 0 ? (
                  <span className="price-offer price-free">FREE</span>
                ) : (
                  <span className="price-offer">₹{plan.offerPrice}</span>
                )}
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="plan-feature">
                    <span className="plan-feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#register" 
                className={`plan-btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
              >
                Join {plan.name} Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
