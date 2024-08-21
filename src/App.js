import React from 'react';
import Home from './Pages/Home';
import Location from './Pages/Location';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Location' element={<Location/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;