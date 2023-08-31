import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './components/pages/Cancel';
import Store from './components/pages/Store';
import Success from './components/pages/Success';
import CartProvider from './CartContext';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComp></NavbarComp>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
