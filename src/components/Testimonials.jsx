import { useRef } from 'react';

const testimonials = [
  {
    name: 'Ganesh',
    role: 'B.Com Student, Coimbatore',
    text: "எனக்கு coding experience zero தான், இந்த workshopல AI tools use பண்ணி ரொம்ப easyஆ புரிய வைத்தாங்க. Even as a beginner, I built and deployed my first project in just 1 hour!",
    avatar: 'GH',
    gradient: 'linear-gradient(135deg, #3A86FF, #8338EC)',
  },
  {
    name: 'Rahul',
    role: 'BCA 2nd Year, Salem',
    text: "நான் BCA படிச்சேன், theory தான் தெரியும். இந்த workshop attend பண்ணதுக்கப்புறம் என் resume ல ஒரு live project add பண்ணேன். The internship guidance helped me get 3 interview calls within a week!",
    avatar: 'RL',
    gradient: 'linear-gradient(135deg, #8338EC, #FF006E)',
  },
  {
    name: 'Sowmiya',
    role: 'B.E Student, Madurai',
    text: "Best spent time! Coming from a non-tech background, I never imagined I could build a website. Now I have a solid project to show HR and apply for internships with confidence.",
    avatar: 'SM',
    gradient: 'linear-gradient(135deg, #FF006E, #3A86FF)',
  },
  {
    name: 'Sneha',
    role: 'MBA Student, Chennai',
    text: "I wanted to add tech skills to my profile. This workshop gave me a deployed project and a professional GitHub portfolio. Highly recommend to anyone looking for internships!",
    avatar: 'SP',
    gradient: 'linear-gradient(135deg, #8338EC, #3A86FF)',
  },
  {
    name: 'Nandha kumar',
    role: 'B.Sc Math, Trichy',
    text: "நான் B.Sc Maths படிச்சேன், tech skills add பண்ணணும் நினைச்சேன். இந்த workshop exactly அதையே குடுத்தது. ஒரு deployed project + resume booster கிடைச்சிருச்சு. Perfect for students!",
    avatar: 'NK',
    gradient: 'linear-gradient(135deg, #8338EC, #3A86FF)',
  },
  {
    name: 'Fathima',
    role: 'B.E Student, Chennai',
    text: "Instead of boring lectures, we actually built something real. Seeing my site live was incredible! This is the best way to learn and get ready for the industry.",
    avatar: 'FT',
    gradient: 'linear-gradient(135deg, #3A86FF, #22c55e)',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const amount = 364;
    trackRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">💬 Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="section-subtitle">
            Real stories from real students who transformed their careers.
          </p>
        </div>

        <div className="testimonials-track reveal" ref={trackRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} id={`testimonial-${i}`}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
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

        <div className="testimonials-nav">
          <button onClick={() => scroll(-1)} aria-label="Previous testimonial" id="testimonial-prev">
            ←
          </button>
          <button onClick={() => scroll(1)} aria-label="Next testimonial" id="testimonial-next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
