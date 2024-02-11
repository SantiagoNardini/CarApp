import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/vehiculos/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='/contacto' element={ <Nosotros /> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;
