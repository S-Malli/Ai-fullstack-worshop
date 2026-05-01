import React from 'react';
import landingImg from '../assets/business_landing_page.png';
import aiToolImg from '../assets/ai_tool_ui.png';
import saasImg from '../assets/saas_dashboard.png';
import projectDemoImg from '../assets/project_demo.png';

export default function ProjectDemo() {
  const projects = [
    { name: "Live Session Project", img: projectDemoImg, caption: "Real-world project built during class" },
    { name: "Business Landing Page", img: landingImg, caption: "No coding background student project" },
    { name: "AI Tool UI", img: aiToolImg, caption: "Built in 10 minutes using AI" },
    { name: "Simple SaaS Dashboard", img: saasImg, caption: "No coding background student project" }
  ];

  return (
    <section className="project-demo-section section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container reveal">
        <div className="class-preview-header">
          <span className="section-label">🔥 MOST IMPORTANT</span>
          <h2 className="section-title">See What You Will <span className="gradient-text">Build</span></h2>
          <p className="section-subtitle">Real student-level projects created using AI</p>
        </div>
        
        <div className="demo-grid">
          {projects.map((project, index) => (
            <div key={index} className="demo-card">
              <img 
                src={project.img} 
                alt={`${project.name} - Real-world project built using AI tools`} 
                className="demo-card-img"
              />
              <h3 className="demo-card-title">{project.name}</h3>
              <p className="demo-card-caption">
                ✨ {project.caption}
              </p>
              <a href="#register" className="btn-secondary demo-card-btn">
                View Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
