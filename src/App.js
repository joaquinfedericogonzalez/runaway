//import logo from './logo.svg';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/Nav/Nav';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import { CartScreen } from './components/CartScreen/CartScreen';
import { Checkout } from './components/Checkout/checkout';
import { UIProvider } from './components/context/UIContext';


function App() {

  return (
    <div className="App">
      <UIProvider>

      
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

                            <Route exact path="/checkout">
                              <Checkout/>
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
        
      </UIProvider>
      

    </div>
  );
}

export default App;
