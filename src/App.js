import logo from './logo.svg';
import './App.css';
import Contacto  from './components/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contacto></Contacto>
      </header>
    </div>
  );
}

export default App;
