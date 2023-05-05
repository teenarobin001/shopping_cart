import React from 'react'; 
import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilterProducts from './Components/FilterProducts/FilterProducts';
import SingleProduct from './Components/FilterProducts/SingleProduct'; 
import NavBar from './Components/NavBar/NavBar';
import NavigateButtons from './Components/NavigateButtons/NavigateButtons';  
import LoginPage from './Components/LoginPage/LoginPage';
import SearchProducts from './Components/FilterProducts/SearchProducts';

import Footer from './Components/Footer/Footer';
import { useSelector } from 'react-redux';

function App() {
 const user =  useSelector(state=>state.auth.user);
 const {authUser} = user;


 let routes = (
  <Routes><Route path='/' element={<LoginPage />}></Route></Routes>
);

if (authUser) {
  routes = (
    <Routes>
  <Route path="/" element={<Main /> }></Route> 
  <Route path="/filteredProducts/:type" element={<FilterProducts />}></Route>
  <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route> 
  <Route path="/searchFilter/:value" element={<SearchProducts />}></Route>
  </Routes>
  );
}

 
   
  return (
    <div className="App">
      
      <BrowserRouter>
      {authUser?
      <>
      <NavBar />
      <NavigateButtons />
      </>
      :null
    }
      
       {routes} 
      
      {authUser?
      <><Footer /></>  :null
    }
      </BrowserRouter> 
    </div>
  );
}

export default App;
