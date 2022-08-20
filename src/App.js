// import logo from './logo.svg';
import './App.css';
function App() {

const mensaje = 'Bienvenido a mi app'
const estilos = {
  backgroundColor: '#888'
}

  return (
    <div className='conteiner'>
    <h1>¡Hola Mundo!</h1>
    <h3>style= { estilos } { mensaje } </h3>
    </div>
  );
}

export default App;
