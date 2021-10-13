import React from 'react';
import '../App.css';

const HeaderTelefono = () => {
    return(
       
            <div  style = {headerStyle2.HeaderTelefono}>
                <div style={{...headerStyle2.parati }} >
                    <span>Para ti</span>
                </div>
                <div>
                    <span>Hoy </span>
                </div>
                <div>
                    <span>ilustration...</span>
                </div>
                <div>
                    <span>Recetas de</span>
                </div>
                
            </div>
        
        
       
    );

   

};

const   headerStyle2 = {
    HeaderTelefono: {
        width: '100vw',
        backgroundColor: 'white',
        height: '9vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize:'20px',
        
      },
      parati: {
        
        borderbottom:'1px solid red',
        
      },
}

export default HeaderTelefono;