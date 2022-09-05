import './App.css';
// import BasicExample from './components/CardProduct';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ProductsConteiner from './components/ProductsConteiner';



function App() {

  return (
    <div className='conteiner'>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenidos a Apa Bars'}/>
    <div className='conteinerCard' >
    <ProductsConteiner/>
    </div>
    {/* <div className='divCard'>
    <BasicExample/>
    <BasicExample/>
    <BasicExample/>
    </div> */}
    </div>
  );
}

export default App;



