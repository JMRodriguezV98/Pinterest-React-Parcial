import './App.css';
import HeaderLayout from './components/HeaderLayout';
import HeaderTelefono from './components/HeaderTelefono';
import PinterestLayout from './components/PinterestLayout';
import FootTel from './components/FootTel';

const App = () => {
  return (
    <div>
      <HeaderLayout />
      <HeaderTelefono/>
      <PinterestLayout />
      
      <div className='headerTel'>
        <FootTel/>
      </div>
    </div>
  );
};

export default App;
