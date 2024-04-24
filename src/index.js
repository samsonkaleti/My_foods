import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import Header from './Components/Header';
import Body from './Components/Body';

const AppLayout = () =>{
  return(
    <div className="">
    <Header/> 
    <Body/>
    
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppLayout/>

);


