
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ListaClientesComponente from './components/ListaClientesComponente';
import FooterComponent from './services/FooterComponent';
import HeaderComponent from './services/HeaderComponent';
import AddClienteComponet from './components/AddClienteComponet';

function App() {
  return (
    <div className="App">
       <BrowserRouter>    
          <HeaderComponent></HeaderComponent>
          <div className='container'>
            <Routes>
                <Route exact path= "/" element={<ListaClientesComponente></ListaClientesComponente>}></Route>
                <Route path = "/clientes" element={<ListaClientesComponente></ListaClientesComponente>}></Route>
                <Route path='/add-cliente' element={<AddClienteComponet></AddClienteComponet>}></Route>
                <Route path='/edit-cliente/:id' element={<AddClienteComponet></AddClienteComponet>}></Route>
                <Route path='/delete-cliente/:id' element={<ListaClientesComponente></ListaClientesComponente>}></Route>
            </Routes>
          </div>
       </BrowserRouter>
 
        <FooterComponent></FooterComponent>
        
    </div>
  );
}

export default App;
