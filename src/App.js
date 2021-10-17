//import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/Nav';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
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
        
        <Switch>

          <Route exact path="/">
            <h1>Pagina de Inicio</h1>
            <ItemListContainer titulo="Nuestro catalogo"/>
          </Route>

          <Route exact path="/productos/:categoryId">
            <h1>Pagina de Productos</h1>
            <ItemListContainer titulo="Nuestro catalogo"/>
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/envios">
            <h1>Pagina de Envios</h1>
          </Route>

          <Route exact path="/contacto">
            <h1>Pagina de Contacto</h1>
          </Route>

          <Route exact path="/carrito">
            <h1>Mi carrito</h1>
          </Route>

          <Route exact path="*">
            <h1>Error 404... pagina no encontrada.</h1>
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
