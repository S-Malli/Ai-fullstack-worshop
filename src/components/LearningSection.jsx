import { CONFIG } from '../constants/config';

export default function LearningSection() {
  const sessions = [
    {
      number: '01',
      color: '#3A86FF',
      title: 'What is AI in Development?',
      tag: 'Hook',
      tagColor: 'tag-hook',
      points: [
        'Introduction to AI-powered development',
        'LIVE Demo — Watch a website get built in minutes',
        'Why AI is the future of web development',
      ],
      emoji: '🤖',
    },
    {
      number: '02',
      color: '#8338EC',
      title: 'Build with AI Tools',
      tag: 'Hands-On',
      tagColor: 'tag-handson',
      points: [
        'Use ChatGPT & code generators to build UI',
        'Generate backend logic with AI assistance',
        'Build a real project: Portfolio / Landing Page',
      ],
      emoji: '⚡',
    },
    {
      number: '03',
      color: '#FF006E',
      title: 'Fullstack Flow',
      tag: 'Fullstack',
      tagColor: 'tag-fullstack',
      points: [
        'Frontend basics with React',
        'Backend API with Node.js',
        'Connect frontend + backend together',
      ],
      emoji: '🔗',
    },
    {
      number: '04',
      color: '#22c55e',
      title: 'Deploy Your Site LIVE',
      tag: 'WOW Moment',
      tagColor: 'tag-deploy',
      points: [
        'Push code to GitHub',
        'Deploy to the internet for free',
        'Get your own live website link! 🎉',
      ],
      emoji: '🚀',
    },
    {
      number: '05',
      color: '#f59e0b',
      title: 'Career & Internship Guide',
      tag: 'Career',
      tagColor: 'tag-career',
      points: [
        'How to get internships using your project',
        'Showcase your portfolio to recruiters',
        'LinkedIn & GitHub profile tips',
      ],
      emoji: '💼',
    },
  ];

  return (
    <section className="curriculum-section section" id="curriculum">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">📚 Workshop Curriculum</span>
          <h2 className="section-title">
            What You'll <span className="gradient-text">Learn</span>
          </h2>
          <p className="section-subtitle">
            5 power-packed sessions. Hands-on learning. You'll walk out with a
            live project. Workshop conducted in <strong>{CONFIG.workshopLanguage}</strong>.
          </p>
        </div>

        <div className="curriculum-timeline">
          {sessions.map((session, index) => (
            <div
              className={`curriculum-card reveal stagger-${index + 1}`}
              key={index}
              id={`session-${index}`}
            >
              <div
                className="curriculum-card-accent"
                style={{ background: session.color }}
              ></div>
              <div className="curriculum-card-header">
                <div className="curriculum-card-left">
                  <span className="curriculum-emoji">{session.emoji}</span>
                  <div>
                    <span className="curriculum-session-num">
                      Session {session.number}
                    </span>
                    <h3 className="curriculum-card-title">{session.title}</h3>
                  </div>
                </div>
                <div className="curriculum-card-meta">
                  <span className={`curriculum-tag ${session.tagColor}`}>
                    {session.tag}
                  </span>
                </div>
              </div>
              <ul className="curriculum-points">
                {session.points.map((point, j) => (
                  <li key={j}>
                    <span className="curriculum-check" style={{ color: session.color }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
