export default function WhoIsItFor() {
  const categories = [
    {
      title: 'Non-IT Background',
      description: 'Zero coding knowledge? No problem. We start from the absolute basics.',
      emoji: '💡',
    },
    {
      title: 'College Students',
      description: 'Perfect for students looking to build real-world tech skills early.',
      emoji: '🎓',
    },
    {
      title: 'Internship Seekers',
      description: 'Stand out from the crowd with a live deployed project on your profile.',
      emoji: '🚀',
    },
    {
      title: 'Final Year Projects',
      description: 'Get expert guidance on building and deploying your final year project.',
      emoji: '📚',
    },
    {
      title: 'Resume Weightage',
      description: 'Add "AI-Powered Fullstack Developer" to your resume and get noticed.',
      emoji: '📄',
    },
    {
      title: 'AI Trend Interests',
      description: 'Stay ahead of the curve by learning the latest AI development tools.',
      emoji: '🤖',
    },
  ];

  return (
    <section className="who-section section" id="who-is-it-for">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">🎯 Who is this for?</span>
          <h2 className="section-title">
            Designed for <span className="gradient-text">Future Creators</span>
          </h2>
          <p className="section-subtitle">
            Whether you are a beginner or looking to upgrade, this workshop is for you.
          </p>
        </div>

        <div className="who-grid reveal">
          {categories.map((cat, i) => (
            <div className="who-card" key={i}>
              <div className="who-icon">{cat.emoji}</div>
              <h3 className="who-title">{cat.title}</h3>
              <p className="who-desc">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
