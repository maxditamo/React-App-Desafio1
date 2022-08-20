// import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App(props) {

const mensaje = 'Bienvenido a mi app'
const estilos = {
  backgroundColor: '#888',
  padding: '20px'
}

const log = () => { console.log('Hola');}
const log2 = () => { console.log('Hi');}


  return (
    <div className='conteiner'>
    <h1>¡Hola Mundo!</h1>
    <strong>Otro mensaje</strong>
    <h3 style= { estilos }>{ mensaje } </h3>
    <Saludo name='Juan' lastname='Perez' fn={log}> 
    <p>Mensaje 1</p>
    <p>Mensaje 2</p>
    <p>Mensaje 3</p>
    </Saludo>
    <Saludo name='Ana' lastname='Lopez' fn={log2}>
    <li>Un elemento de lista</li>
    </Saludo>
    <Saludo name='Miguel' lastname='Gonzalez'>
    </Saludo>
    </div>
  );
}

export default App;
