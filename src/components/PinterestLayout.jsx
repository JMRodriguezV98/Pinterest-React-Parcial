import React from 'react';
import PinCard from './PinCard';
import styled, { css } from 'styled-components';

const Pin_container = styled.div`
  @media (maxwidth: 600px) {
    grid-template-columns: repeat(2, 20%);
  }
`;

const PinterestLayout = () => {
  return (
    <Pin_container className='pop' style={stylesLayout.pin_container}>
      <br/>
      <br/>
      <br/>
      
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/564x/9e/8d/06/9e8d0633c55f92bbc51874a081927814.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/40/e2/d1/40e2d1a5b63a4811f2e64b1246fc8d08.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/69/84/bf/6984bf5ff5374fd7bf1a1b2f37918687.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/dd/6c/08/dd6c08b2f2ce1e011c1b8ea0a4f22238.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/22/a1/3f/22a13f24e76de69617b434e742a5eee6.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/1a/fa/ca/1afaca151d2afe9caf8dbac8467c7262.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/52/06/bb/5206bb7d7e40723b4ea21230885ef70f.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/a4/49/71/a44971344b2ca960cf85878f0ee4106f.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/03/6f/6a/036f6a1b3970c24cf16a6f096adb6ebe.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/2c/13/55/2c1355e88918bcae3915041645ab2b7c.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/08/b5/d7/08b5d7dc33675384f4a5971d51829154.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/c5/44/9e/c5449e60cfe25e76b06de25c61e5e0d9.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/21/20/17/2120175b7a5a66a75f7f2fed581e00ef.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/3f/05/34/3f05340a8d5582cab3db1baddeee6f09.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/ca/a1/48/caa14891a8edc0a6cdd07ae91fb69baf.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/b4/6f/ac/b46fac6c48701a8cc4a41333d5a9bc7f.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/c4/17/1a/c4171a0cc89d537b8e0ec68247c77155.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/1e/2b/05/1e2b05a6a264e2c90330415001af9b0e.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/1e/2b/05/1e2b05a6a264e2c90330415001af9b0e.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/08/b5/d7/08b5d7dc33675384f4a5971d51829154.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/c5/44/9e/c5449e60cfe25e76b06de25c61e5e0d9.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/21/20/17/2120175b7a5a66a75f7f2fed581e00ef.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/3f/05/34/3f05340a8d5582cab3db1baddeee6f09.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/ca/a1/48/caa14891a8edc0a6cdd07ae91fb69baf.jpg'/>
      <PinCard class={'small' } size='small' image='https://i.pinimg.com/236x/b4/6f/ac/b46fac6c48701a8cc4a41333d5a9bc7f.jpg'/>
      <PinCard class={'medium'} size='medium' image='https://i.pinimg.com/236x/c4/17/1a/c4171a0cc89d537b8e0ec68247c77155.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/1e/2b/05/1e2b05a6a264e2c90330415001af9b0e.jpg'/>
      <PinCard class={'large' } size='large' image='https://i.pinimg.com/236x/1e/2b/05/1e2b05a6a264e2c90330415001af9b0e.jpg'/>
      
    </Pin_container>
  );
};

const stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    // backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    //gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
     
  },
  
};

export default PinterestLayout;
