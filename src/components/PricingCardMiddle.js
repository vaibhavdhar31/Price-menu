import React from 'react'
import '../styles/PricingCardMiddle.css';


const PricingCardMiddle = ({ title,strike, price, month, resumate, securesight, talentdash,candid,assessments }) => {
  return (
    <div className="PricingCardMiddle">
      <header>
        <p className="card-title">{title}</p>
        <h2 className="card-title">{strike}</h2>
        <h1 className="card-price">{price}</h1>
        <h1 className="card-price">{month}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage"> ResuMate {resumate}</div>
        <div className="card-storage">SecureSight {securesight}</div>
        <div className="card-storage">TalentDash {talentdash}</div>
        <div className="card-storage">CandidInsights {candid}</div>
        <div className="card-storage">{assessments} AI-driven Assessments</div>
      </div>
      <button className="card-btn">Get Started</button>
    </div>
  )
}

export default PricingCardMiddle
