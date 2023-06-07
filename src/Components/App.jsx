// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import MovieBrief from './MovieBrief';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Movies />}></Route>
                <Route path='/movie/:_id' element={<MovieBrief />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
