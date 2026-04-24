export default function WhoIsItFor() {
  const categories = [
    {
      title: 'College Students',
      description: 'BCA, BSc, BE, BTech, or any degree. Perfect for building tech skills early.',
      emoji: '🎓',
    },
    {
      title: 'Non-IT Background',
      description: 'Zero coding knowledge? No problem. We start from absolute basics.',
      emoji: '💡',
    },
    {
      title: 'Final Year Students',
      description: 'Need a solid project for your final year? Build and deploy it here.',
      emoji: '📚',
    },
    {
      title: 'Internship Seekers',
      description: 'Stand out from the crowd with a live deployed project on your resume.',
      emoji: '🚀',
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
            This isn't just for "techies." It's for anyone with the curiosity to 
            learn and the drive to build. <strong>Your background doesn't define your potential.</strong>
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
