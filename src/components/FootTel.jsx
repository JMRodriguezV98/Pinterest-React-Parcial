import React, {useState, useEffect} from 'react';
import '../App.css';

const FooTel = () => {

    const [visible, setVisible] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', function(){
            if ((document.body.getBoundingClientRect()).top > scrollPos){
                setVisible(false);
            }else{
                setVisible(true);
            }
              setScrollPos((document.body.getBoundingClientRect()).top);
          });
    },[scrollPos]);

    if(!visible){
        return null;
    }

    return(
        <div className='fot'>
            <div  style = {headerStyle2.FooTel}>
                <div className="hA- wYR zI7 iyn Hsu">
                    <svg className="gUZ pBj" height="24" width="24" viewBox="0 0 24 24" aria-label="Inicio" role="img">
                        <path d="M12 0L1 10v14h8v-7a3 3 0 116 0v7h8V10z">
                        </path>
                    </svg>
                </div>
                <div>
                    <svg className="gUZ B9u U9O kVc" fill='#767676' height="24" width="24" viewBox="0 0 24 24" aria-label="Ícono de búsqueda" role="img">
                        <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                        </path>
                    </svg>
                </div>
                <div>
                    <svg className="Hn_ gUZ B9u U9O kVc" fill='#767676' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                        <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                        </path>
                    </svg>
                </div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" height="24" width="24" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#767676' d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
            </div>
        </div>
        
       
    );

   

};

const   headerStyle2 = {
    FooTel: {
        width: '200px',
        backgroundColor: 'white',
        borderRadius:'100px',
        height: '9vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize:'20px',
        position:'fixed',
        left:'20%',
        top:'90%'
        
      },
      
}

export default FooTel;