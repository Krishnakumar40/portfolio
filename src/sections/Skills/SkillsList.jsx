import React, { useState } from 'react';
function SkillsList({src,skill,color,hoverColor}) {
  const [isHovered, setIsHovered] = useState(false);
  const textStyle = { // Adjust as per your need
    textShadow: `0 0 10px ${isHovered ? hoverColor : 'transparent'}, 
    0 0 20px ${isHovered ? hoverColor : 'transparent'}, 
    0 0 30px ${isHovered ? hoverColor : 'transparent'}, 
    0 0 40px ${isHovered ? hoverColor : 'transparent'}`,
transition: 'text-shadow 0.3s ease-in-out,transform 0.3s ease-in-out',
  };
  return (
    <span  onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>
    <img src={src} alt={`${src} logo`}/>
    <p style={textStyle}>{skill}</p>
</span>
  )
}

export default SkillsList
