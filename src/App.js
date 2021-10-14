//import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/Nav';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <ItemListContainer titulo="Nuestro catalogo"/>
        <Switch>
          <Route path="/">
            <h1>Pagina de Inicio</h1>
          </Route>
          <Route exact path="/productos">
            <h1>Pagina de Productos</h1>
          </Route>
          <Route exact path="/envios">
            <h1>Pagina de Envios</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
