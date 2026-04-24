export default function SolutionSection() {
  const features = [
    { icon: '🤖', text: 'Build a real working project using AI' },
    { icon: '🚀', text: 'Deploy your project live' },
    { icon: '📄', text: 'Add project to your resume' },
    { icon: '👔', text: 'Understand how to approach HR' },
    { icon: '🎯', text: 'Learn internship strategy' },
  ];

  return (
    <section className="solution-section section" id="solution">
      <div className="container">
        <div className="solution-content">
          <div className="solution-visual reveal-left">
            <div className="solution-mockup">
              <div className="solution-code-block">
                <span className="code-line">
                  <span className="code-keyword">{'<'}</span>
                  <span className="code-tag">div</span>
                  <span className="code-attr"> className</span>
                  <span className="code-keyword">={'"'}</span>
                  <span className="code-string">my-portfolio</span>
                  <span className="code-keyword">{'">'}</span>
                </span>
                <span className="code-line">
                  {'  '}<span className="code-keyword">{'<'}</span>
                  <span className="code-tag">h1</span>
                  <span className="code-keyword">{'>'}</span>
                  <span className="code-string">Hello World! 🚀</span>
                  <span className="code-keyword">{'</'}</span>
                  <span className="code-tag">h1</span>
                  <span className="code-keyword">{'>'}</span>
                </span>
                <span className="code-line">
                  {'  '}<span className="code-keyword">{'<'}</span>
                  <span className="code-tag">p</span>
                  <span className="code-keyword">{'>'}</span>
                  Built with AI + React
                  <span className="code-keyword">{'</'}</span>
                  <span className="code-tag">p</span>
                  <span className="code-keyword">{'>'}</span>
                </span>
                <span className="code-line">
                  <span className="code-keyword">{'</'}</span>
                  <span className="code-tag">div</span>
                  <span className="code-keyword">{'>'}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="solution-text reveal-right">
            <span className="section-label">💡 The Solution</span>
            <h2>
              This workshop will <span className="gradient-text">help you:</span>
            </h2>
            <p>
              Stop feeling stuck in tutorials. AI is your personal mentor that 
              bridges the gap between "I can't code" and "I built this." 
              You'll walk out with the confidence to build any idea you have.
            </p>
            <div className="solution-features">
              {features.map((feat, i) => (
                <div className="solution-feature" key={i}>
                  <span className="solution-feature-icon">{feat.icon}</span>
                  <span>{feat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
