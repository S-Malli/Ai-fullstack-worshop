import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, ogImage }) {
  const defaultTitle = "AI Fullstack Workshop - Master AI & Web Dev | AI DigitalGen";
  const defaultDescription = "Master AI-powered Fullstack development. Build live projects, get internship guidance, and launch your career. Training in Tamil & English. Join AI DigitalGen today!";
  const defaultKeywords = "AI Fullstack Workshop, Web Development Internship, Learn AI, AI Project Workshop, AI DigitalGen, Zero Coding AI Course, Web Development Tamil";

  return (
    <Helmet>
      <title>{title ? `${title} | AI DigitalGen` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || "/og-image.png"} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      
      <html lang="en" /> {/* Balanced language tag */}
    </Helmet>
  );
}
