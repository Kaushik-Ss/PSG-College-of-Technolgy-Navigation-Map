import React, { useState, useRef, useEffect } from 'react';
import k_block_data from '../static/data/k_block.json';
import k_block from '../static/images/k_block.jpg';
import '../static/style/floating.css';
import Floatingdata from './Floatingdata.js';


const ImageMap = () => {
  const [showText, setShowText] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [textContent, setTextContent] = useState('');
  const imageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const areaRefs = useRef([]);


  useEffect(() => {
  const handleMouseOver = (event) => {
    const x = event.clientX;
      const y = event.clientY;

      const text = event.currentTarget.dataset.text;
      if (text) {
        setTextPosition({ x, y });
        setTextContent(text.split("<br/>").join("\n"));
        setShowText(true);
      } else {
        setShowText(false);
      }
      setIsHovering(true);}
    const handleMouseOut = () => {setIsHovering(false);
    setShowText(false);}
  

    const areas = areaRefs.current;
    areas.forEach(area => {
      area.addEventListener('mouseover', handleMouseOver);
      area.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      areas.forEach(area => {
        area.removeEventListener('mouseover', handleMouseOver);
        area.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);


      
  const handleMapHover = event => {
    if (!isHovering) {

      
      const coords = event.target.getAttribute('coords').split(',');
      const width = imageRef.current.clientWidth;
      const height = imageRef.current.clientHeight;
      const mapSelector = document.querySelector('.map-selector');
      mapSelector.classList.add('hover');
      mapSelector.style.left = `${coords[0]}px`;
      mapSelector.style.top = `${coords[1]}px`;
      mapSelector.style.right = `${width - coords[2]}px`;
      mapSelector.style.bottom = `${height - coords[3]}px`;
    }
  };

  const handleMapLeave = () => {
    if (!isHovering) {
      const mapSelector = document.querySelector('.map-selector');
      mapSelector.classList.remove('hover');
      mapSelector.removeAttribute('style');
      setShowText(false);
    }
  };



  return (
    <>
    <div style={{ position: 'relative' }}>
      

<div className="image-map-container">
    <img src={k_block} useMap="#image-map" alt='Map' ref={imageRef}/>
    <div className="map-selector"></div>
</div>


<div id="overlay"></div>
      <map name="image-map" id="image-map" onMouseMove={handleMapHover} onMouseLeave={handleMapLeave}>
{k_block_data.areas.map((area, index) => (
          <area ref={el => areaRefs.current[index] = el}
            key={index}
            shape={area.shape}
            coords={area.coords}
            data-text={area.text}
            alt = 'data_map'
          />
        ))}
      </map>
      
      {showText && (
        <div className='floating-text'
          style={{
            display: 'block',
            height: 'auto',
            position: 'fixed',
            top: textPosition.y,
            left: textPosition.x,
            backgroundColor: 'blue',
            whiteSpace: "pre-line",
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            padding: '10px',
            zIndex: 1,
            opacity: 1,
            transition: 'opacity 200ms, display 200ms',
            color: 'white'
          }
        
        }
        >
          {textContent}
          <Floatingdata />

        </div>
      )}
    </div>
    </>
  );
};

export default ImageMap;