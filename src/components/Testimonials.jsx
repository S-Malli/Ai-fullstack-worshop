import { useRef } from 'react';
import testimonial1 from '../assets/testimonial1.jpeg';
import testimonial2 from '../assets/testimonial2.jpeg';
import testimonial3 from '../assets/testimonial3.jpeg';
import testimonial4 from '../assets/testimonial4.jpeg';

const testimonials = [
  {
    name: 'Ganesh',
    role: 'B.Com Student, Coimbatore',
    image: testimonial1,
    avatar: 'GH',
    gradient: 'linear-gradient(135deg, #3A86FF, #8338EC)',
  },
  {
    name: 'Rahul',
    role: 'BCA 2nd Year, Salem',
    image: testimonial2,
    avatar: 'RL',
    gradient: 'linear-gradient(135deg, #8338EC, #FF006E)',
  },
  {
    name: 'Sowmiya',
    role: 'B.E Student, Madurai',
    image: testimonial3,
    avatar: 'SM',
    gradient: 'linear-gradient(135deg, #FF006E, #3A86FF)',
  },
  {
    name: 'Sneha',
    role: 'MBA Student, Chennai',
    image: testimonial4,
    avatar: 'SP',
    gradient: 'linear-gradient(135deg, #8338EC, #3A86FF)',
  },
];

export default function Testimonials() {

  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container" style={{ overflow: 'hidden' }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">💬 Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="section-subtitle">
            Real stories from real students who transformed their careers.
          </p>
        </div>

        <div className="testimonials-marquee-container reveal">
          <div className="testimonials-track-running">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-image-wrapper">
                  <img src={t.image} alt={`Testimonial from ${t.name}`} className="testimonial-img" />
                </div>
                <div className="testimonial-author">
                  <div
                    className="testimonial-avatar"
                    style={{ background: t.gradient }}
                  >
                    {t.avatar}
                  </div>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
