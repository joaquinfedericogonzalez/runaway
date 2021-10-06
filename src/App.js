//import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './itemList';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListContainer titulo="Nuestro catalogo"/>
    </div>
  );
}

export default App;
