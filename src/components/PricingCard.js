import React from 'react'
import '../styles/PricingCard.css';

const PricingCard = ({ title,strike, price, month, resumate, securesight, talentdash,candid,assessments }) => {
  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{title}</p>
        <h2 className="card-title">{strike}</h2>
        <h1 className="card-price">{price}</h1>
        <h1 className="card-price">{month}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage"> ResuMate {resumate}</div>
        <div className="card-users-allowed">SecureSight {securesight}</div>
        <div className="card-send-up">TalentDash {talentdash}</div>
        <div className="card-send-up">CandidInsights {candid}</div>
        <div className="card-send-up">{assessments} AI-driven Assessments</div>
      </div>
      <button className="card-btn">Get Started</button>
    </div>
  )
}

export default PricingCard
