
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import Wish from './Pages/Wish';
import Basket from './Pages/Basket';
import Details from './Pages/Details';

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/add' element={<AddPage/>}/>
  <Route path='/wish' element={<Wish/>}/>
  <Route path='/basket' element={<Basket/>}/>
  <Route path='/:id' element={<Details/>}/>

  </Route>
</Routes>
      </BrowserRouter>

    </HelmetProvider>

  )
}

export default App
