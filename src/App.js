import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ProductsConteiner from './components/ProductsContainer';

function App() {

  return (
    <div className='conteiner'>
    <ItemListContainer greeting={'Bienvenidos a Apa Bars'}/>
    <ProductsConteiner/>
    </div>
  );
}

export default App;



