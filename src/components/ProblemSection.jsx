export default function ProblemSection() {
  const problems = [
    {
      icon: '😤',
      title: 'No Coding Skills?',
      description:
        "You've tried learning to code but tutorials feel endless, confusing, and never lead to a real project you can show off.",
    },
    {
      icon: '📂',
      title: 'No Real Projects?',
      description:
        "Your resume is empty. You have no portfolio, no GitHub, and nothing to demonstrate your skills in an interview.",
    },
    {
      icon: '😰',
      title: 'Placement Struggles?',
      description:
        "Companies want practical skills and projects. Without hands-on experience, getting placed feels nearly impossible.",
    },
  ];

  return (
    <section className="problem-section section" id="problems">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">⚡ Sound Familiar?</span>
          <h2 className="section-title">
            You're <span className="gradient-text">Not Alone</span>
          </h2>
          <p className="section-subtitle">
            Most college students face these exact same challenges. But there's a better way.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((item, index) => (
            <div
              className={`problem-card reveal stagger-${index + 1}`}
              key={index}
              id={`problem-card-${index}`}
            >
              <span className="problem-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
