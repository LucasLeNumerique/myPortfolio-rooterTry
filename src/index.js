import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import CV from './pages/CV/CV';
import NoPage from './pages/NoPage/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>    
          <Route index element={<Home />} />    {/* Composant-page d'accueil */}
          <Route path='/projets' element={<Projects />} />    {/* Composant-page de liste des projets */}
          <Route path='/curriculum-vitae' element={<CV />} />    {/* Composant-page du CV */}
          <Route path='*' element={<NoPage />} />    {/* Composant-page d'erreur 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
