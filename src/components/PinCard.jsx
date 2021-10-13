import React, { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
const PinCard = (props) => {
const [inHover, setHover] = useState(false);


  return (
    <div className={props.class} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size],position:'relative' }}>
      
      {inHover &&
      <div className='btn-hov'  style={{display:'flex', position:'absolute', zIndex:'1', justifyContent: 'space-between', padding:'10px', boxSizing: 'border-box' ,flexDirection:'column', height:'100%', width:'100%' ,alignItems:'flex-end'}}>
        
        
        <button className='btn-guardar' style={{ display:'flex',alignItems:'center',backgroundColor:'red',border:'transparent',borderRadius:'100px',fontSize:'15px',height:'40px',color:'white',fontWeight:'bold',cursor:'pointer'}}>Guardar</button>
        <h3 className='ilustration' style={{ display:'flex',position:'absolute',left:'30px',top:'-5px',color:'white'}}>illustratio...▼ </h3>
        <div style={{display:'flex'}}>
          <FontAwesomeIcon className='bell' icon={faUpload} style={{backgroundColor:'white',fontSize:'20px',border:'transparent',borderRadius:'150px',padding:'5px',margin:'10px',cursor:'pointer'}}/>
          <button className="btn-puntos"style={{display:'flex',alignItems:'flex-start',backgroundColor:'white',border:'transparent',borderRadius:'100px',fontSize:'20px',height:'30px',margin:'10px',cursor:'pointer'}}>...</button>
        </div>
      </div>
      }
      <img id='dd'src={props.image} alt='img'  className={ ` ${inHover ? "img-onHover" : ""} `}  style={{ ..._stylesPinCard.pin_card.image,width:'100%',height:'100%',borderRadius:'16px',zIndex:'0' }} />
      <div style={{display:'flex',}}>
      <svg className="perfil" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0">
            </path>
        </svg>
        <span>  UserName </span>
      </div>
      
  </div>
  
  );
};



const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    top: '80px',
    cursor: 'zoom-in'
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
 
};


export default PinCard;
