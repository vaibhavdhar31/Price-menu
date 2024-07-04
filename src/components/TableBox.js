// TableBox.js
import React from 'react';
import '../styles/TableBox.css';

const tableHead = [
  { text: 'Our Pricing Plan', className: 'main-heading' }, 
  { 
    text: (
      <span style={{ fontSize: '19px',position: 'relative', top: '7px' }}>Basic<br />
        <span style={{ fontSize: '32px', color: 'black' }}>$49.99</span>
        <span style={{ fontSize: '15px', color: '#5E5B5B', fontWeight: '100' }}>/month</span><br />
        <span style={{ fontSize: '13px', color: 'black', fontWeight: '100', fontFamily: 'serif', position: 'relative', top: '-6px' }}>List Price: $99.99</span><br />
        <span style={{ fontSize: '13px', color: '#5E5B5B', fontWeight: '100', fontFamily: 'serif', position: 'relative', top: '-13px' }}>Annually: $599.99</span>
      </span>
    ), 
    className: 'firsts-heading' 
  }, 
  { 
    text: (
      <span style={{ fontSize: '19px',position: 'relative', top: '7px' }}>Premium<br />
        <span style={{ fontSize: '32px', color: 'black' }}>$99.99</span>
        <span style={{ fontSize: '15px', color: '#5E5B5B', fontWeight: '100' }}>/month</span><br />
        <span style={{ fontSize: '13px', color: 'black', fontWeight: '100', fontFamily: 'serif', position: 'relative', top: '-6px' }}>List Price: $199.99</span><br />
        <span style={{ fontSize: '13px', color: '#5E5B5B', fontWeight: '100', fontFamily: 'serif', position: 'relative', top: '-13px' }}>Annually: $1199.99</span>
      </span>
    ), 
    className: 'second-heading' 
  }, 
  { 
    text: (
      <span style={{ fontSize: '25px',position: 'relative', top: '15px' }}>Contact Us<br />
        <span style={{ fontSize: '13px', color: 'black', fontWeight: '100', fontFamily: 'serif', position: 'relative', top: '-13px' }}>Our team will brief about</span><br />
        <span style={{ fontSize: '13px', color: 'black', fontWeight: '100', fontFamily: 'serif', position: 'relative', top: '-28px' }}>unlimited plan</span>
      </span>
    ), 
    className: 'third-heading' 
  }, 
];

const tableBody = {
  'ResuMate': ['2000 AI Resume<br>Screening', '5000 AI Resume<br> Screening', 'Unlimited'],
  'SecureSight': ['✅', '✅', '✅'],
  'TalentDash': ['✅', '✅', '✅'],
  'CandidInsights': ['✅', '✅', '✅'],
  'AI-driven Assessments': ['1000', '2500', 'Unlimited'],
  'AI Interview': ['❌', '✅', '✅'],
  'Video Recording': ['❌', '✅', '✅'],
};

const Table = () => (
  <table className="responsive-table">
    <thead>
      <tr>
        {tableHead.map((head, index) => (
          <th key={index} style={{ textAlign: 'center', height: '45px' }} className={head.className}>
            {head.text}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {Object.keys(tableBody).map((type, index) => (
        <tr key={index}>
          <td className='left-column'>{type}</td>
          {tableBody[type].map((price, priceIndex) => (
            <td className={`right-wrong ${index === 1 ? 'firsts-heading' : ''}`} key={priceIndex}>
              {price.includes('<br>') ? (
                <span dangerouslySetInnerHTML={{ __html: price }} />
              ) : (
                price
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
