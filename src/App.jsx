import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddEmp from './components/AddEmp';
import ViewEmp from './components/ViewEmp';
import ListEmp from './components/ListEmp';
import './App.css';

const listContext = createContext();

function App() {

 const [employeelist,setemployeelist] = useState([]);
  return (
    <>
      <listContext.Provider value={{employeelist,setemployeelist}}>
     <BrowserRouter>
             <Navbar/>
         <Routes>
           <Route path='/' element={<ListEmp/>}></Route>
           <Route path='/add' element={<AddEmp/>}></Route>
        </Routes>
    </BrowserRouter>
    </listContext.Provider>
    </>
  )
}
export {listContext}

export default App;
