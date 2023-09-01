import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './components/pages/Store';
import CartProvider from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComp></NavbarComp>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
