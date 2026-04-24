export default function ProblemSection() {
  const problems = [
    {
      icon: '😩',
      title: 'No Coding Knowledge',
      description:
        "You feel stuck because you don't know where to start or how to write code that actually works.",
    },
    {
      icon: '📂',
      title: 'No Real Projects',
      description:
        "Your resume lacks real-world projects, making it hard to stand out from thousands of other students.",
    },
    {
      icon: '😰',
      title: 'Not Getting Internships',
      description:
        "Companies are rejecting you because you don't have practical experience or a portfolio to show.",
    },
    {
      icon: '🤔',
      title: 'Confused Where to Start',
      description:
        "You're overwhelmed by too many tutorials and don't have a clear roadmap to reach your goals.",
    },
  ];

  return (
    <section className="problem-section section" id="problems">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">⚡ Sound Familiar?</span>
          <h2 className="section-title">
            You are <span className="gradient-text">Not Alone...</span>
          </h2>
          <p className="section-subtitle">
            Many students struggle with these same issues every day. We're here to help you bridge that gap.
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
