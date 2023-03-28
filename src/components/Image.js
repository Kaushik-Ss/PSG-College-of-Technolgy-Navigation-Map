import React, { useState, useRef, useEffect } from 'react';
import k_block from '../static/images/k_block.jpg';
// import floating_data from './floating_data';
import '../static/style/floating.css';
import ImageMapper from './temp.js';



const ImageMap = () => {
  const [showText, setShowText] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [textContent, setTextContent] = useState('');
  const [selectedArea, setSelectedArea] = useState(null);
  const imageRef = useRef(null);

  const handleMouseOver = (event) => {


    const t=document.getElementById("image-map");
    console.log(t)
    // t.style.filter = "blur(6px)";



    
console.log(event.target.getAttribute('data-unblur'))
    if (event.target.getAttribute('data-unblur') === 'true') {
    event.target.style.filter="none";
    console.log(event.target);

    const coords = event.target.getAttribute('coords').split(',');
      const x1 = parseInt(coords[0]);
      const y1 = parseInt(coords[1]);
      const x2 = parseInt(coords[2]);
      const y2 = parseInt(coords[3]);
      const overlay = document.querySelector('#overlay');
      overlay.innerHTML = `
        <div class="area-highlight" style="top: ${y1}px; left: ${x1}px; width: ${x2 - x1}px; height: ${y2 - y1}px; filter: none;"></div>
      `;
    }

    // t.style.backgroundColor = 'yellow';
    // t.style.color = 'red';
    // // t.style.
    // t.classList.add('highlight');
    console.log(t);
    // t.style.background="red";
    const x = event.clientX;
    const y = event.clientY;

    const text = event.currentTarget.dataset.text;
    if (text) {
      setTextPosition({ x, y });

      setTextContent(text);
      setShowText(true);
    } else {
      setShowText(false);
    }
  };

  const handleMouseOut = () => {
    setShowText(false);
    setSelectedArea(null);
    const t=document.getElementById("image-map");
    console.log(t)
    // t.style.filter = "blur(0px)";
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={k_block}
        alt="Your image"
        useMap="#image-map"
        id="image-map"
        ref={imageRef}
      />
<div id="overlay"></div>
      <map name="image-map">
        <area
          shape="rect"
          coords="340,831,414,929"
        data-text="DEPT OF. COMPUTER APPLICATTIONS"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={selectedArea === 'AREA' ? 'highlight' : ''}
          data-unblur="true" 
      
        />
        <area
          shape="rect"
          coords="490,637,692,460"
          className={selectedArea === 'AREA' ? 'highlight' : ''}
          data-text="MCA COMPUTER LAB"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        
        />
        
        {/* add more areas as needed */}
      </map>

      {showText && (
        <div
          style={{
            position: 'fixed',
            top: textPosition.y,
            left: textPosition.x,
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            padding: '10px',
            zIndex: 1,
          }}
        >
          {textContent}
        </div>
      )}
    </div>
  );
};

export default ImageMap;