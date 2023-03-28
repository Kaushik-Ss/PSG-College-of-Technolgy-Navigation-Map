import React,{useState} from 'react';
import k_block from '../static/images/k_block.jpg';
// import floating_data from './floating_data';
import '../static/style/floating.css';
import ImageMapper from './temp.js';


export default function Image() {
  function floating_data() {
    return (
        <div className='data'>
            props
            
            HIIII
        </div>
    );
}
  


const AREAS_MAP = {
  name: "my-map",
  areas: [
    { name: "bfhenwjm", shape: "rect", coords: [340,831,414,929], fillColor: "blue" , lineWidth: 2 , strokeColor: "#6afd09" },
    { name: "dbhansj", shape: "rect", coords: [490,637,692,460], lineWidth: 2 , strokeColor: "#6afd09" }
  ]
};
// function overlaying(){
//   return (
//     <div >
//         hello this is tooltip
//     </div>
// );
// }
// function enterArea(area) {
//   setState({ hoveredArea: area });
// }

// function leaveArea(area) {
//   setState({ hoveredArea: null });
// }

// function getTipPosition(area) {
//   return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
// }

const renderTooltip = <span>Hello World</span>;

  const [showComponent, setShowComponent] = useState(false);

  function handleMouseOver() {
   
    setShowComponent(true);
    showComponent && floating_data();
  }

  function handleMouseOut() {
    setShowComponent(false);
  }

  return (

    
    <div>

    

{/* {
    	this.state.hoveredArea &&
    	<span className="tooltip"
    	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
    		{ this.state.hoveredArea && this.state.hoveredArea.name}
    	</span>
    } */}
<ImageMapper src={k_block} map={AREAS_MAP} 
onMouseEnter={area => this.enterArea(area)}


/>

   {/* <img id='block' src={k_block} alt='k_block' useMap="#image-map"></img> 
    <map name="image-map" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
<area target="" alt="" title="" href="sadas.kdsd" coords="340,831,414,929" shape="rect"/>
<area target="" alt="" title="" href="dsd.html" coords="490,637,692,460" shape="rect"/>
</map> */}




    </div>
    
  )
}


