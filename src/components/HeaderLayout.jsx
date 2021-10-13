import React from 'react';
import '../App.css';

const HeaderLayout = () => {

  return(
    <div className='headerPC'>
    <div style = {headerStyle.headerLayoutS}>
      <div onMouseLeave={hoverOut} style={{...headerStyle.logo }} onMouseOver={hoverIn}>
        <svg onMouseLeave={hoverOut} className="gUZ lZJ U9O kVc" height="24" width="24" fill='red'viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
          <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12">
          </path>
        </svg>
      </div>
      <div className='text' style={{...headerStyle.text1 }}>
        <span>Inicio</span>
      </div>
      <div className='text' style={{...headerStyle.text }}>
        <span>Hoy</span>
      </div>
      <div style={{...headerStyle.find }}>
        <div style={{...headerStyle.contentFind }}>
          <div style={{...headerStyle.searchIcon }}>
            <div className="Eqh wc1 zI7 iyn Hsu">
              <svg className="gUZ B9u U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-label="Ícono de búsqueda" role="img">
                <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                </path>
              </svg>
            </div>
          </div>
          <input type="text" placeholder="Buscar" style={{...headerStyle.searchBar }}/>
        </div>
      </div>
      <div onMouseLeave={hoverOut} onMouseOver={hoverIn} style={{...headerStyle.icons }}>
        <svg onMouseLeave={hoverOut} className="gUZ B9u U9O kVc" fill='#767676' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
          <path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z">
          </path>
        </svg>
      </div>
      <div onMouseLeave={hoverOut} onMouseOver={hoverIn} style={{...headerStyle.icons }}>
        <svg onMouseLeave={hoverOut} className="Hn_ gUZ B9u U9O kVc" fill='#767676' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
          <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
          </path>
        </svg>
      </div>

      <div onMouseLeave={hoverOut} onMouseOver={hoverIn} style={{...headerStyle.icons}}>
        <svg onMouseLeave={hoverOut} className="perfil" height="32" fill='#767676' viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0">
            </path>
        </svg>
      </div>
      <div onMouseLeave={hoverOut} onMouseOver={hoverIn} style={{...headerStyle.icons }}>
        <svg onMouseLeave={hoverOut} className="gUZ B9u U9O kVc" height="12" fill='#767676' width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
          <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z">
          </path>
        </svg>
      </div>
    </div>
    </div>
    
  );
};

const hoverOut = (e) => {
  e.target.style.backgroundColor = '#FFFFFF';
}

const hoverIn = (e) => {
  e.target.style.backgroundColor = '#F0F0F0';
}

const   headerStyle = {
  headerLayoutS: {
    width: '100vw',
    backgroundColor: 'white',
    height: '9vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'fixed',
    zIndex:'6',
  },
  logo: {
    display: 'flex',
    width: '3%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
  },
  find:{
    display: 'flex',
    width: '70%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentFind:{
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    display: 'flex',
    width: '3%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '50%'
  },
  text: {
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  text1: {
    backgroundColor:'black',
    color:'white',
    borderRadius:'100px',
    padding:'10px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  searchBar: {
    height: '70%',
    width: '90%',
    borderRadius: '30px',
    backgroundColor: '#EFEFEF',
    border: 'none',
    paddingLeft: '35px'
  },
  searchIcon:{
    position: 'relative',
    left: '30px',
    fill: '#767676'
  }
};

export default HeaderLayout;
