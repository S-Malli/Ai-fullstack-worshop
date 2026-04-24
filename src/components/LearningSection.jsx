import { CONFIG } from '../constants/config';

export default function LearningSection() {
  const sessions = [
    {
      number: '01',
      color: '#3A86FF',
      title: 'No Coding Background Needed',
      tag: 'Foundation',
      tagColor: 'tag-hook',
      points: [
        'How AI makes coding accessible for everyone',
        'Zero prerequisite knowledge required',
        'Setting up your AI-powered workspace',
      ],
      emoji: '🎯',
    },
    {
      number: '02',
      color: '#8338EC',
      title: 'Build Project Using AI',
      tag: 'Hands-On',
      tagColor: 'tag-handson',
      points: [
        'Prompt engineering for web development',
        'Generating UI and logic with AI tools',
        'Real-time project building session',
      ],
      emoji: '🤖',
    },
    {
      number: '03',
      color: '#FF006E',
      title: 'Deploy Live in 1 Day',
      tag: 'Launch',
      tagColor: 'tag-deploy',
      points: [
        'Connecting your project to the internet',
        'Free hosting and domain setup',
        'Get a live link you can share immediately',
      ],
      emoji: '🚀',
    },
    {
      number: '04',
      color: '#22c55e',
      title: 'Add to Resume & Portfolio',
      tag: 'Branding',
      tagColor: 'tag-fullstack',
      points: [
        'Showcasing AI projects to recruiters',
        'Optimizing your GitHub and LinkedIn',
        'Building a professional project description',
      ],
      emoji: '📄',
    },
    {
      number: '05',
      color: '#f59e0b',
      title: 'Get Internship Guidance',
      tag: 'Career',
      tagColor: 'tag-career',
      points: [
        'Applying for internships with your new skills',
        'Interview prep for AI-enhanced roles',
        'Exclusive internship resource access',
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
            What You Will <span className="gradient-text">Build</span>
          </h2>
          <p className="section-subtitle">
            By the end of this workshop, you will have: <strong>A live website, a project to showcase, 
            and the confidence to apply for internships.</strong>
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
