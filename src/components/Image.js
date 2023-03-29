import React, { useState, useRef, useEffect } from 'react';
import k_block_data from '../static/data/k_block.json';
import k_block from '../static/images/k_block.jpg';
import '../static/style/floating.css';
import Floating_data from './Floating_data.js';
import $ from "jquery";

const ImageMap = () => {
  const [showText, setShowText] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [textContent, setTextContent] = useState('');
  const [selectedArea, setSelectedArea] = useState(null);
  const imageRef = useRef(null);
  const [areas, setAreas] = useState([]);

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
    };

    const handleMouseOut = () => {
      setShowText(false);
      setSelectedArea(null);
    };

    // Use jQuery inside the function
    $('area').on('mouseover', handleMouseOver);
    $('area').on('mouseout', handleMouseOut);

    // Clean up the event listeners when the component unmounts
    return () => {
      $('area').off('mouseover', handleMouseOver);
      $('area').off('mouseout', handleMouseOut);

      $('#image-map area').hover(
        function () { 
            var coords = $(this).attr('coords').split(','),
                width = $('.image-map-container').width(),
                height = $('.image-map-container').height();
            $('.image-map-container .map-selector').addClass('hover').css({
                'left': coords[0]+'px',
                'top': coords[1] + 'px',
                'right': width - coords[2],
                'bottom': height - coords[3]
            })
        },
        function () { 
            $('.image-map-container .map-selector').removeClass('hover').attr('style','');
        }
    )


      
    };
  }, []);


  return (
    <>
    <div style={{ position: 'relative' }}>
      

<div className="image-map-container">
    <img src={k_block} useMap="#image-map" ref={imageRef}/>
    <div className="map-selector"></div>
</div>


<div id="overlay"></div>
      <map name="image-map" id="image-map">
{k_block_data.areas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            data-text={area.text}
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
          <Floating_data/>
        </div>
      )}
    </div>
    </>
  );
};

export default ImageMap;