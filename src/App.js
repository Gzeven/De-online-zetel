import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, PrivateRoute, AuthWrapper} from './pages'

function App() {
  return (
  <AuthWrapper>
  <Router>
  <Navbar/>
  <Sidebar/>
  <Switch >

  <Route exact path="/" >
  <Home />
  </Route>
 
  <Route exact path="/over-ons" >
  <About />
  </Route>
  
  <Route exact path="/winkelwagen" >
  <Cart />
  </Route>
 
  <Route exact path="/producten" >
  <Products />
  </Route>
  
  <Route exact path="/producten/:id" children={<SingleProduct/>} />
  
  <PrivateRoute exact path="/bestellen" >
  <Checkout />
  </PrivateRoute>

  <Route path="*" >
  <Error />
  </Route>


  </Switch>
  <Footer/>
  
  </Router>
  </AuthWrapper>
  )
}

export default App
