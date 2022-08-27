import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='conteiner'>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenidos a Apa Bars'}/>
    </div>
  );
}

export default App;
