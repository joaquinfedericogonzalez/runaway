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
import { CartProvider } from './components/context/CartContext'
import { CartScreen } from './components/CartScreen/CartScreen';


function App() {

  return (
    <div className="App">
      
      <CartProvider>

        <BrowserRouter>

                        <Nav/>
                        
                        <Switch>

                          <Route exact path="/">
                            <ItemListContainer titulo="Nuestro catalogo"/>
                          </Route>

                          <Route exact path="/productos/:categoryId">
                            <ItemListContainer titulo="Nuestro catalogo"/>
                          </Route>

                          <Route exact path="/productos">
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
                            <CartScreen/>
                          </Route>

                          <Route exact path="*">
                            <h1>Error 404... pagina no encontrada.</h1>
                          </Route>

                        </Switch>

                </BrowserRouter>

      </CartProvider>

      

    </div>
  );
}

export default App;
