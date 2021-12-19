import logo from './logo.svg';
import './App.css';
import Listacontactos from './componentes/listadecontactos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Listacontactos></Listacontactos>
      </header>
    </div>
  );
}

export default App;
